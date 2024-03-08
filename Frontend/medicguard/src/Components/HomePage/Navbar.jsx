import { BrowserRouter, Link } from "react-router-dom";
import "../../static/Navbar.css";

const Navbar2 = () => {
  return (
    <>
      <BrowserRouter>
        <div className="div-nav">
          <nav className="navbar">
            <ul>
              <div className="list-item">
                <img src="/public/image.png" alt="Logo" className="logo" />
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
        </div>
      </BrowserRouter>
    </>
  );
};

export default Navbar2;