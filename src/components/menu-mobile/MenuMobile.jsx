import { Container } from './styles'

import { Typography, Box, useTheme } from '@mui/material'

import { useEffect } from 'react'

import CloseIcon from '../../assets/images/close.svg';

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {

  const theme = useTheme()

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
  }, [menuIsVisible])

  return (
    <Container isVisible={menuIsVisible}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Box sx={{
          position: 'absolute', top: 0, right: 0,
          p: theme.spacing(2)
        }}>
          <img src={CloseIcon} onClick={() => setMenuIsVisible(false)} />
        </Box>
        <Typography
          variant='h4'
          textTransform='uppercase'
        >
          SOBRE MIM<Box component='span' color='#51459E'>.</Box>
        </Typography>
        <Typography
          variant='h4'
          textTransform='uppercase'

        >
          PROJETOS<Box component='span' color='#51459E'>.</Box>
        </Typography>
        <Typography
          variant='h4'
          textTransform='uppercase'

        >
          DOWNLOAD CV<Box component='span' color='#51459E'>.</Box>
        </Typography>
      </Box>
    </Container>
  )
}