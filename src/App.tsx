import { useState } from 'react'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'


function App() {

  return (
    <div className="bg-white/20 lg:h-[100vh] lg:w-[100vw] rounded-sm flex items-end pb-3 justify-center">
      <div className="flex justify-center bg-white/40 lg:h-[88vh] lg:w-[96vw] rounded-lg">
        <Header />
      </div>
    </div>
  )
}

export default App
