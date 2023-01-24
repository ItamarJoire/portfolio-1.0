import { Box, Typography, Container, Link, Divider } from '@mui/material'

import LinkedinImg from '../../assets/images/linkedin.svg'
import GithubImg from '../../assets/images/github.svg'

export function Main() {
  return (
    <Box>
      <Container>
        <Box>
          <Box>
            <Typography>
              Sobre mim
            </Typography>
            <Typography>
              Habilidades
            </Typography>
          </Box>
        </Box>
        <Box sx={{
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <Typography
            variant='h6'
            color='#1B1B30'
          >
            Sou
          </Typography>
          <Typography
            textTransform='uppercase'
            fontWeight='700'
            variant='h3'
          >
            Desenvolvedor <br /> Front-end<Box component='span' color='#51459E'>.</Box>
          </Typography>
        </Box>

        <Box sx={{ position: 'fixed', right: 0, top: '44%' }}>
          <Box sx={{ bgcolor: '#0A66C2', px: .9, pt: .6, borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }}
          >
            <Link
              href='https://www.linkedin.com/in/itamarjoire/'
              target='_blank'
              underline='always'
            >
              <img src={LinkedinImg} alt='' />
            </Link>
          </Box>
          <Box sx={{ bgcolor: '#4C5155', px: .9, pt: .4, borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }}
          >
            <Link
              href='https://github.com/ItamarJoire'
              target='_blank'
              underline='always'
            >
              <img src={GithubImg} alt='' />
            </Link>
          </Box>

        </Box>


        <Box>teste</Box>
      </Container >
      <Divider color='#2C2C3F' />
    </Box>
  )
}