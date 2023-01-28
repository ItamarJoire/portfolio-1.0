import { Typography, Box } from "@mui/material"

export function TitleContainer({ name }) {
  return (
    <Typography
      variant='h5'
      fontWeight='700'
      textTransform='uppercase'
    >
      {name}<Box component='span' color='#51459E'>.</Box>
    </Typography>
  )
}