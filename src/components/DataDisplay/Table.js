import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: 600,
    fontSize: 16,

  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const Circle = styled("span")(({color}) => ({
    display: "inline-block;",
    backgroundColor: `${color}`,
    borderRadius: "50%;",
    height: "10px;",
    width:"10px;",
}));


const CreateCircle = (props) => {
  let colorDot = "red"
  if (props.color === "RED") {
    colorDot = "red"
  } else if (props.color === "GREEN") {
    colorDot = "green"
  }else if (props.color === "VIOLET") {
    colorDot = "violet"
  }else if (props.color === "VIOLET,GREEN") {
    return(
      <div>
        <Circle color="green"></Circle>
        <Circle color="violet" sx={{ml:1}}></Circle>
      </div>
    )
  }else if (props.color === "VIOLET,RED") {
    return(
      <div>
        <Circle color="red"></Circle>
        <Circle color="violet" sx={{ml:1}}></Circle>
      </div>
    )
  }

  return <Circle color={colorDot}></Circle>
  
}

const FormatNumber = (props) => {
  let color = "";
  if (props.color === "RED" || props.color === "VIOLET,RED") {
    color = "red"
  } else {
    color = 'green'
  }   
  return <span style={{color: color}}>{props.number}</span>
}


export default function CustomizedTables(props) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Period</StyledTableCell>
            <StyledTableCell align="right">Number</StyledTableCell>
            <StyledTableCell align="right">Size</StyledTableCell>
            <StyledTableCell align="right">Color</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.games.map((game) => (
            <StyledTableRow key={game.period}>
              <StyledTableCell>
                {game.period}
              </StyledTableCell>
              <StyledTableCell align="right"> 
                <FormatNumber color={game.color} number={game.number} /> 
              </StyledTableCell>
              <StyledTableCell align="right">{game.size}</StyledTableCell>
              <StyledTableCell align="right"> <CreateCircle color={game.color} /> </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
