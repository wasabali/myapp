import React from 'react'
import ReactDom from 'react-dom';
import { FaEnvelopeOpenText, FaRegWindowClose } from 'react-icons/fa';
import './Modal.css';

export default function Modal({children, open, onClose}) {
    if (! open) return null

    //Create portal gjør at man kan ha den i original html (DOM) index.html
    //Gjør at man kan manipulere og bruke popupen over alt det andre
    return ReactDom.createPortal (
        <>
    
        <div className='popup'>
        <div className="popup-inner">
          <button>
            <FaRegWindowClose onClick={onClose} size='1.5em' className="close-btn"/>
          </button>
            {children}
            </div>
          </div>
        </>,
        document.getElementById('portal')
        
    )
}
