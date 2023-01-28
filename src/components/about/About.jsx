import { Typography, Box } from "@mui/material";
import { BoxContainer, TitleContainer } from "../../containers";

export function About() {
  return (
    <Box sx={{
      display: 'flex',
      bgcolor: '#0C0C1E',
    }}>
      <Box
        maxWidth='md'
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <BoxContainer>
          <TitleContainer name='Sobre mim' />

          <Typography
            variant='body1'
            fontFamily='Open Sans, sans-serif'
            maxWidth='100%'
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
        </BoxContainer>
      </Box >
    </Box >
  )
}