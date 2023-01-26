import { Welcome, About } from "../components"
import { Box } from '@mui/material'

export function MainPage() {
  return (
    <Box>
      <Welcome />
      <About />
    </Box>
  )
}