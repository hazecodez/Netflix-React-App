import React from 'react'
import './StyleSheets/App.css'
import NavBar from './Components/NavBar'
import Banner from './Components/Banner'
import RowPost from './Components/RowPost'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost/>
    </div>
  )
}

export default App
