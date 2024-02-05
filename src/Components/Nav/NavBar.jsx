import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            Aplicacion de Enrutamiento
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to="/" className="nav-link" aria-current="page">
                Home
              </NavLink>
              <NavLink to="/About" className="nav-link">
                About
              </NavLink>
              <NavLink to="/Contact" className="nav-link">
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
