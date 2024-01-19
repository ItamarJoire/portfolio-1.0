import { Box, Typography, useTheme, useMediaQuery, Link } from '@mui/material'
import { BoxContainer } from '../../containers'

import { Social } from '../social/Social'

import IconLinkedin from '../../assets/images/linkedin-icon-mobile.svg'
import IconGithub from '../../assets/images/github-icon-mobile.svg'
import IconDribbble from '../../assets/images/dribbble-icon-mobile.svg'
import IconBehance from '../../assets/images/behance-icon-mobile.svg'

export function Welcome() {
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <BoxContainer sx={{
      px: { sm: theme.spacing(12) },
      height: '100vh'
    }}
    >
      <Box sx={{
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <Typography variant='h6'>
          Sou
        </Typography>
        <Typography
          fontWeight='700'
          variant='h2'
          textTransform='uppercase'
          sx={{ mb: 3, mt: 1 }}
        >
          Desenvolvedor <br /> Front-end<Box component='span' color='#51459E'>.</Box>
        </Typography>
        <Typography
          variant='subtitle1'
          maxWidth='310px'
        >
          Trabalhando desde a concepção da interface do usuário à codificação.
        </Typography>

        {mdDown === true ?
          (<Box mt={4}>
            <Link mr={2} href='https://www.linkedin.com/in/itamarjoire/' target='_blank'>
              <img src={IconLinkedin} alt='' />
            </Link>
            <Link mr={2} href='https://github.com/ItamarJoire' target='_blank'>
              <img src={IconGithub} alt='' />
            </Link>
            {/* <Link href='https://dribbble.com/ijoire7/shots' target='_blank'>
              <img src={IconDribbble} alt='' />
            </Link> */}
            <Link href='https://www.behance.net/itamarjoire' target='_blank'>
              <img src={IconBehance} alt='' />
            </Link>
          </Box>
          ) : (
            <Social />
          )}
      </Box>
    </BoxContainer >
  )
}