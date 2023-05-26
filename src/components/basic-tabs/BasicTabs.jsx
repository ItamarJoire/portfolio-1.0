import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme, useMediaQuery } from '@mui/material';
import { BoxContainer, TitleContainer } from '../../containers';
import { Work } from '../work/Work';
import { WorkTwo } from '../work-two/WorkTwo'
import { WorkThree } from '../work-three/WorkThree'
import { WorkFour } from '../work-four/WorkFour'

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div>
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export function BasicTabs() {
  const theme = useTheme()
  const mdUp = useMediaQuery(theme.breakpoints.up('md'))
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BoxContainer>
      <TitleContainer name='Projetos' />
      <Box sx={{
        mt: 4,
        width: '100%',
        display: { xs: 'block', md: 'flex' }
      }}
      >
        <Box sx={{
          borderBottom: { xs: 1, md: 0 },
          color: 'rgba(255, 255, 255, 0.11)',
          display: { xs: 'block', md: 'flex' }
        }}
        >
          <Tabs
            sx={{
              mr: 10,
              width: { xs: '100%', md: 160 },
              height: { xs: 0, md: 300 },
              borderRight: { xs: 0, md: 1 },
              color: 'rgba(255, 255, 255, 0.11)',
            }}
            variant="scrollable"
            value={value}
            orientation={mdUp ? 'vertical' : 'horizontal'}
            onChange={handleChange}
            textColor='primary'
            indicatorColor='primary'
            scrollButtons='auto'
            allowScrollButtonsMobile
          >
            <Tab sx={{ textTransform: 'capitalize', color: '#9EA0A3', fontSize: 17 }} label="TodoList" />
            <Tab sx={{ textTransform: 'capitalize', color: '#9EA0A3', fontSize: 17 }} label="Turism" />
            <Tab sx={{ textTransform: 'capitalize', color: '#9EA0A3', fontSize: 17 }} label="Loja de Roupas" />
            <Tab sx={{ textTransform: 'capitalize', color: '#9EA0A3', fontSize: 17 }} label="Script de vendas" />

          </Tabs>
        </Box>

        <Box>
          <TabPanel value={value} index={0}>
            <WorkFour />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Work />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <WorkTwo />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <WorkThree />
          </TabPanel>
          
        </Box>
      </Box >
    </BoxContainer >
  );
}
