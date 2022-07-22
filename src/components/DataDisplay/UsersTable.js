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



export default function UsersTable({users}) {

    const CustomizedMenus = ({userId}) => {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };

        const handleClose = (event) => {
          setAnchorEl(null);

          const data = {
            action: event.target.innerText,
            userId:userId
          }
          console.log(data)
          
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
                      Edit User
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
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="right">GAME ID</StyledTableCell>
                <StyledTableCell align="right">NAME</StyledTableCell>
                <StyledTableCell align="right">PHONE NUMBER</StyledTableCell>
                <StyledTableCell align="right">REFERRED BY</StyledTableCell>
                <StyledTableCell align="right">ROLE</StyledTableCell>
                <StyledTableCell align="right">STATUS</StyledTableCell>
                <StyledTableCell align="right">WALLET BALANCE</StyledTableCell>
                <StyledTableCell align="right">JOIN DATE</StyledTableCell>
                <StyledTableCell align="right">ACTIONS</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {users.map((user) => (
            <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row">{user.id}</StyledTableCell>
                <StyledTableCell align="right">{user.game_id}</StyledTableCell>
                <StyledTableCell align="right">{user.name}</StyledTableCell>
                <StyledTableCell align="right">{user.username}</StyledTableCell>
                <StyledTableCell align="right">{user.referred_by}</StyledTableCell>
                <StyledTableCell align="right">
                  <FormatRole isAdmin={user.is_admin} isStaff={user.is_staff} />
                </StyledTableCell>
                <StyledTableCell align="right"><FormatStatus isActive={user.is_active} /> </StyledTableCell>
                <StyledTableCell align="right">{user.wallet_balance}</StyledTableCell>
                <StyledTableCell align="right">{user.created_at}</StyledTableCell>
                <StyledTableCell align="right">
                  <CustomizedMenus userId={user.id} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        
    </React.Fragment>

  );
}
