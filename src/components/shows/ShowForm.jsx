import React from 'react'
import { useState } from 'react'
import ShowCard from './ShowCard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { capitalizeFirstLowercaseRest } from '../../Global';

const ShowForm = ({ saveShow }) => {
    const [ show, setShow ] = useState('');
    const [ platform, setPlatform ] = useState('');
    const [ outputs, setOutput ] = useState([]);
    const [ searching, setSearching ] = useState(false);
    
    async function fetchShows() {
        const customURL = ('https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=' 
        + platform + '&type=series&keyword=' + show
        + '&output_language=en').replace(/ /g, '%20')

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '85900b7c00mshcf991f3bb28992ep180ad5jsn97819322cdfa',
                'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
            }
        };
        
        const response = await fetch(customURL, options);
        const shows = await response.json();
        return shows
    }

    const handleSearch = (event) => {
        event.preventDefault();
        setOutput([]);
        console.log(show, platform);
        setSearching(true);
        
        fetchShows().then(data => {
            const results = data.results;
            const returnedShows = results.map(result => {
                let showObj = {
                    "title" : result.title,
                    "runtime": result.episodeRuntimes[0],
                    "seasons": result.seasons,
                    "episodes": result.episodes,
                    "poster": result.posterURLs.original,
                    "overview": result.overview,
                    "streaming": capitalizeFirstLowercaseRest(platform),
                    "rating": result.tmdbRating,
                    "video": result.video,
                }
                return showObj;
            })
            setOutput(returnedShows)
        })
    }
  
    return (
    <div>
        <Container>
        <h1>ShowForm</h1>
        <form onSubmit={handleSearch}>
        <FormControl fullWidth sx={{ width: '100%', mt: 1, mr: 1 }}>
            <TextField 
                fullWidth
                variant="filled"
                id="show" 
                name="show"
                label={'Search for your favorite show'}
                value={ show }
                onChange={ e => setShow( e.target.value ) } />
        </FormControl>
        <FormControl fullWidth variant="filled" sx={{ width: '100%',  mt: 1, mr: 1 }}>
            <InputLabel id="streaminglatform">Streaming Platform</InputLabel>
        <Select
          labelId="streaminglatform"
          id="streaminglatform"
          value={ platform }
          onChange={ e => setPlatform( e.target.value ) }
        >
          <MenuItem value='netflix'>Netflix</MenuItem>
          <MenuItem value='hulu'>Hulu</MenuItem>
          <MenuItem value='disney'>Disney</MenuItem>
          <MenuItem value='hbo'>HBO Max</MenuItem>
          <MenuItem value='prime'>Prime</MenuItem>
          <MenuItem value='paramount'>Paramount</MenuItem>
        </Select>
      </FormControl>
            <Button variant="contained" type="submit" sx={{ mt: 1, mr: 1, width: '100%' }}>Search</Button>
        </form>
        </Container>
        <Container>
        { searching? <h1>Available Shows</h1> : "" }
            <Grid container direction="row" rowSpacing={{ xs: 1, sm: 1, md: 2 }} sx={{ width: '100%' }}>
                { outputs.map((output, index) => {
                    return (
                            <ShowCard show={output} key={index} saveShow={saveShow} />
                    )
                })}
            </Grid>
        </Container>     
    </div>
  )
}

export default ShowForm