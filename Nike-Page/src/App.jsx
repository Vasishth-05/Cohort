// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { MainCompo } from './components/mainCompo'
import { NavigationBar } from './components/navBar'

function App() {
  return(
    <div>
      <NavigationBar />
      <MainCompo/>
    </div>
  )
}

export default App
