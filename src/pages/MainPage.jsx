import { Header, Welcome, About, Work } from "../components"
import { Box, Divider } from '@mui/material'

export function MainPage() {

  return (
    <Box sx={{
      height: '100vh',
    }}
    >
      <Header />
      <Welcome />
      <Divider color='#2C2C3F' />
      <About />
      <Divider color='#2C2C3F' />
      <Work />
    </Box>
  )
}