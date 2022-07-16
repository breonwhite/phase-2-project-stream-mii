import React from 'react'

const ShowCard = ({ show, index, saveShow }) => {
  const handleSave = () => {
    saveShow(show)
  }
    
  return (
    <li key={index}>
        { show.title }
        { show.runtime }
        <button onClick={ handleSave }>Add Show</button>
    </li>
  )
}

export default ShowCard