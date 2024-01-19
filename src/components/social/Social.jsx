import { Box, Link } from '@mui/material'

import LinkedinImg from '../../assets/images/linkedin-icon-desktop.svg'
import GithubImg from '../../assets/images/github-icon-desktop.svg'
import DribbbleImg from '../../assets/images/dribbble-icon-desktop.svg'
import BehanceImg from '../../assets/images/behance-icon-desktop.svg'

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
      {/* <Box sx={{ bgcolor: '#ED3675', px: 1.4, pt: 1.4, pb: .6, borderTopRightRadius: 6, borderBottomRightRadius: 6 }}
      >
        <Link
          href='https://dribbble.com/ijoire7/shots'
          target='_blank'
        >
          <img src={DribbbleImg} alt='' />
        </Link>
      </Box> */}
      <Box sx={{ bgcolor: '#ED3675', px: 1.4, pt: 1.4, pb: .6, borderTopRightRadius: 6, borderBottomRightRadius: 6 }}
      >
        <Link
          href='https://www.behance.net/itamarjoire'
          target='_blank'
        >
          <img src={BehanceImg} alt='' />
        </Link>
      </Box>
    </Box>
  )
}