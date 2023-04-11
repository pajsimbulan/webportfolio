// Modal.js
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';

const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modalContents">
        <div className='closeRow'>
          <button onClick={closeModal}>
            <FontAwesomeIcon icon={faXmark} size='xl' style={{height:'35px', width:'35px'}}/>
          </button>
        </div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contact</a>
      </div>
    </div>
  );
};

export default Modal;
