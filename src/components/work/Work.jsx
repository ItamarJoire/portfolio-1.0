import { Box, CardMedia, Grid } from '@mui/material';
import { TitleContainer, SubtitleContainer, ParagraphContainer, BoxContainer } from '../../containers';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const techs = [
  'React',
  'NodeJs',
  'Material UI'
]

export function Work() {
  return (
    <BoxContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TitleContainer name='Projetos' />
          <Box sx={{ pr: { xs: 'auto', sm: 1 } }} >
            <Box sx={{ mt: 4, width: '100%', height: '240px' }}>
              <CardMedia
                image={"https://source.unsplash.com/random/?technology/41"}
                sx={{ width: '100%', height: '100%' }}
              />
            </Box>
            <Box>
              <SubtitleContainer name='Tecnologias usadas' />
              <Box >
                {techs.map(item => {
                  return (
                    <Box sx={{ display: 'flex' }}>
                      <ArrowRightIcon />{item}
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

            <Box>
              <SubtitleContainer name='Funcionalidades' />
              <ParagraphContainer
                text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis velit itaque molestiae praesentium tempore nam.'
              />
            </Box>
          </Box>
        </Grid>
      </Grid >
    </BoxContainer >
  );
}