import * as React from 'react';
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contacts from './Contacts'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App"> 
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contacts />
    </div>
  
  )
}

export default App;
