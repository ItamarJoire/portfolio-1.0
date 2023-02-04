import { Header, Welcome, About, BasicTabs, Footer, BackToTop, PreLoader } from "../components"
import { Box, Divider } from '@mui/material'

export function MainPage() {
  return (
    <>

      <PreLoader />
      <Box sx={{ height: '100vh' }}>
        <Header />

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