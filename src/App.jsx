import * as React from 'react';
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contacts from './Contacts'
import Navbar from './components/Navbar'
function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  return (
    <div className="App"> 
      <Navbar _darkMode={darkMode} _setDarkMode={() => {setDarkMode(!darkMode)}}/>
      <Home />
      <About />
      <Projects />
      <Contacts />
    </div>
  
  )
}

export default App;
