import React from 'react'
import { useState } from 'react'
import ShowForm from './components/shows/ShowForm'
import ShowList from './components/shows/ShowList'
import Home from './components/static/Home'
import Navbar from './components/navigation/Navbar'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { baseUrl } from './Global'

const App = () => {
  const [ shows, setShows ] = useState([]);
  

  const dateObj = new Date();
  const weekday = dateObj.toLocaleString("default", { weekday: "long" })

  //fetch requests
  const fetchSavedShows = () => {
    fetch(baseUrl + '/shows')
    .then(response => response.json())
    .then(data => setShows([...data]))

  console.log('Today is:', weekday)
  }
  
  //useEffects
  useEffect(() => {
    fetchSavedShows();
  }, [])
  
  
  
  const saveShow = (show, day) => {
    //Add a POST method here to add show to shows
    show['weekday'] = day
    
    console.log('save show', show)
    console.log('remove from day of week', day)

    fetch(baseUrl + '/shows', {
      method: "POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
      },
      body: JSON.stringify(show)
    })
      .then(resp => resp.json())
      .then(data => {
        setShows([...shows, show])
        fetchSavedShows();
      })
  }

  const unsaveShow = (show, day) => {
    console.log('unsaving', show)
    console.log('remove from day of week', day)
  }


  return (
    <Router>
      <Navbar shows={shows}/>
      <Routes>
        <Route path="/shows/new" element={<ShowForm saveShow={saveShow} unsaveShow={unsaveShow}  />} />
        <Route path="/shows" element={<ShowList shows={shows} day={weekday} />} />
        <Route path="/" element={<Home shows={shows}/>} />
      </Routes>
    </Router>
  )
}

export default App
