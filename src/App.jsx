import { Main } from './components/main/Main'
import { ThemeProvider, CssBaseline } from '@mui/material'

import { theme } from './global-style'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  )
}

