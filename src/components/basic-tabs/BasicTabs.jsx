import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme, useMediaQuery } from '@mui/material';
import { BoxContainer, TitleContainer } from '../../containers';
import { Work } from '../work/Work';
import { WorkTwo } from '../work-two/WorkTwo'


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
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'))
  const [value, setValue] = useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BoxContainer>
      <TitleContainer name='Projetos' />
      <Box sx={{
        mt: 3,
        width: '100%',
        display: { xs: 'block', lg: 'flex' }
      }}
      >
        <Box sx={{
          borderBottom: { xs: 1, lg: 0 },
          borderColor: 'rgba(255, 255, 255, 0.11)',
          display: { xs: 'block', lg: 'flex' }
        }}
        >
          <Tabs
            sx={{
              mr: 12,
              width: { xs: '100%', lg: 160 },
              height: { xs: 0, lg: 300 },
              borderRight: { xs: 0, lg: 1 },
              borderColor: 'rgba(255, 255, 255, 0.11)',
            }}
            variant="scrollable"
            value={value}
            orientation={lgUp ? 'vertical' : 'horizontal'}
            onChange={handleChange}
            textColor='primary'
            indicatorColor='primary'
            scrollButtons='auto'
            allowScrollButtonsMobile
          >
            <Tab sx={{ textTransform: 'capitalize', color: '#9EA0A3', fontSize: { xs: 17, lg: 20 } }} label="Web Turism" />
            <Tab sx={{ textTransform: 'capitalize', color: '#9EA0A3', fontSize: { xs: 17, lg: 20 } }} label="Projeto 2" />
            <Tab sx={{ textTransform: 'capitalize', color: '#9EA0A3', fontSize: { xs: 17, lg: 20 } }} label="Projeto 3" />
            <Tab sx={{ textTransform: 'capitalize', color: '#9EA0A3', fontSize: { xs: 17, lg: 20 } }} label="Projeto 4" />
          </Tabs>
        </Box>

        <Box>
          <TabPanel value={value} index={0}>
            <Work />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <WorkTwo />
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item 4
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item 5
          </TabPanel>

        </Box>
      </Box >
    </BoxContainer >
  );
}
