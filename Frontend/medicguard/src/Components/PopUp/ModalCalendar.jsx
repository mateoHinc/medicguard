import React, { useState } from 'react';
import './ModalDownloadFile.css';

const ModalCalendar = () => {
    const [modal, setModal] = useState(false);
    
    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Open
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                   <div className="modal-content">
                        <h1 className="modal-text">Se ha cargado correctamente la guardia</h1>
                        <p>User lastname realizará la guardia del día date</p>
                        <div className="btncontainer">
                            <button>Aceptar</button>
                        </div>
                    </div>
                    
                </div>
            )}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam excepturi corrupti doloremque accusantium id ratione ipsa </p>
        </>
  )
}

export default ModalCalendar
