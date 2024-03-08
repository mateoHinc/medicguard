import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleClickInside = (e) => {
    e.stopPropagation(); // Prevent click from closing the modal
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
            <div className="left-div">
              <div className="image-container">
                <img src="./assets/logovaina esa.png" alt="Description" />
                <h3>CERTIFICADO DE TRABAJO</h3>
              <p className="modal-text">CERTIFICAMOS que el/la Sr/a JOSÉ ANDRADA quien acredita su identidad con DNI Nº 123456789 y CUIL Nºde 20-123456789-4 ha prestado servicio en el mes MARZO de 2024 durante 192 HORAS en CENTRO DE SALUD MENTAL MENDOZA, ubicada en Av. San Rafael 123.
Se extiende el presente certificado a pedido del/la interesado/a en San Rafael, Mendoza para ser presentado ante quien corresponda.</p>
              <img src="./assets/firma.png"/>
                <p>Av. San Rafael, Mendoza TEL (261)44556829</p>
                
              </div>
            </div>
            <div className="right-div">
              <div className="combo-section">
                <label>Formato:</label>
                <select className="modal-combobox">
                  <option>Guardar como PDF</option>
                  <option>Guardar como JPG</option>
                  <option>Guardar como PNG</option>
                </select>
              </div>
              <div className="combo-section">
                <label>Páginas:</label>
                <select className="modal-combobox">
                <option>Todo</option>
                </select>
              </div>
              <div className="combo-section">
                <label>Páginas por hoja:</label>
                <select className="modal-combobox">
                <option>1</option>
                </select>
              </div>
              <div className="buttons-container">
                <button className="modal-button">Cancelar</button>
                <button className="modal-button">Aceptar</button>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}
