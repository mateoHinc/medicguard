import '../static/Navbar.css';
import { BrowserRouter, Link, Route , Routes  } from 'react-router-dom';
import UserCalendar from './UserCalendar';
import Guards from '../Components/Guards';
import Home from '../Components/HomePage/Home';
import AdminCalendar from './AdminCalendar';

function Navbar() {
    return (
        <>
            <BrowserRouter>
                <div className='div-nav'>
                    <nav className='navbar'>
                        <ul>

                            <div className='list-item'>
                                <img src='image.png' alt='Logo' className='logo' />
                                <span> MedicGuard </span>
                            </div>

                            <li>
                                <Link to="/"> Inicio </Link>
                            </li>

                            <li>
                                <Link to="/user/calendar"> Calendario </Link>
                            </li>

                            <li>
                            <Link to="/admin/calendar"> Calendario </Link>
                            </li>

                            <li>
                                <Link to="/guards"> Guardias </Link>
                            </li>

                        </ul>
                    </nav>

                    <hr />

                    <Routes>

                        <Route path="/user/calendar" element={<UserCalendar />} />

                        <Route path="/admin/calendar" element={<AdminCalendar />} />

                        <Route path="/guards" element={<Guards />} />

                        <Route path="/" element={<Home />} />

                    </Routes>

                </div>

            </BrowserRouter>
        </>
    );
}

export default Navbar;