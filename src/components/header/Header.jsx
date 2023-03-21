import { Box, Typography, Link, useTheme, useMediaQuery } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { useState } from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll'

export function Header() {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const [modal, setModal] = useState('none')

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

  return (
    <Box
      sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'end' }, p: 4 }}>
      <AnchorLink href='#about' offset='-80' style={{ color: 'white', textDecoration: 'none' }}>
        <Typography
          variant='h5'
          textTransform='uppercase'
          mr='16px'
        >
          SOBRE MIM<Box component='span' color='#51459E'>.</Box>
        </Typography>
      </AnchorLink>

      <AnchorLink href='#projects' style={{ color: 'white', textDecoration: 'none' }}>
        <Typography
          variant='h5'
          textTransform='uppercase'
          mr='16px'
        >
          PROJETOS<Box component='span' color='#51459E'>.</Box>
        </Typography>
      </AnchorLink>

      <Link
        sx={{ cursor: 'pointer', textDecoration: 'none', color: '#fff' }}
        onClick={onButtonClick}
      >
        <Typography
          variant='h5'
          textTransform='uppercase'
          mr='16px'
          cursor='pointer'
        >
          DOWNLOAD CV<Box component='span' color='#51459E'>.</Box>
        </Typography>
      </Link>
    </Box>
  )
}