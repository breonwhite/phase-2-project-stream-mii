import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
        <ul>
            <li><Link to="/shows/new">ADD SHOWS</Link></li>
            <li><Link to="/shows">YOUR SHOWS</Link></li>
            <li><Link to="/">HOME</Link></li>
        </ul>
    </div>
  )
}

export default navbar