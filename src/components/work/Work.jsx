import { Box, CardContent, CardMedia, Grid, Link, ListItemText } from '@mui/material';
import { SubtitleContainer, ParagraphContainer } from '../../containers';

import IconExternalLink from '../../assets/images/icon-external-link.svg'
import IconCircle from '../../assets/images/icon-circle.svg'

const techs = [
  'React',
  'TypeScript',
  'Material UI'
]

export function Work() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Box sx={{ pr: { xs: 'auto', sm: 1 } }} >
          <Box sx={{ mt: 4, width: '100%', height: '240px' }}>
            <CardMedia
              image={"https://source.unsplash.com/random/?technology/41"}
              sx={{ width: '100%', maxWidth: '420px', height: '100%', borderRadius: 2 }}
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
            <SubtitleContainer name='Minha função' />
            <ParagraphContainer
              text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis velit itaque molestiae praesentium tempore  nam.'
            />
          </Box>

          <Box>
            <SubtitleContainer name='Dificuldades do projeto' />
            <ParagraphContainer
              text='Lorem ipsum dolor sit, amet consectetur <adipisicing elit. Corporis velit itaque molestiae praesentium tempore nam.'
            />
          </Box>

          <Box>
            <SubtitleContainer name='Minha solucão' />
            <ParagraphContainer
              text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis velit itaque molestiae praesentium tempore nam.'
            />
          </Box>

        </Box>
      </Grid>
    </Grid >
  );
}