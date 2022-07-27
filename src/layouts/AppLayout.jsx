import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SupportIcon from '@mui/icons-material/Support';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, Outlet, useLocation } from "react-router-dom";
import AppDrawer from '../components/Navigation/AppDrawaer'
import {ErrorBoundary} from '../errors/ErrorBandary'
import BottomNavBar from '../components/Navigation/BottomNavBar';
import Carousel from '../components/Navigation/Carousel'
import {sliderItems} from '../utils'
import { deleteAuthUser } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useLogoutApiMutation } from '../services/authApi';


// List of objects
const sideBarListItem = {
      firstItems:[
        {name: 'Home', icon: <HomeIcon />, path: '/app'},
        {name: 'About Us', icon: <InfoIcon />, path: '/app/about-us'},
        {name: 'Customer Service', icon: <SupportIcon />, path: '/app/customer-service'},
      ],

      secondtItems:[
        {name: 'Play Games', icon: <SportsEsportsIcon />, path: '/app/games'},
        {name: 'Recharge', icon: <MonetizationOnIcon />, path: '/app/recharge'},
        {name: 'Withdraw', icon: <PointOfSaleIcon />, path: '/app/withdraw'},
        {name: 'My Wallet', icon: <AccountBalanceWalletIcon />, path: '/app/wallets'},
      ],

      thirdtItems:[
        {name: 'Game Rules', icon: <LocalPoliceIcon />, path: '/app/game-rules'},
        {name: 'Invite Friends', icon: <PeopleAltIcon />, path: '/app/invites'},
        {name: 'Settings', icon: <SettingsIcon />, path: '/app/settings'},
        {name: 'Logout', icon: <LogoutIcon />, path: '/app/logout'},
      ],
}

const CarouselBox = () => (
    <Box sx={{  m: 0, p: 0}}>
    <Carousel 
    height= "80vh"
    items={sliderItems} 
    animation="slide" 
    interval={5000}
    stopAutoPlayOnHover={false}
    />
  </Box>
)

export default function AppLayout(props) {

  const location = useLocation()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logout, {isSuccess}] = useLogoutApiMutation()

  const logoutAuthUser = () => {
    logout()
  }

    React.useEffect(() => {

    if(isSuccess) {
      dispatch(deleteAuthUser())
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate("login", { replace: true });
    }
    
  })

  return (
    <React.Fragment>
      <CssBaseline />
      {/* AppBar */}
      <AppDrawer anchor="left" > 
                <Divider />
        <List>
          {sideBarListItem.firstItems.map((item) => (
            <ListItem key={item.name} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                to={item.path} component={Link}
              >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {sideBarListItem.secondtItems.map((item) => (
            <ListItem key={item.name} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                to={item.path} component={Link}
              >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />
        <List>
          {sideBarListItem.thirdtItems.map((item) => (
            <ListItem key={item.name} disablePadding sx={{ display: 'block' }}>
                {
                  item.name === "Logout" ? (
                    <ListItemButton
                      onClick={() => logoutAuthUser()}
                    >
                      <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  ): (
                    <ListItemButton
                      to={item.path} component={Link}
                    >
                      <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  )
                }
            </ListItem>
          ))}
        </List>
      </AppDrawer> 
      {/* The main app contents goes here */}
      <Container maxWidth="xl">
        {location.pathname === "/app" ? <CarouselBox /> : null }
        <Box>
          <ErrorBoundary>
              {props.children}
              <Outlet />
          </ErrorBoundary>
        </Box>
      </Container>
      {/* BottomNavBar */}
      <BottomNavBar />
    </React.Fragment>
  );
}

