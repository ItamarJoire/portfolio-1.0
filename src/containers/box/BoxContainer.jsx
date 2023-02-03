import { Box } from "@mui/material"

export function BoxContainer({ children }) {
  return (
    <Box
      sx={{
        my: { xs: 12, sm: 10, lg: 14 },
        mx: { xs: 2, sm: 6, lg: 'auto' },
        width: { lg: '80%' },


      }}
    >
      {children}
    </Box>
  )
}