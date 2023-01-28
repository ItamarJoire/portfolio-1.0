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
    fontFamily: '"acumin-pro", sans-serif',
    fontSize: 15,
    body1: {
      fontSize: 19,
      color: '#DCDCDC',
      lineHeight: '28px',
      letterSpacing: '.6px'
    }
  }
})
