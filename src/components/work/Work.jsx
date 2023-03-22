import { Box, CardContent, CardMedia, Grid, Link, ListItemText } from '@mui/material';
import { SubtitleContainer, ParagraphContainer } from '../../containers';

import IconGitWhite from '../../assets/images/git-icon-white.svg'

import IconCircle from '../../assets/images/icon-circle.svg'

import ImageProject from '../../assets/images/cover-ilha-turism.png'

const techs = [
  'React',
  'TypeScript',
  'Material UI',
  'React Slick',
  'Node',
  'Axios'
]

export function Work() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Box sx={{ pr: { xs: 'auto', sm: 1 } }} >
          <Box sx={{ mt: 4, width: '100%', height: '240px' }}>

            <CardMedia
              image={ImageProject}
              sx={{ width: '100%', height: '100%', borderRadius: 2, }}
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
                  <Link href={'https://github.com/ItamarJoire/site-turism'} target='_blank' sx={{ cursor: 'pointer' }}>
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
              text='Site de turismo que trás informações das localidades da Ilha Turism.'
            />
          </Box>

          <Box>
            <SubtitleContainer name='Desafios' />
            <ParagraphContainer
              text='O maior desafio foi criar um context com TypeScript e fazer a Query das informações das localidades no servidor.'
            />
          </Box>

          <Box>
            <SubtitleContainer name='Solução' />
            <ParagraphContainer
              text='Utilizei o framework Material UI para agilizar, principalmente, na responsividade. E o React Slick por conta da facilidade de construir os carrosséis.'
            />
          </Box>
        </Box>
      </Grid>
    </Grid >
  );
}