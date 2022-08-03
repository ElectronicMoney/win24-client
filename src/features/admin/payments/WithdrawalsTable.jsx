import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Fab, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Alert } from '@mui/material';
import { formatMoney, formatDate } from '../../../utils';
import Dialog from "../../../components/Feedback/Dialog"
import SearchWithdrawalForm from "./SearchWithdrawalForm"
import ApproveWithdrawal from "./ApproveWithdrawal"
import CancelWithdrawal from "./CancelWithdrawal"
import CreatePaymentForm from './CreatePaymentForm';
import ViewWithdrawal from './ViewWithdrawal';
import { useGetWithdrawalsQuery } from '../../../services/withdrawalsApi';
import Pagination from '../../../components/Navigation/Pagination'
import LinearProgress from "../../../components/Feedback/LinearProgress"



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    marginBottom: "2rem"
  }));


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));


const FormatSpan = styled("span")(({color, bg}) => ({
    fontSize: "14px",
    fontWeight: 500,
    background: `${bg}`,
    color: `${color}`,
    padding: '5px',
    borderRadius: "5px"
}));




const FormatStatus = ({status}) => {
  if (status === "PENDING") {
    return <FormatSpan color="#333" bg="#cfd8dc">{status}</FormatSpan>
  } else if (status === "COMPLETED") {
    return <FormatSpan color="#33691e" bg="#c5e1a5">{status}</FormatSpan>
  } else {
    return <FormatSpan color="#b71c1c" bg="#ef9a9a">{status}</FormatSpan>
  }
}



export default function WithdrawalsTable() {

  const [open, setOpen] = React.useState(false);

  const [payload, setPayload] = React.useState({action: "", withdrawal: null});


  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
      setPage(value);
  };

  const { data:withdrawals, error, isLoading, isError, isSuccess} = useGetWithdrawalsQuery(page)


  const handleOpen = () => {
    setOpen(true);
  };


  const handleClose = (event, reason) => {
    // "escapeKeyDown", "backdropClick"
    if(reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
          // Set 'open' to false, however you would do that with your particular code.
          setOpen(false);
      }
      // Clernce oncloe
      setPayload({action: "", withdrawal: null})
  };

  const dialogActions = () => {
      return (
        <Fab 
          variant="circle" 
          size="small" 
          color="error" 
          aria-label="bet"
          onClick={() => handleClose()}
          >
            <CloseIcon />
          </Fab>
      )
  }


    const CustomizedMenus = ({withdrawal}) => {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };

        const handleClose = (event) => {
          setAnchorEl(null);

          if(event.target.innerText) {
            setPayload({
              action: event.target.innerText,
              withdrawal: {...withdrawal}
            }) 
            // Open dialog
            handleOpen()

          }
        };


        return (
            <div>
                <IconButton
                  id="demo-customized-iconButton"
                  aria-controls={open ? 'demo-customized-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
              >
              <MoreVertIcon />
              </IconButton>

              <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                  'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
              >
         
                  <MenuItem onClick={handleClose} disableRipple>
                      <VisibilityIcon color="primary" />
                      View Withdrawal
                  </MenuItem>

                  <MenuItem onClick={handleClose} disableRipple>
                      <CheckBoxIcon color="primary" />
                      Approve Withdrawal
                  </MenuItem>
                  
                  <MenuItem onClick={handleClose} disableRipple>
                      <CancelIcon color="primary" />
                      Cancel Withdrawal
                  </MenuItem>
                  
              </StyledMenu>
            </div>
        );
    }

  return (
    <Box>
        <Grid container spacing={4}>
            <Grid item xs={12} md ={3}>
              <Item elevation={4}>
                  <Button 
                  fullWidth 
                  variant="contained" 
                  startIcon={<AddBoxIcon />}  
                  onClick={() => handleOpen()}
                  >
                    Add New Payment Method
                  </Button>
              </Item>
            </Grid>

            <Grid item xs={12} md ={9}>
              <Item elevation={4}>
                  <SearchWithdrawalForm />
              </Item>
            </Grid>
        </Grid>


        {
          isLoading ? <LinearProgress />:
            isError ? (
              <Alert severity="error" sx={{ m: 2 }}>{error.message}</Alert>
            ): 
          isSuccess && withdrawals ? (
            withdrawals.items.length < 1 ? (
              <Item elevation={3}>                  
                  <Alert severity="info">No Withdrawal Found! </Alert>
              </Item>

            ): (
              
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell align="left">RECHARGE DATE</StyledTableCell>
                        <StyledTableCell align="left">RECHARGE REF NO</StyledTableCell>
                        <StyledTableCell align="left">METHOD</StyledTableCell>
                        <StyledTableCell align="left">AMOUNT</StyledTableCell>
                        <StyledTableCell align="left">STATUS</StyledTableCell>
                        <StyledTableCell align="left">APPROVED BY</StyledTableCell>
                        <StyledTableCell align="left">APPROVED DATE</StyledTableCell>
                        <StyledTableCell align="left">ACTIONS</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>

                      {
                          withdrawals.items.map((withdrawal) => (
                          <StyledTableRow key={withdrawal.id}>
                              <StyledTableCell component="th" scope="row">{withdrawal.id}</StyledTableCell>
                              <StyledTableCell align="left">{formatDate(withdrawal.created_at)}</StyledTableCell>
                              <StyledTableCell align="left">{withdrawal.reference_number}</StyledTableCell>
                              <StyledTableCell align="left">{withdrawal.method}</StyledTableCell>
                              <StyledTableCell align="left">{formatMoney(withdrawal.amount)}</StyledTableCell>
                              <StyledTableCell align="left">
                                <FormatStatus status={withdrawal.status} /> 
                              </StyledTableCell>
                              <StyledTableCell align="left">{withdrawal.approved_by}</StyledTableCell>
                              <StyledTableCell align="left">{formatDate(withdrawal.updated_at)}</StyledTableCell>
                              <StyledTableCell align="left">
                                <CustomizedMenus withdrawal={withdrawal} />
                              </StyledTableCell>
                            </StyledTableRow>
                          ))
                      }
                    </TableBody>
                </Table>
              </TableContainer>

            )
          ): null
        }


        <Paper elevation={3}
            sx={{
                display:"flex", 
                alignItems:"center", 
                justifyContent:"center", 
                mt:5, 
                p:2
            }}
        >
            {
                isSuccess && withdrawals ? (
                <Pagination 
                    total={ withdrawals.total } 
                    size={ withdrawals.size } 
                    page={withdrawals.page} 
                    onChange={handleChange}
                />
                ): ""
            }
        </Paper>

        <Dialog 
          color={purple[900]}
          title={
            payload.action === "View Withdrawal" ? "View Withdrawal":
            payload.action === "Approve Withdrawal" ? "Approve Withdrawal":
            payload.action === "Cancel Withdrawal" ? "Cancel Withdrawal": 
            "Add New Payment Method"
          }
          dialogActions={dialogActions}
          open={open}
          handleClose={handleClose}
        >
          {
            payload.action === "View Withdrawal" ?(
              <ViewWithdrawal withdrawal={payload.withdrawal} />
            ): payload.action === "Approve Withdrawalr" ? (
              <ApproveWithdrawal withdrawalId={payload.withdrawal.id} />
            ) : payload.action === "Cancel Withdrawal" ? (
              <CancelWithdrawal withdrawalId={payload.withdrawal.id}/>
            ): (
              <CreatePaymentForm />
            )
          }
        </Dialog>
        
    </Box>

  );
}

