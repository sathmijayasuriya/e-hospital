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
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { pink, red,green, blue } from '@mui/material/colors';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DoneIcon from '@mui/icons-material/Done';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import RequestForm from "./RequestForm";

const columns = [
  { id: "requestId", label: "Request Id" },
  { id: "createdOn", label: "Created On" },
  { id: "location", label: "Location" },
  { id: "service", label: "Service" },
  { id: "status", label: "Status" },
  { id: "department", label: "Department" },
  { id: "requestedBy", label: "Request By" },
  { id: "assignedTo", label: "Assign To" },
  { id: "priority", label: "priority" },
  { id: "actions", label: "Actions" },
];

function createData(requestId, createdOn,location,service,status,department,requestedBy,assignedTo,priority) {
  return {
    requestId,
    createdOn,
    location,
    service,
    status,
    department,
    requestedBy,
    assignedTo,
    priority,
  };
}

export default function RequestsTable() {
  //fetch
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);  // State to hold the fetched data

  //edit form handling
  const [formOpen, setFormOpen] = useState(false); // Control the form dialog visibility
  const [selectedRequest, setSelectedRequest] = useState(null); // Holds the request data for editi

  useEffect(() => {
    // Fetch data when component mounts
    const fetchData = async () => {
      try {
        const data = await FetchRequests();
        console.log("data ,"+data);
        // Convert data to the format required for table
        const formattedData = data.map((item) =>
          createData(
            item.requestId,
            item.createdOn, 
            item.floor + item.room,
            item.service,
            item.status,
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

//delete button
const handleDeleteClick = (requestId) =>{
  console.log("delete request : " ,requestId)
}

//edit
const handleEditClick = (row) =>{
  console.log("edit request", row);
  setSelectedRequest(row); // Set the full request row as the selected request
  setFormOpen(true); // Open the form

}

  return (
    <>
      <Box sx={{ height: "auto", backgroundColor: "#f2f2f2", width: "auto%",padding:"30px"}}>
        <SearchBar/>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 500 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                {/*  map the columns in table header row */}
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      sx={{ fontSize: '14px', 
                            textAlign:"center",
                            color:"black",
                            borderBottom: '3px solid #d9d9d9' // Change this to the desired colo
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
                  .map((row) => {   //each row in the sliced data
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.requestId}>   
                        {/* // each row is uniquely identifiable */}
                        {columns.map((column) => {
                          const value = row[column.id]; //value = requestid , createon ...
                          // /dynamically gets the data from the row object based on the column's id.
                          return (
                            <TableCell key={column.id} align={column.align} sx={{textAlign:"center"}}>
                            {column.id === "actions" ? (
                              <>
                                <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
                                <Avatar sx={{width: 32, height: 32, bgcolor: pink[200] }} alt="Remy Sharp">
                                <EditNoteIcon  
                                  sx={{ cursor: 'pointer', marginRight: 1,fontSize: '15px'}}
                                  onClick={() => handleEditClick(row)}
                                />
                                </Avatar>
                                {/* Delete Button */}
                                <Avatar alt="Remy Sharp" sx={{width: 32, height: 32,bgcolor: red[500] }} >
                                <DeleteOutlinedIcon 
                                  sx={{ cursor: 'pointer', fontSize: '18px' }}
                                  onClick={() => handleDeleteClick(row.requestId)}
                                />
                                </Avatar>
                                <Avatar alt="Remy Sharp" sx={{width: 32, height: 32, bgcolor: green[300] }} >
                                <DoneIcon 
                                  sx={{ cursor: 'pointer' ,fontSize: '15px'}}
                                  onClick={() => handleDeleteClick(row.requestId)}
                                />
                                </Avatar>
                                </Stack>
                              </>
                            ) : (
                              value
                            )}
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

      <RequestForm 
        open={formOpen} 
        handleClose={() => setFormOpen(false)} 
        requestData={selectedRequest} // Pass the selected request to edit
        isEditing={!!selectedRequest} // Mark as editing mode if a request is selected
      />
    </>

  );
}
