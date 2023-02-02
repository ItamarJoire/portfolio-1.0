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
        <Typography variant='h6'>
          Sou
        </Typography>
        <Typography
          fontWeight='700'
          variant='h2'
          textTransform='uppercase'
          sx={{ mb: 3, mt: 1 }}
        >
          Desenvolvedor <br /> Front-end<Box component='span' color='#51459E'>.</Box>
        </Typography>
        <Typography
          variant='subtitle1'
          maxWidth='310px'
        >
          Trabalhando desde a concepção do UI Design à codificação.
        </Typography>

      </Box>
    </BoxContainer >
  )
}