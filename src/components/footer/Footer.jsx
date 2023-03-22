import { Box, Typography, Link, useTheme, useMediaQuery } from '@mui/material'
import IconLinkedin from '../../assets/images/linkedin-icon-mobile.svg'
import IconGithub from '../../assets/images/github-icon-mobile.svg'
import IconDribbble from '../../assets/images/dribbble-icon-mobile.svg'

export function Footer() {
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      height: '24vh',
      bgcolor: '#0C0C1E',
    }}
    >
      <Typography
        variant="body2"
      >
        Itamar Joire &copy; 2023
      </Typography>

      {mdDown &&
        < Box mt={2}>
          <Link mr={2} href='https://www.linkedin.com/in/itamarjoire/' target='_blank'>
            <img src={IconLinkedin} alt='' />
          </Link>
          <Link mr={2} href='https://github.com/ItamarJoire' target='_blank'>
            <img src={IconGithub} alt='' />
          </Link>
          <Link href='https://dribbble.com/ijoire7/shots' target='_blank'>
            <img src={IconDribbble} alt='' />
          </Link>
        </Box>
      }
    </Box >

  )
}