// Modal.js
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';

const Modal = ({ closeModal }) => {

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape')
      {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="modal">
      <div className="modalContents">
        <div className='closeRow'>
          <button onClick={closeModal}>
            <FontAwesomeIcon icon={faXmark} className="icon" style={{color:'black'}}/>
          </button>
        </div>
        <a href="#home" onClick={() => {closeModal();}}>Home</a>
        <a href="#about" onClick={() => {closeModal();}}>About</a>
        <a href="#projects" onClick={() => {closeModal();}}>Projects</a>
        <a href="#contacts" onClick={() => {closeModal();}}>Contact</a>
      </div>
    </div>
  );
};

export default Modal;
