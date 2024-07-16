import React from "react";
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

const columns = [
  { id: "slNo", label: "SL no" },
  { id: "requestId", label: "Request Id" },
  { id: "createdOn", label: "Created On" },
  { id: "location", label: "Location" },
  { id: "service", label: "Service" },
  { id: "department", label: "Department" },
  { id: "requestBy", label: "Request By" },
  { id: "assignTo", label: "Assign To" },
  { id: "priority", label: "priority" },
];

function createData(
  slNo,
  requestId,
  createdOn,
  location,
  service,
  department,
  requestBy,
  assignTo,
  priority
) {
  return {
    slNo,
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

const rows = [
  createData(
    1,
    "REQ001",
    "2023-01-01",
    "New York",
    "IT Support",
    "IT",
    "John Doe",
    "Jane Smith",
    "High"
  ),
  createData(
    2,
    "REQ002",
    "2023-02-01",
    "Los Angeles",
    "Maintenance",
    "Facilities",
    "Alice Johnson",
    "Bob Brown",
    "Medium"
  ),
  createData(
    3,
    "REQ003",
    "2023-03-01",
    "Chicago",
    "Security",
    "Security",
    "Michael Green",
    "Nancy White",
    "Low"
  ),
  createData(
    4,
    "REQ004",
    "2023-04-01",
    "Houston",
    "Housekeeping",
    "Facilities",
    "Olivia Blue",
    "David Black",
    "Medium"
  ),
  createData(
    5,
    "REQ005",
    "2023-05-01",
    "Phoenix",
    "IT Support",
    "IT",
    "Lucas Gray",
    "Emma Pink",
    "High"
  ),
  createData(
    6,
    "REQ006",
    "2023-06-01",
    "Philadelphia",
    "IT Support",
    "IT",
    "Sophia Purple",
    "Noah Brown",
    "Low"
  ),
  createData(
    7,
    "REQ007",
    "2023-07-01",
    "San Antonio",
    "IT Support",
    "IT",
    "Liam Red",
    "Ava Blue",
    "Medium"
  ),
  createData(
    8,
    "REQ008",
    "2023-08-01",
    "San Diego",
    "IT Support",
    "IT",
    "Isabella Green",
    "Mason Yellow",
    "High"
  ),
  createData(
    9,
    "REQ009",
    "2023-09-01",
    "Dallas",
    "IT Support",
    "IT",
    "Mia Black",
    "Ethan White",
    "Low"
  ),
  createData(
    10,
    "REQ010",
    "2023-10-01",
    "San Jose",
    "IT Support",
    "IT",
    "Ella Gray",
    "William Red",
    "Medium"
  ),
];

export default function RequestsTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
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
                            backgroundColor : '#ff9933'
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
