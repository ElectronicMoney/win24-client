import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import { Box } from '@mui/system';
import { formatDate, formatMoney } from '../../utils';

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

const SingleColorCircle = styled("span")(({color, bg}) => ({
    display: "inline-flex;",
    alignItems: "center;" ,
    justifyContent: "center;",
    fontSize: "14px",
    fontWeight: 500,
    background: `${bg}`,
    color: `${color}`,
    borderRadius: "100%",
    width: "18px",
    height: "18px",
    border: `0.5px solid #333`,
}));

const SingleColor = styled("span")(({color, bg}) => ({
    display: "inline-flex;",
    alignItems: "center;" ,
    justifyContent: "center;",
    fontSize: "14px",
    fontWeight: 500,
    background: `${bg}`,
    color: `${color}`,
    borderRadius: "100%",
    width: "18px",
    height: "18px",
    border: `0.5px solid ${bg}`,
}));


const DoubleColorCircle = styled("span")(({color}) => ({
    display: "inline-flex;",
    alignItems: "center;" ,
    justifyContent: "center;",
    fontSize: "14px",
    fontWeight: 500,
    borderRadius: "10px;",
    borderRightColor: "#b518c4",
    borderTopColor:  color,    
    borderBottomColor: "#b518c4",
    borderLeftColor: color,
    borderWidth: "10px;",
    borderStyle: "solid;",
    color:"#fff",
    height: "0;",
    width:"0",
}));

const FormatSpan = styled("span")(({color, bg}) => ({
    fontSize: "14px",
    fontWeight: 500,
    background: `${bg}`,
    color: `${color}`,
    padding: '5px',
    borderRadius: "5px"
}));



const FormatStatus = (props) => {
  if (props.status === "PENDING") {
    return <FormatSpan color="#333" bg="#cfd8dc">{props.children}</FormatSpan>
  } else if (props.status === "WIN" || props.status === "COMPLETED") {
    return <FormatSpan color="#33691e" bg="#c5e1a5">{props.children}</FormatSpan>
  } else {
    return <FormatSpan color="#b71c1c" bg="#ef9a9a">{props.children}</FormatSpan>
  }
}

const FormatStake = ({status, color, number, size}) => {
  if (status === "PENDING") {
    return <FormatSpan color="#333" bg="#cfd8dc">{color ? color: number ? number: size}</FormatSpan>
  } else if (status === "WIN" || status === "COMPLETED") {
    return <FormatSpan color="#33691e" bg="#c5e1a5">{color ? color: number ? number: size}</FormatSpan>
  } else {
    return <FormatSpan color="#b71c1c" bg="#ef9a9a">{color ? color: number ? number: size}</FormatSpan>
  }
}




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


const FormatChartData = ({game}) => {
  return (
    <React.Fragment>
      {
        [0,1,2,3,4,5,6,7,8,9].map(number => {
          if (game.winning_number === number) {
            if (number === 0 ) {
              return  <DoubleColorCircle key={number}  color={"red"}>0</DoubleColorCircle>
            }
            
            if (number === 5 ) {
              return  <DoubleColorCircle key={number} color={"green"}>5</DoubleColorCircle>
            }
            
            if (number <= 4 ) {
              return <SingleColor key={number} bg={"red"} color={"#fff"}>{number}</SingleColor>
            } else {
              return <SingleColor key={number} bg={"green"} color={"#fff"}>{number}</SingleColor>
            }
          }else {
            return <SingleColorCircle key={number}>{number}</SingleColorCircle>
          }
         
        })
      }
    
      {
      game.winning_size === "SMALL" ? (<SingleColor bg="yellow" color="#333" sx={{ml:1}}>S</SingleColor>):
      (<SingleColor bg="green" color="#fff" sx={{ml:1}}>B</SingleColor>)
    
      }
      
    </React.Fragment>
  )

}

const GamesTable = ({games}) => {
  if (games.length >= 1) {
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
              {games.map((game) => (
                  game.winning_size ? (
                      <StyledTableRow key={game.id}>
                      <StyledTableCell>
                        {formatDate(game.created_at)}
                      </StyledTableCell>
                      <StyledTableCell align="right"> 
                        <FormatNumber color={game.winning_color} number={game.winning_number} /> 
                      </StyledTableCell>
                      <StyledTableCell align="right">{game.winning_size}</StyledTableCell>
                      <StyledTableCell align="right"> <CreateCircle color={game.winning_color} /> </StyledTableCell>
                    </StyledTableRow>
                  ): ""
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
  } else {
    return  (
      <Box sx={{mt:5}}>
          <Alert severity="info">No game records found!</Alert>
      </Box>
    )
  }
}

const ChartTable = ({games}) => {
  if (games.length >= 1) {
      return (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Period</StyledTableCell>
                <StyledTableCell align="right">Number</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {games.map((game, index) => (
                game.winning_size ? (
                  <StyledTableRow key={game.id}>
                  <StyledTableCell>
                    {formatDate(game.created_at)}
                  </StyledTableCell>
                  <StyledTableCell align="right"> 
                    <FormatChartData game={game} key={index} />
                  </StyledTableCell>
                </StyledTableRow>
                ): ""
                
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
  } else {
    return  (
      <Box sx={{mt:5}}>
          <Alert severity="info">No game records found!</Alert>
      </Box>
    )
  }
}

const BetsTable = ({bets}) => {
  if (bets.length >= 1) {
      return (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell align="right">My Stake</StyledTableCell>
                <StyledTableCell align="right">Bet Amount</StyledTableCell>
                <StyledTableCell align="right">Win Amount</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bets.map((bet, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>
                    {formatDate(bet.created_at)}
                  </StyledTableCell>
                  <StyledTableCell align="right"> 
                    <FormatStake 
                      status={bet.status} 
                      color={bet.color} 
                      number={bet.number} 
                      size={bet.size}
                    />
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    <FormatStatus status={bet.status}> 
                      {formatMoney(bet.bet_amount)}
                    </FormatStatus>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <FormatStatus status={bet.status}> 
                      {formatMoney(bet.win_amount)}
                    </FormatStatus>
                  </StyledTableCell>
                  <StyledTableCell align="right"> 
                    <FormatStatus status={bet.status}> {bet.status} </FormatStatus> 
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
  } else {
    return  (
      <Box sx={{mt:5}}>
        <Alert severity="info">You don't have any bet record yet!</Alert>
      </Box>
    )
  }
}


const TransactionTable = ({transactions}) => {
  if (transactions.length >= 1) {
      return (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell align="right">ID</StyledTableCell>
                <StyledTableCell align="right">Method</StyledTableCell>
                <StyledTableCell align="right">Amount</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((transaction, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>
                    {formatDate(transaction.created_at)}
                  </StyledTableCell>
                  <StyledTableCell align="right">{transaction.id}</StyledTableCell>
                  <StyledTableCell align="right"> <strong>{transaction.method}</strong></StyledTableCell>
                  <StyledTableCell align="right">
                    <FormatStatus status={transaction.status}> {formatMoney(transaction.amount)}
                    </FormatStatus>
                  </StyledTableCell>
                  <StyledTableCell align="right"> 
                    <FormatStatus status={transaction.status}> {transaction.status} </FormatStatus> 
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
  } else {
    return  (
      <Box sx={{mt:5}}>
        <Alert severity="info">You don't have any transaction record yet!</Alert>
      </Box>
    )
  }
}

export default function CustomizedTables(props) {
   if (props.isGames) {
    return <GamesTable games={props.games} />
   }else if (props.isBet) {
    return <BetsTable bets={props.bets} />
   } else if (props.isTransactions) {
    return <TransactionTable transactions={props.transactions} />
   } 
   else{
      return <ChartTable games={props.games} />
   }
}
