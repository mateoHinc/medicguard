import React, { useState } from 'react';
import './ModalDownloadFile.css';

const ModalDownloadFile = () => {
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
                        <h1 className="modal-text">Se ha descargado correctamente el archivo</h1>
                        <div className="btncontainer">
                            <button>Aceptar</button>
                        </div>
                    </div>
                    
                </div>
            )}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam excepturi corrupti doloremque accusantium id ratione ipsa </p>
        </>
    );
};

export default ModalDownloadFile;
