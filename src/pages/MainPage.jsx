import { Header, Welcome, About, BasicTabs, Footer, BackToTop, PreLoader } from "../components"
import { Box, Divider, useTheme, useMediaQuery } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';

export function MainPage() {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <PreLoader />

      <Box sx={{ height: '100vh' }}>

        {
          smDown === true ?
            (<Box>
              <MenuIcon />
            </Box>) : (
              <Header />)
        }

        <Box sx={{ background: '#7867E0' }}>
          <p>dasdasdsad</p>
          <p>dasdasdsad</p>
          <p>dasdasdsad</p>
          <p>dasdasdsad</p>
        </Box>

        <Welcome />

        <Divider color='#2C2C3F' />

        <div id='about'>
          <About id='about' />
        </div>

        <Divider color='#2C2C3F' />

        <div id='projects'>
          <BasicTabs />
        </div>

        <Divider color='#2C2C3F' />

        <Footer />

        <BackToTop />
      </Box>
    </>
  )
}