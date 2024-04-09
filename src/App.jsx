import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import{About, Contact,Education,  Hero, Navbar, Tech, Works, StarsCanvas} from './components'
const App = () => {
  return (
    <BrowserRouter>
      <div className=' relative z-0 bg-gradient-to-b from-black to-[#121212]...'>
        <div className='bg-hero-pattern  bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Education />
        <Tech/>
        <Works/>
      </div>
      <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
      </div>
    </BrowserRouter>
  )
}

export default App