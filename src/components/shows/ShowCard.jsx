import React from 'react'
import { useState } from 'react'
import Grid from '@mui/material/Grid';
import TimerIcon from '@mui/icons-material/Timer';
import DvrIcon from '@mui/icons-material/Dvr';
import TheatersIcon from '@mui/icons-material/Theaters';
import StarsIcon from '@mui/icons-material/Stars';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '##eeeeee',
    padding: theme.spacing(1),
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  }));

const ShowCard = ({ show, saveShow, unsaveShow }) => {
  const [ save, setSave ] = useState(false)
  const [ day, setDay ] = useState('wednesday')
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    
  const handleSave = () => {
    saveShow(show, day)
    setSave(true)
  }
    
  return (
    <Grid item sx={{ width: '100%' }}>
    <Card sx={{ display: 'flex', width: '100%'}}>
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={show.poster}
        alt={show.title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <CardHeader
            action={
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            }
        title={show.title}
        subheader={`Available for Streaming on ${show.streaming}`} 
      />
        </CardContent>
        
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography variant="overline" display="block" gutterBottom>
                DETAILS
            </Typography>
        <Stack
        sx={{ m: 1, width: '100%' }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={3}
      >
        <Badge badgeContent={`${show.runtime}` } color="primary">
            <Item><TimerIcon /> RUNTIME (in minutes)</Item>
        </Badge>
        <Badge badgeContent={`${show.episodes}` } color="primary">
            <Item><TheatersIcon /> EPISODE(S)</Item>
        </Badge>
        <Badge badgeContent={`${show.seasons}` } color="primary">
            <Item>
                <DvrIcon/> SEASONS
            </Item>
        </Badge>
        <Badge badgeContent={`${show.rating}%` } color="primary">
            <Item><StarsIcon />RATINGS</Item>
        </Badge>
        
      </Stack><br />
          <Typography variant="overline" display="block" gutterBottom>
                Overview
            </Typography>
          <Typography variant="body2" gutterBottom>
            {show.overview}
          </Typography>
          <br />
          <Button variant="contained" href={'https://youtu.be/' + `${show.video}`} sx={{ m: 1, width: '100%' }} target="blank" color="success" startIcon={<PlayCircleIcon />}>Watch Preview</Button>
        </CardContent>
      </Collapse>
        
        <CardActions disableSpacing sx={{ flex: '1 0 auto' }}>
                    <FormControl fullWidth sx={{ m: 1 }}>
  <InputLabel id="day">Add to Your Watchlist...</InputLabel>
  <Select
    labelId="day"
    id="day"
    value={day}
    label="Add to Your Watchlist..."
    onChange={e => setDay( e.target.value )}
  >
    <MenuItem value="monday">Monday</MenuItem>
    <MenuItem value="tuesday">Tuesday</MenuItem>
    <MenuItem value="wednesday">Wednesday</MenuItem>
    <MenuItem value="thursday">Thursday</MenuItem>
    <MenuItem value="friday">Friday</MenuItem>
    <MenuItem value="saturday">Saturday</MenuItem>
    <MenuItem value="sunday">Sunday</MenuItem>
  </Select>
</FormControl>
{ save? <Button color="success" size="small" variant="contained" startIcon={<CheckCircleIcon />} disabled> Show Saved!</Button> : <Button size="small" variant="contained" onClick={handleSave} startIcon={<AddCircleIcon />}> Save Show</Button>}
          </CardActions>
      </Box>
    </Card>
    </Grid>
  )
}

export default ShowCard