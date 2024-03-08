import '../static/AdminCalendar.css';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from 'dayjs';


const AdminCalendar = () => {

    const localizer = dayjsLocalizer(dayjs);

    const events = [
        {
            start: dayjs('2024-2-20T20:00:00').toDate(),
            end: dayjs('2024-2-21T08:00:00').toDate(),
            title: "Salvador Tesore"
        },
        {
            start: dayjs('2024-2-20T20:00:00').toDate(),
            end: dayjs('2024-2-20T23:00:00').toDate(),
            title: "Salvador Tesore2"
        }
    ]

    const customMessages = {
        next: 'Siguiente',
        previous: 'Anterior',
        today: 'Hoy',
        month: 'Mes',   
        week: 'Semana',
        day: 'Día',
      };



    return (
        <div>
            <span className="logout">Cerrar sesión</span>
            <h1 className="title2">Calendario</h1>
            <p className="above-calendar2">Días de guardias asignadas</p>

            <div className='adminCalendar'>


                <Calendar
                    localizer={localizer}
                    events={events}
                    views={["month", "agenda"]}
                    messages={customMessages}
                />

            </div>
        </div>
    );
};

export default AdminCalendar;