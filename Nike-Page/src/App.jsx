// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Hero } from './components/mainCompo'
import { NavigationBar } from './components/navBar'


function App() {
  return(
    <div>
      <NavigationBar />
      <Hero />
    </div>
  )
}

export default App
