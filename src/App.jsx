import { ThemeProvider, CssBaseline } from '@mui/material'

import { theme } from './global-style'
import { MainPage } from './pages/MainPage'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainPage />
    </ThemeProvider>
  )
}

