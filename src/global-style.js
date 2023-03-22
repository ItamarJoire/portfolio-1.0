import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#7867E0',
    },

    text: {
      primary: '#fff',

    },
    background: {
      default: '#08081D'
    }
  },

  typography: {
    fontFamily: '"Rubik", sans-serif',
  },
})

theme.typography.subtitle1 = {
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '28px',
  letterSpacing: '.6px',
  color: '#DCDCDC',
}

theme.typography.body2 = {
  fontSize: 11,
  fontWeight: 400,
  lineHeight: '28px',
  letterSpacing: '.6px',
  color: '#DCDCDC',
  [theme.breakpoints.up('sm')]: {
    fontSize: 13
  },
}

theme.typography.h2 = {
  fontSize: 38,
  fontWeight: 700,
  lineHeight: '105%',

  [theme.breakpoints.up('sm')]: {
    fontSize: 48
  },
}

theme.typography.h4 = {
  fontSize: 28,
  fontWeight: 600,
  lineHeight: '100%',
}

theme.typography.h5 = {
  fontSize: 18,
  fontWeight: 400,
  lineHeight: '140%',
}

theme.typography.h6 = {
  fontSize: 20,
  fontWeight: 700,
  lineHeight: '100%',
  color: '#1B1B30',

  [theme.breakpoints.up('sm')]: {
    fontSize: 28
  },
}




