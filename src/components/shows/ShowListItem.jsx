import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


const ShowListItem = ({ show }) => {

  return (
        <ListItem 
            alignItems="flex-start"
            secondaryAction={
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            }>
                <ListItemAvatar sx={{  m: 1 }}>
                    <Avatar alt={show.title} src={show.poster} sx={{ width: 56, height: '100%'}} variant="rounded"/>
                </ListItemAvatar>
                <ListItemText
                    primary={<b>{show.title}</b>}
                    secondary={
                        <React.Fragment>
                            {`Available for Streaming on ${show.streaming}`}<br />
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                { `Runtime: ${show.runtime} mins | Episodes: ${show.episodes} | Seasons: ${show.seasons} | Ratings: ${show.rating}%` }
                            </Typography><br />
                            <Button variant="text" href={'https://youtu.be/' + `${show.video}`} size="small">Watch Preview</Button>
                        </React.Fragment>
                    }/>
        </ListItem>
  )}

export default ShowListItem