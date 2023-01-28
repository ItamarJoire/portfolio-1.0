import { Box } from "@mui/material"

export function BoxContainer({ children }) {
  return (
    <Box sx={{ my: 8, mx: 2 }}>
      {children}
    </Box>
  )
}