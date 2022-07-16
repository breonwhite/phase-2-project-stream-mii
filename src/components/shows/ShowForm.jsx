import React from 'react'
import { useState } from 'react'
import ShowCard from './ShowCard';

const ShowForm = ({ saveShow }) => {
    const [ show, setShow ] = useState('');
    const [ platform, setPlatform ] = useState('');
    const [ outputs, setOutput ] = useState([]);

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

    
    
    
    const handleSearch = e => {
        e.preventDefault();
        console.log(show, platform)
        
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
                    "streaming": platform,
                    "rating": result.tmdbRating,
                    "video": result.video
                }
                return showObj;
            })
            setOutput(returnedShows)
        })
    }
  
    return (
    <div>
        <h1>ShowForm</h1>
        
        <form>
            <div>
                <label htmlFor="showInput">Enter Show</label>
                <input type="text" id="show" name="show" value={ show } onChange={ e => setShow( e.target.value ) }  />
                <label htmlFor="platform">Select a platform</label>
                    <select name="platform" id="platform"  value={ platform } onChange={ e => setPlatform( e.target.value ) }>
                    <option value="netflix">Netflix</option>
                    <option value="hulu">Hulu</option>
                    <option value="prime">Prime</option>
                    <option value="paramount">Paramount</option>
                    <option value="disney">Disney</option>
                    </select>
            </div>
            
            <input type="button" value="Search Your Favorite Show" onClick={handleSearch} />
        </form>
        <div>
            <ul>
                { outputs.map((output, index) => {
                    return (
                            <ShowCard show={output} key={index} saveShow={saveShow}/>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default ShowForm

// handledelete
// remove from shows results
// add to database (Post)