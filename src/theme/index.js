import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: purple[900],
    },
    secondary: {
      main: green[900],
    },
  },

  typography: {
    h1: {
      fontSize: '2.5rem'
    }
  }
    
});


export default theme;
