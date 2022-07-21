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







//Grid
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { Button, CardActionArea, CardActions, ListItem, ListItemButton } from '@mui/material';


const ShowList = ({ shows, day, unsaveShow }) => {
    const [ value, setValue ] = useState('allshows');

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
                    backgroundColor: '#eeeeee',
                    }}
                >
                    {day} shows will be here
                </Box>
        </Container>
        <Container>
            Your Shows
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