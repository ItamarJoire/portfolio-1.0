import { useState } from 'react';
import { Box, Drawer, Button, List, ListItem } from '@mui/material'
import MenuHamburguerRight from '../../assets/images/menu-hamburguer-right.svg'
import Close from '../../assets/images/close.svg'

export function Header() {
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
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Close'].map((text) => (
          <ListItem key={text} sx={{ pt: 2, pr: 3 }}>
            <img src={Close} alt='' />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
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
  );
}