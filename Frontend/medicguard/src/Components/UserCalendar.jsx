import React, { useState } from "react";
import Calendar from 'react-calendar';
import '../static/Calendar-style.css';
import { formatMonthYear } from './Custom-calendar';

const UserCalendar = () => {

    const [dayNotAvailable, setDayNotAvailable] = useState([]);
    const [confirmationMessage, setConfirmationMessage] = useState("");

    const handleDayClick = date => {

        const isOccupied = dayNotAvailable.find(day => day.getTime() === date.getTime());

        if (isOccupied) {
            setDayNotAvailable(prev => prev.filter(day => day.getTime() !== date.getTime()));
        } else {
            if (dayNotAvailable.length < 4) {
                setDayNotAvailable(prev => [...prev, date]);
            } else {
                setConfirmationMessage("¡Ya has seleccionado 4 días!");
                setDayNotAvailable([]);
            }
        }
    };

    const sendDayNotAvailable = () => {
       
        // FUNCION PARA ENVIAR DATOS AL BACKEND

        if (dayNotAvailable.length !== 0) {
            setConfirmationMessage("Días seleccionados con éxito!");
            console.log("Días no disponibles:", dayNotAvailable);
        } else {
            setConfirmationMessage("Por favor seleccione unos días antes de aceptar");
        }

    };

    const deleteDaySelected = () => {
        setDayNotAvailable([]);
        setConfirmationMessage(""); // Limpia el mensaje de confirmación al eliminar días seleccionados
    };

    const tileClassName = ({ date }) => {
        const isDateSelected = dayNotAvailable.some(day => day.toDateString() === date.toDateString());

        return isDateSelected ? "react-calendar__tile--active" : null;
    };

    return (
        <div>
            <span className="logout">Cerrar sesión</span>
            <h1 className="title">Calendario</h1>
            <p className="above-calendar">Selecciona los días que <b>NO</b> puedes hacer guardia</p>
            <Calendar
            className={"UserCalendar"}
                key={dayNotAvailable.length}
                formatMonthYear={formatMonthYear}
                onClickDay={handleDayClick}
                tileClassName={tileClassName}
            />
            <div className="button">
                <button className="buttonDelete" onClick={deleteDaySelected}>Eliminar</button>
                <button className="buttonSend" onClick={sendDayNotAvailable}>Aceptar</button>
            </div>
            {confirmationMessage && <p>{confirmationMessage}</p>}
        </div>
    );
};

export default UserCalendar;