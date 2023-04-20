import { useState } from 'react'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'


function App() {

  return (
    <div className="bg-white/30 lg:h-[97vh] lg:w-[99vw] rounded-md flex items-center justify-center">
      <div className="bg-white/40 lg:h-[90vh] lg:w-[96vw] rounded-lg">
        <Header />
        <NavBar />
      </div>
    </div>
  )
}

export default App
