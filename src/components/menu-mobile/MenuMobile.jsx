import { Container } from './styles'

import { Typography, Box } from '@mui/material'

import { useEffect } from 'react'

import CloseIcon from '@mui/icons-material/Close';

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
  }, [menuIsVisible])

  return (
    <Container isVisible={menuIsVisible}>
      <CloseIcon color='#000' onClick={() => setMenuIsVisible(false)} />
      <nav>
        <Typography
          variant='h5'
          textTransform='uppercase'
          mr='16px'
        >
          SOBRE MIM<Box component='span' color='#51459E'>.</Box>
        </Typography>
      </nav>
    </Container>
  )
}