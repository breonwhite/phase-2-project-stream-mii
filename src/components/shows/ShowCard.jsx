import React from 'react'
import { useState } from 'react'

const ShowCard = ({ show, saveShow, unsaveShow }) => {
  const [ save, setSave ] = useState(false)
  const [ day, setDay ] = useState('wednesday')
    
  const handleSave = () => {
    saveShow(show, day)
    setSave(true)
  }

  const handleUnsave = () => {
    unsaveShow(show, day)
    setSave(false)
  }
    
  return (
    <li>
        { show.title }
        { show.runtime }
                    <select name="day" id="day" onChange={ e => setDay( e.target.value )}>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    </select>
            { save ? <button onClick={ handleUnsave }>Unsave Show</button> : <button onClick={ handleSave }>Add Show</button> }
    </li>
  )
}

export default ShowCard