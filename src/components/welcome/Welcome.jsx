import { Box, Typography, useTheme } from '@mui/material'
import { BoxContainer } from '../../containers'

export function Welcome() {
  const theme = useTheme()

  return (
    <BoxContainer sx={{
      px: { sm: theme.spacing(12) },
      height: '100vh'
    }}
    >
      <Box sx={{
        height: '76vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <Typography
          variant='h6'
          color='#1B1B30'
        >
          Sou
        </Typography>
        <Typography
          textTransform='uppercase'
          fontWeight='700'
          variant='h4'
          sx={{ mb: 3 }}
        >
          Desenvolvedor <br /> Front-end<Box component='span' color='#51459E'>.</Box>
        </Typography>
        <Typography
          fontFamily='Open Sans, sans-serif'
          variant='body1'
          maxWidth='310px'
        >
          Trabalhando desde a concepção do UI Design à codificação.
        </Typography>
      </Box>
    </BoxContainer >
  )
}