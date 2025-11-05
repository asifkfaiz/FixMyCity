import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CitizenHomePage from './pages/citizen/CitizenHomePage'

function App() {
  return (
    <>
    <Routes>
      <Route path='/homepage' element={<CitizenHomePage/>}/>
    </Routes>
    </>
  )
}

export default App