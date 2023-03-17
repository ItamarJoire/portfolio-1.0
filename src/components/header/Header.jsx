import { Box, Typography, Link, useTheme, useMediaQuery } from '@mui/material'

import { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import AnchorLink from 'react-anchor-link-smooth-scroll'

export function Header() {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const [modal, setModal] = useState(false)

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('sample.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'sample.pdf';
        alink.click();
      })
    })
  }

  function openModal() {
    if (modal) {
      console.log(modal)
      setModal(true)
    }
  }

  return (
    <>
      {smDown === false ? (<Box
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
            RESUMO<Box component='span' color='#51459E'>.</Box>
          </Typography>
        </Link>
      </Box>)
        :
        (<Box
          sx={{
            textAlign: 'right'
          }}
        >
          <MenuIcon onClick={openModal} />
        </Box>)
      }

      {modal === true && <Box
        sx={{
          width: '100%',
          background: '#51459E',
          textAlign: 'center'
        }}
      >

        <Box
          sx={{}}
        >
          <h3>SOBRE MIM</h3>
          <h3>PROJETOS</h3>
          <h3>RESUMO</h3>

        </Box>
      </Box>}
    </>
  );
}