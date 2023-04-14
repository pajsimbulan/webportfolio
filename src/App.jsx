// App.js
import * as React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contacts from './Contacts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from './components/Modal';


function App() {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div className="App">
      {openModal ? <Modal closeModal={() => setOpenModal(false)} /> : null}
      <Navbar openModal={() => setOpenModal(true)} />
      <Home />
      <Footer />
     
    </div>
  );
}

export default App;
