import { Container } from './styles'

import { Typography, Box, useTheme, Link } from '@mui/material'

import { useEffect } from 'react'

import CloseIcon from '../../assets/images/close.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  const theme = useTheme()

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Currículo.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Currículo.pdf';
        alink.click();
      })
    })
  }
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
        <AnchorLink href='#about' style={{ color: 'white', textDecoration: 'none' }} onClick={() => setMenuIsVisible(false)}>
          <Typography
            variant='h4'
            textTransform='uppercase'
          >
            SOBRE MIM<Box component='span' color='#51459E'>.</Box>
          </Typography>
        </AnchorLink>
        <AnchorLink href='#projects' style={{ color: 'white', textDecoration: 'none' }} onClick={() => setMenuIsVisible(false)}>
          <Typography
            variant='h4'
            textTransform='uppercase'
          >
            PROJETOS<Box component='span' color='#51459E'>.</Box>
          </Typography>
        </AnchorLink>
        <Link
          sx={{ cursor: 'pointer', textDecoration: 'none', color: '#fff' }}
          onClick={onButtonClick}
        >
          <Typography
            variant='h4'
            textTransform='uppercase'

          >
            DOWNLOAD CV<Box component='span' color='#51459E'>.</Box>
          </Typography>
        </Link>
      </Box>
    </Container>
  )
}