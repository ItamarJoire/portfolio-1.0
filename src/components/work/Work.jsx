import { Box, CardContent, CardMedia, Grid, Link, ListItemText } from '@mui/material';
import { SubtitleContainer, ParagraphContainer } from '../../containers';

import IconExternalLink from '../../assets/images/icon-external-link.svg'
import IconCircle from '../../assets/images/icon-circle.svg'

const techs = [
  'React',
  'TypeScript',
  'Material UI',
  'React Slick'
]

export function Work() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Box sx={{ pr: { xs: 'auto', sm: 1 } }} >
          <Box sx={{ mt: 4, width: '100%', height: '240px' }}>
            <CardMedia
              image={"https://source.unsplash.com/random/?technology/41"}
              sx={{ width: '100%', height: '100%', borderRadius: 2 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'space-around',
                  height: '100%',
                  background: 'linear-gradient(359.44deg, #08081D -6.72%, rgba(0, 0, 0, 0) 99.48%)'
                }}
              >
                <CardContent sx={{ display: 'flex', justifyContent: 'end', p: 2 }}>
                  <Link href={'https://github.com/ItamarJoire'} target='_blank' sx={{ cursor: 'pointer' }}>
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
              text='Site de turismo que trás informações das localidades da Ilha Turism.'
            />
          </Box>

          <Box>
            <SubtitleContainer name='Desafios' />
            <ParagraphContainer
              text='O maior desafio foi criar uma context com TypeScript e fazer a Query das informações das localidades no servidor.'
            />
          </Box>

          <Box>
            <SubtitleContainer name='Solução' />
            <ParagraphContainer
              text='Utilizei o framework Material UI para agilizar, principalmente, na responsividade do projeto e padronizar minhas cores, textos, etc. E o React Slick por conta da facilidade de construir os carrosséis.'
            />
          </Box>

        </Box>
      </Grid>
    </Grid >
  );
}