import React from 'react'
import ShowForm from './components/shows/ShowForm'
import ShowList from './components/shows/ShowList'
import Home from './components/static/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/shows/new" element={<ShowForm />} />
        <Route path="/shows" element={<ShowList />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
