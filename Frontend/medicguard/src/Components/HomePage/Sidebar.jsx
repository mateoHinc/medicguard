import { BrowserRouter, Link } from "react-router-dom";
import "../css/styleSidebar.css";

const Sidebar = () => {
  return (
    <>
      <BrowserRouter>
        <div className="sidebar">
          <div className="itemLogo">
            <img src="/public/image.png" alt="Logo" className="logo" />
            <span>Mediguard</span>
          </div>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/user/calendar">Calendario</Link>
            </li>
            <li>
              <Link to="/admin/calendar">Calendario</Link>
            </li>
            <li>
              <Link to="/guards">Guardias</Link>
            </li>
          </ul>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Sidebar;
