import React from 'react'
import Home1 from './Home/Home1'
import Navbar from './assets/Navvar/Navbar'
import HomeInternSkills from './Home/Home2'
import Home2 from './Home/Home2'
import Home3 from './Home/Home3'
import Contact from './Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home1 />
      <Home2 />
      <Home3 />
      <Contact />
    </div>
  )
}

export default App