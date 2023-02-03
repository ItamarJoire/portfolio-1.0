import { Box, Link } from '@mui/material'

import LinkedinImg from '../../assets/images/linkedin-icon-desktop.svg'
import GithubImg from '../../assets/images/github-icon-desktop.svg'

export function Social() {
  return (
    <Box sx={{ position: 'fixed', right: 0, bottom: '38%' }}>
      <Box sx={{ bgcolor: '#0A66C2', px: .9, pt: .6, borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }}
      >
        <Link
          href='https://www.linkedin.com/in/itamarjoire/'
          target='_blank'
        >
          <img src={LinkedinImg} alt='' />
        </Link>
      </Box>
      <Box sx={{ bgcolor: '#4C5155', px: .9, pt: .4, borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }}
      >
        <Link
          href='https://github.com/ItamarJoire'
          target='_blank'
        >
          <img src={GithubImg} alt='' />
        </Link>
      </Box>
    </Box>
  )
}