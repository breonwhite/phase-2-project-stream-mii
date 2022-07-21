import React from 'react'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Grid from '@mui/material/Grid';




const LineupCard = ( {show }) => {
    const theme = useTheme();

  return (
    <Grid item width='90%'>
    <Card sx={{ width: '900', display: 'flex' }}>
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={show.poster}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {show.title}
          </Typography>
          <br />
          <Typography variant="overline" color="text.secondary" component="div">
            Description
          </Typography>
          <Typography variant="caption" color="text.secondary" component="div">
            {show.overview} 
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                {`Available for Streaming on ${show.streaming}`} 
            </Typography>
        </Box>
      </Box>
    </Card>
    </Grid>
  )
}

export default LineupCard