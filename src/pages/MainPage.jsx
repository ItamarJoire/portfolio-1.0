import { Header, Welcome, About, BasicTabs, Footer, BackToTop, PreLoader } from "../components"
import { Box, Divider } from '@mui/material'

import { useState } from "react";

import { MenuMobile } from "../components";

export function MainPage() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <>
      <PreLoader />
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />


      <Box sx={{ height: '100vh' }}>
        <Header setMenuIsVisible={setMenuIsVisible} />

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