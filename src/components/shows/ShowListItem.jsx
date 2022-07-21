import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';


const ShowListItem = ({ show, unsaveShow }) => {

    const handleDelete = () => {
        unsaveShow(show)
    }

  return (
        <ListItem 
            alignItems="flex-start"
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
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