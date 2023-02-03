import { useState } from 'react';
import { Box, Drawer, Button, List, ListItem, useTheme, useMediaQuery, Typography } from '@mui/material'

import MenuHamburguerRight from '../../assets/images/menu-hamburguer-right.svg'
import Close from '../../assets/images/close.svg'

import AnchorLink from 'react-anchor-link-smooth-scroll'

export function Header() {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const [state, setState] = useState({ top: false });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ background: '#51459E', height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'end' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}

    // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Close'].map((text) => (
          <ListItem key={text} sx={{ pt: 2, pr: 3 }}
          >
            <img src={Close} alt='' />
          </ListItem>
        ))}
      </List>
      <Box width='100%' height='80vh' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>

        <AnchorLink href='#about' style={{ color: 'white', textDecoration: 'none' }}>
          <Typography
            variant='h4'
            textTransform='uppercase'
          >
            Sobre mim<Box component='span' color='#08081D'>.</Box>
          </Typography>
        </AnchorLink >

        <AnchorLink href='#projects' style={{ color: 'white', textDecoration: 'none' }}>
          <Typography
            variant='h4'
            textTransform='uppercase'
          >
            Projetos<Box component='span' color='#08081D'>.</Box>
          </Typography>
        </AnchorLink >

        <AnchorLink href='#contact' style={{ color: 'white', textDecoration: 'none' }}>
          <Typography
            variant='h4'
            textTransform='uppercase'
          >
            Contato<Box component='span' color='#08081D'>.</Box>
          </Typography>
        </AnchorLink >
      </Box>
    </Box>
  );

  return (
    <>
      {smDown === true ?
        (
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            {['top'].map((anchor, index) => (
              <Box key={index} sx={{ pt: 2, pr: 1 }}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <img src={MenuHamburguerRight} alt='' />
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </Box>
            ))}
          </Box>
        ) : (
          <Box display='flex' justifyContent='end' m={3}>
            <AnchorLink href='#about' style={{ color: 'white', textDecoration: 'none' }}>
              <Typography
                variant='h5'
                textTransform='uppercase'
                mr='16px'
              >
                SOBRE MIM<Box component='span' color='#51459E'>.</Box>
              </Typography>
            </AnchorLink>

            <AnchorLink href='#projects' offset='80' style={{ color: 'white', textDecoration: 'none' }}>
              <Typography
                variant='h5'
                textTransform='uppercase'
                mr='16px'
              >
                PROJETOS<Box component='span' color='#51459E'>.</Box>
              </Typography>
            </AnchorLink>
            <Typography
              variant='h5'
              textTransform='uppercase'
              mr='16px'
            >
              CONTATO<Box component='span' color='#51459E'>.</Box>
            </Typography>

          </Box>
        )}


    </>
  );
}