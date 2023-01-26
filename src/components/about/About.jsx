import { Container, Typography, Box } from "@mui/material";
import Image from '../../assets/images/joire.png'

export function About() {
  return (
    <Box sx={{
      display: 'flex',
      height: '100vh',
      bgcolor: '#0C0C1E',
    }}>
      <Container
        maxWidth='md'
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Box>
          <Typography
            variant="h5"
            textTransform='uppercase'
            fontWeight='700'
          >
            Sobre mim<Box component='span' color='#51459E'>.</Box>
          </Typography>
          <Typography
            fontSize='18px'
            variant='body2'
            lineHeight='28px'
            maxWidth='480px'
            sx={{ mt: 4 }}
          >
            Olá, meu nome é Itamar Joire sou desenvolvedor que ama codificação, design, que se preocupa profundamente com a experiência do usuário, trabalhar em equipe e de participar de todo processo criativo de soluções que agreguem valor.
            <br />
            <br />
            Atualmente estou cursando Sistemas de Informação pela UFBA com previsão de conclusão para 2023.2.
            <br />
            <br />
            Ah, recentemente resolvi criar um blog no qual estarei postando conteúdos e dicas sobre front-end.
          </Typography>
        </Box>
        <Box sx={{ pt: 10, ml: 16 }} >
          <img src={Image} alt='' />
        </Box>
      </Container >
    </Box>
  )
}