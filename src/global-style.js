import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    text: {
      primary: '#fff'
    },
    background: {
      default: '#08081D'
    }
  },

  typography: {   
    fontFamily: '"Rubik", sans-serif',
  }
})

theme.typography.h2 = {
  fontSize: 40,
  fontWeight: 700,
  lineHeight: '105%',
  
  [theme.breakpoints.up('sm')]: {
    fontSize: 64
  },
}

theme.typography.h6 = {
  fontSize: 20,
  fontWeight: 700,
  lineHeight: '100%',
  color: '#1B1B30',
  
  [theme.breakpoints.up('sm')]: {
    fontSize: 34
  },
}

theme.typography.subtitle1 = {
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '28px',
  letterSpacing: '.6px',
  color: '#DCDCDC',
}
