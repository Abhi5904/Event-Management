import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import  {DataGrid}  from '@mui/x-data-grid';
import './table.css'


const Tabledata = ({rows,columns}) => {
  return (
    <DataGrid style={{background:'#fff'}}
    rows={rows}
    columns={columns}
    initialState={{
      pagination: {
        paginationModel: { page: 0, pageSize: 10 },
      },
    }}
  />
  )
}

export default Tabledata
