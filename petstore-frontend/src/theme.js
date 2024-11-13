import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',  // Custom primary color
    },
    secondary: {
      main: '#f50057',  // Custom secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',  // Removes uppercase from buttons
    },
  },
  spacing: 8,  // Default spacing between components
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});


export default theme;
