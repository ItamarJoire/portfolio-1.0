import { Box, CardContent, CardMedia, Grid, Link, ListItemText } from '@mui/material';
import { SubtitleContainer, ParagraphContainer } from '../../containers';

import IconExternalLink from '../../assets/images/icon-external-link.svg'
// import IconGitWhite from '../../assets/images/git-icon-white.svg'

import IconCircle from '../../assets/images/icon-circle.svg'

import ImageProject from '../../assets/images/script-vendas.png'

const techs = [
  'Html',
  'Css',
  'JavaScript',
]

export function WorkThree() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Box sx={{ pr: { xs: 'auto', sm: 1 } }} >
          <Box sx={{ mt: 4, width: '100%', height: '240px' }}>

            <CardMedia
              image={ImageProject}
              sx={{ width: '100%', maxWidth: '440px', height: '100%', borderRadius: 2 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'space-around',
                  height: '100%',
                  borderRadius: 2,
                  background: 'linear-gradient(179.57deg, rgba(8, 8, 29, 0.85) -37.04%, rgba(8, 8, 29, 0.46) 121.41%);'
                }}
              >
                <CardContent sx={{ display: 'flex', justifyContent: 'end', p: 2 }}>
                  <Link href={'https://stupefied-bell-703853.netlify.app/'} target='_blank' sx={{ cursor: 'pointer' }}>
                    <img src={IconExternalLink} alt='Ícone para abrir projeto' />
                  </Link>
                </CardContent>
              </Box>
            </CardMedia>
          </Box>

          <Box>
            <SubtitleContainer name='Tecnologias usadas' />
            <Box >
              {techs.map(item => {
                return (
                  <Box display='flex' mr={8}>
                    <img src={IconCircle} alt='' style={{ marginRight: '8px' }} />
                    <ListItemText primary={item} />
                  </Box>
                )
              })}
            </Box>
          </Box>
        </Box>
      </Grid >

      <Grid item xs={12} sm={6}>
        <Box sx={{
          pl: { xs: 'auto', sm: 1 }
        }}
        >
          <Box>
            <SubtitleContainer name='Sobre' />
            <ParagraphContainer
              text='Gerador de script para orientador de vendas.'
            />
          </Box>

          <Box>
            <SubtitleContainer name='Desafio' />
            <ParagraphContainer
              text='Estagiando em uma empresa de vendas de cursos vi que os orientadores novos que entravam sentiam dificuldades em como atender os potenciais clientes. Principalmente em como entender a dor do cliente.'
            />
          </Box>

          <Box>
            <SubtitleContainer name='Solução' />
            <ParagraphContainer
              text='Tentando faciliar este atendimento e para converter estes leads conversei com o gestor comercial da empresa e perguntei os gatilhos para fazer um bom atendimento. Como iniciar uma conversa? Como levar a conversa? Após entender desenvolvi este gerador de script simples que facilitou bastante para os vendedores.'
            />
          </Box>
        </Box>
      </Grid>
    </Grid >
  );
}