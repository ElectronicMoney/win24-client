import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from 'react-router-dom';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          sx={{ display: 'flex', alignItems: 'center'}}
          color="inherit"
          to="/app"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          MagandaBet
        </Link>
        <Link
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          to="/admins/dashboard"
        >
          <DashboardIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Dashboard
        </Link>
      </Breadcrumbs>
    </div>
  );
}
