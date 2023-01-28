import { Typography } from "@mui/material"

export function SubtitleContainer({ name }) {
  return (
    <Typography
      variant='body1'
      fontWeight='700'
      textTransform='uppercase'
      sx={{ mt: 6, mb: 1 }}
    >
      {name}
    </Typography>
  )
}