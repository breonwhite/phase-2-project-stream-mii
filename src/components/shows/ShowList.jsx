import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import MobileStepper from '@mui/material/MobileStepper';
import ButtonGroup from '@mui/material/ButtonGroup';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import ShowListItem from './ShowListItem';
import LineupCard from './LineupCard';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { Button, CardActionArea, CardActions, ListItem, ListItemButton } from '@mui/material';

const images = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bird',
      imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
      label: 'Goč, Serbia',
      imgPath:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
  ];




const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
    
    const handleStepChange = (step) => {
        setActiveStep(step);
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
                            ) :null
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
                disabled={activeStep === maxSteps - 1}
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
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
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
            <Container>
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
                                </div>
                            ))}
                            <Divider />
                        </List>
                    </TabPanel>
                </TabContext>



            </Container>
        </Container>
    </div>
  )
}

export default ShowList


{/* <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="All Shows" value="allshows" />
                            <Tab label="Sunday" value="sunday" />
                            <Tab label="Monday" value="monday" />
                            <Tab label="Tuesday" value="tuesday" />
                            <Tab label="Wednesday" value="wednesday" />
                            <Tab label="Thursday" value="thursday" />
                            <Tab label="Friday" value="friday" />
                            <Tab label="Saturday" value="saturday" />
                        </TabList>
                    </Box>
                    <TabPanel value={value}>
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            { WeekdayShows(value).map((item) => (
                                <ListItem
                                    button
                                    key={item.id}
                                    onClick={(e) => {
                                        setOpen(true);
                                        setDetails(item.title)
                                    }}
                                >
                                    <WeeklyShows show={item} />
                                </ListItem>
                            ))
                            }
                        </List>
                    </TabPanel>
                </TabContext> */}