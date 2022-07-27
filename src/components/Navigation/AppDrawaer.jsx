import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import AppBar from '../Surfaces/AppBar';

export default function SwipeableTemporaryDrawer(props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  return (
    <React.Fragment>
        <AppBar anchor="left" toggleDrawer={toggleDrawer} />
        <SwipeableDrawer
        anchor={props.anchor}
        open={state[props.anchor]}
        onClose={toggleDrawer(props.anchor, false)}
        onOpen={toggleDrawer(props.anchor, true)}
        >
        
            <Box
                sx={{ width: props.anchor === 'top' || props.anchor === 'bottom' ? 'auto' : 250 }}
                role="presentation"
                onClick={toggleDrawer(props.anchor, false)}
                onKeyDown={toggleDrawer(props.anchor, false)}
                >
                {props.children}
            </Box>
        </SwipeableDrawer>
    </React.Fragment>
  );
}
