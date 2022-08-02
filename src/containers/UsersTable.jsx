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
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PersonIcon from '@mui/icons-material/Person';
import { Fab, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { formatMoney, formatDate, getRole } from '../utils';
import Dialog from "../components/Feedback/Dialog"


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


const FormatStatus = ({isActive}) => {
    if (isActive) {
        return <FormatSpan color="#33691e" bg="#c5e1a5">ACTIVE</FormatSpan>
    } else {
        return <FormatSpan color="#b71c1c" bg="#ef9a9a">BANNED</FormatSpan>
    }
}

const FormatRole = ({isAdmin, isStaff}) => {
    if (isAdmin) {
        return (
          <MenuItem>
              <AdminPanelSettingsIcon color="primary" />
              ADMIN
          </MenuItem>
        )
        
    } if (isStaff) {
         return (
          <MenuItem>
              <VerifiedUserIcon color="success" />
              STAFF
          </MenuItem>
        )
    }else {
         return (
          <MenuItem>
              <PersonIcon color="warning" />
              PLAYER
          </MenuItem>
        )
    }
}



export default function UsersTable({
  searchForm:SearchForm, 
  createUserForm:CreateUserForm,
  editUserForm:EditUserForm,
  deleteUser:DeleteUser,
  activateUser:ActivateUser,
  banUser:BanUser,
  viewUser:ViewUser,
  users
}) {

  const [open, setOpen] = React.useState(false);

  const [payload, setPayload] = React.useState({
    action: "",
    user: {
          id: 0,
          gameId: 0,
          name: "", 
          username: "", 
          role: "",
          referredBy: "",
          walletBalance: 0,
          createdAt: "",
          updatedAt: ""
    }
  });

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
      setPayload({
        action: "",
        user: {
          id: 0,
          gameId: 0,
          name: "", 
          username: "", 
          role: "",
          referredBy: "",
          walletBalance: 0,
          createdAt: "",
          updatedAt: ""
        }
      })
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


    const CustomizedMenus = ({user}) => {
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
              user: {
                id: user.id, 
                gameId: user.game_id, 
                name: user.name, 
                username: user.username, 
                role: getRole(user.is_admin, user.is_staff, user.is_agent),
                referredBy: user.referred_by,
                walletBalance: user.wallet_balance,
                createdAt: user.created_at,
                updatedAt: user.updated_at
              }
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
                      View User
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                      <EditIcon color="primary" />
                      Edith User
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                      <DeleteIcon color="primary" />
                      Delete User
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={handleClose} disableRipple>
                      <CheckBoxIcon color="primary" />
                      Activate User
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                      <BlockIcon color="primary" />
                      Ban User
                  </MenuItem>
              </StyledMenu>
            </div>
        );
    }

  return (
    <React.Fragment>
        <Grid container spacing={4}>
            <Grid item xs={12} md ={3}>
              <Item elevation={4}>
                  <Button 
                  fullWidth 
                  variant="contained" 
                  startIcon={<AddBoxIcon />} 
                  sx={{px: 5}} 
                  onClick={() => handleOpen()}
                  >
                    Create New User
                  </Button>
              </Item>
            </Grid>

            <Grid item xs={12} md ={9}>
              <Item elevation={4}>
                  <SearchForm />
              </Item>
            </Grid>
        </Grid>

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="left">GAME ID</StyledTableCell>
                <StyledTableCell align="left">NAME</StyledTableCell>
                <StyledTableCell align="left">PHONE NUMBER</StyledTableCell>
                <StyledTableCell align="left">REFERRED BY</StyledTableCell>
                <StyledTableCell align="left">ROLE</StyledTableCell>
                <StyledTableCell align="left">STATUS</StyledTableCell>
                <StyledTableCell align="left">WALLET BALANCE</StyledTableCell>
                <StyledTableCell align="left">JOIN DATE</StyledTableCell>
                <StyledTableCell align="left">ACTIONS</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {users.map((user) => (
            <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row">{user.id}</StyledTableCell>
                <StyledTableCell align="left">{user.game_id}</StyledTableCell>
                <StyledTableCell align="left">{user.name}</StyledTableCell>
                <StyledTableCell align="left">{user.username}</StyledTableCell>
                <StyledTableCell align="left">{user.referred_by}</StyledTableCell>
                <StyledTableCell align="left">
                  <FormatRole isAdmin={user.is_admin} isStaff={user.is_staff} />
                </StyledTableCell>
                <StyledTableCell align="left"><FormatStatus isActive={user.is_active} /> </StyledTableCell>
                <StyledTableCell align="left">{formatMoney(user.wallet_balance)}</StyledTableCell>
                <StyledTableCell align="left">{formatDate(user.created_at)}</StyledTableCell>
                <StyledTableCell align="left">
                  <CustomizedMenus user={user} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

        <Dialog 
          color={purple[900]}
          title={
            payload.action === "View User" ? "View User":
            payload.action === "Delete User" ? "Delete User": 
            payload.action === "Ban User" ? "Ban User": 
            payload.action === "Activate User" ? "Activate User": 
            payload.action === "Edith User" ? "Edith User": "Create New User"
          }
          dialogActions={dialogActions}
          open={open}
          handleClose={handleClose}
        >
          {
            payload.action === "View User" ? (
              <ViewUser user={payload.user} />
            ) : payload.action === "Edith User" ? (
              <EditUserForm 
                userId={payload.user.id}
                name={payload.user.name}
                username={payload.user.username}
                role={payload.user.role}
              />
            ):  payload.action === "Delete User" ? (
              <DeleteUser userId={payload.user.id} />
            ): payload.action === "Activate User" ? (
              <ActivateUser userId={payload.user.id} />
            ): payload.action === "Ban User" ? (
              <BanUser userId={payload.user.id} />
            ): (
              <CreateUserForm />
            )
          }
        </Dialog>
        
    </React.Fragment>

  );
}
