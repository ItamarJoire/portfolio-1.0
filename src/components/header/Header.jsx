import { Box, Typography } from '@mui/material'

import AnchorLink from 'react-anchor-link-smooth-scroll'

export function Header() {
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
    </Box>
  );
}