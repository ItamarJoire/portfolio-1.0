import { Box, CardContent, CardMedia, Grid, Link, ListItemText } from '@mui/material';
import { SubtitleContainer, ParagraphContainer } from '../../containers';

import IconExternalLink from '../../assets/images/icon-external-link.svg'
import IconGitWhite from '../../assets/images/git-icon-white.svg'

import IconCircle from '../../assets/images/icon-circle.svg'

import ImageProject from '../../assets/images/m3.png'

const techs = [
  'Html',
  'Scss',
  'JavaScript',
  'Axios'
]

export function WorkTwo() {
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
                  <Link href={'https://github.com/ItamarJoire/digitalm3-vtex'} target='_blank' sx={{ cursor: 'pointer' }}>
                    <img src={IconGitWhite} alt='Ícone para abrir projeto' />
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
              text='E-commerce de roupas femininas.'
            />
          </Box>

          <Box>
            <SubtitleContainer name='Desafio' />
            <ParagraphContainer
              text='Desenvolver vários filtros usando JavaScript puro. Por conta da responsividade houve algumas adaptações para cada tipo de tela.'
            />
          </Box>

          <Box>
            <SubtitleContainer name='Solução' />
            <ParagraphContainer
              text='Trabalhei criando uma função para cada tipo de filtro.'
            />
          </Box>
        </Box>
      </Grid>
    </Grid >
  );
}