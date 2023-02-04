import { useState, useEffect } from 'react'

import { Box } from "@mui/material"

import IconBackToTop from '../../assets/images/icon-back-to-top.svg'

export function BackToTop() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 560) {
        setShowScrollTopButton(true)
      }
      else {
        setShowScrollTopButton(false)
      }
    })

  }, [])

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <>
      {showScrollTopButton &&
        <Box className='back-to-top' onClick={scrollTop}>
          <img src={IconBackToTop} alt="" />
        </Box>
      }
    </>
  )

}