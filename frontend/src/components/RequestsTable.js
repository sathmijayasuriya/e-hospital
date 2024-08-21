import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { Box } from "@mui/material";
import SearchBar from "./SearchBar";
import { FetchRequests } from "../service/EhospitalAPI";

const columns = [
  { id: "requestId", label: "Request Id" },
  { id: "createdOn", label: "Created On" },
  { id: "location", label: "Location" },
  { id: "service", label: "Service" },
  { id: "department", label: "Department" },
  { id: "requestBy", label: "Request By" },
  { id: "assignTo", label: "Assign To" },
  { id: "priority", label: "priority" },
];

function createData(requestId, createdOn,location,service,department,requestBy,assignTo,priority) {
  return {
    requestId,
    createdOn,
    location,
    service,
    department,
    requestBy,
    assignTo,
    priority,
  };
}

export default function RequestsTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);  // State to hold the fetched data

  useEffect(() => {
    // Fetch data when component mounts
    const fetchData = async () => {
      try {
        const data = await FetchRequests();
        // Convert data to the format required for table
        const formattedData = data.map((item, index) =>
          createData(
            index + 1,
            item.requestID,
            item.createdOn,  // Ensure your API returns a date string in the correct format
            item.floor + item.room,
            item.service,
            item.department,
            item.requestedBy,
            item.assignedTo,
            item.priority
          )
        );
        setRows(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Box sx={{ height: "auto", backgroundColor: "#f2f2f2", width: "auto%",padding:"30px"}}>
        <SearchBar/>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 500 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      sx={{ fontSize: '14px', 
                            backgroundColor : '#f4edda'
                      }}  // Adjust font size for headers

                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>{" "}
      </Box>
    </>
  );
}
