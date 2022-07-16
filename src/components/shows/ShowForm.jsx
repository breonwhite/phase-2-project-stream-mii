import React from 'react'
import { useState } from 'react'

const ShowForm = () => {
    const [ show, setShow ] = useState('');
    const [ platform, setPlatform ] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(show, platform)
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
            
            <input type="button" value="Search Your Favorite Show" onClick={handleSubmit} />
        </form>
    </div>
  )
}

export default ShowForm