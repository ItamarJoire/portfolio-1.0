import { Box, Link } from '@mui/material'

import LinkedinImg from '../../assets/images/linkedin-icon-desktop.svg'
import GithubImg from '../../assets/images/github-icon-desktop.svg'

export function Social() {
  return (
    <Box sx={{ position: 'fixed', left: 0, bottom: '34%' }}>
      <Box sx={{ bgcolor: '#0A66C2', px: .6, pt: .4, borderTopRightRadius: 6, borderBottomRightRadius: 6 }}
      >
        <Link
          href='https://www.linkedin.com/in/itamarjoire/'
          target='_blank'
        >
          <img src={LinkedinImg} alt='' />
        </Link>
      </Box>
      <Box sx={{ bgcolor: '#4C5155', px: .6, pt: .4, borderTopRightRadius: 6, borderBottomRightRadius: 6 }}
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