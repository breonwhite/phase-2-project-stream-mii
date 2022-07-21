import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import ShowListItem from './ShowListItem';
import LineupCard from './LineupCard';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';


const ShowList = ({ shows, day, unsaveShow }) => {
    const [ value, setValue ] = useState('allshows');
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const lineup = shows.filter(shw => shw.weekday == day.toLowerCase());
    const maxSteps = lineup.length


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
      };

    const weeklyShows = ( weekday ) => {
        let weekshows = [];
        
        if (weekday == 'allshows') {
            weekshows = shows.map(show => (
                show
            ))
        }
        else {
            weekshows = shows.filter(show => (
            show.weekday == weekday))
        }
        return weekshows;
    }


  return (
    <div>
        <Container>
            <h1>Your {day} Lineup</h1>
            <Box
                sx={{
                    flexGrow: 1,
                    height: 260,
                    backgroundColor: '#e0e0e0',
                    }}
            > 
                <Grid container justifyContent="center" rowSpacing={{ xs: 1, sm: 1, md: 2 }} sx={{ width: '100%' }}>
                    {
                        lineup.map((shw, index) => (
                            Math.abs(activeStep - index) <= 0 ? (
                                <LineupCard key={shw.id} show={shw} />
                            ) : null
                        ))
                    }
                </Grid>
            </Box>
        <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
            <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1 || maxSteps === 0}
            >
            Next
                {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
                ) : (
                <KeyboardArrowRight />
                )}
            </Button>
             }
            backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0 || maxSteps === 0 }>
                {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
                ) : (
                <KeyboardArrowLeft />
                )}
            Back
          </Button>
        }
      />
        </Container>
        <Container>
            <h2>Your Shows</h2>
            <Container position="static">
            <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} sx={{ maxWidth: '100%' }} aria-label="lab API tabs example">
                            <Tab sx={{ width: '12.5%' }} label="All Shows" value="allshows" />
                            <Tab sx={{ width: '12.5%' }} label="Sunday" value="sunday" />
                            <Tab sx={{ width: '12.5%' }} label="Monday" value="monday" />
                            <Tab sx={{ width: '12.5%' }} label="Tuesday" value="tuesday" />
                            <Tab sx={{ width: '12.5%' }}label="Wednesday" value="wednesday" />
                            <Tab sx={{ width: '12.5%' }} label="Thursday" value="thursday" />
                            <Tab sx={{ width: '12.5%' }} label="Friday" value="friday" />
                            <Tab sx={{ width: '12.5%' }} label="Saturday" value="saturday" />
                        </TabList>
                    </Box>
                    <TabPanel value={value}>
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            { weeklyShows(value).map((item) => (
                                <div key={item.id}>
                                <ShowListItem show={item} unsaveShow={unsaveShow} />
                                <Divider />
                                </div>
                            ))  
                            }
                        </List>
                    </TabPanel>
                </TabContext>



            </Container>
        </Container>
    </div>
  )
}

export default ShowList