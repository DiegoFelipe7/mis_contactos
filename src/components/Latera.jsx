import { Link, useLocation } from "react-router-dom";
const Lateral = () => {
  //hook de la locacion
  const location = useLocation();
  const urlActual = location.pathname;
  return (
    <>
      <div className="col-3 bg-dark vh-100 ">
        <h2 className="text-center text-white fw-bold ">CRUD-CONTACTOS</h2>
        <nav className="nav flex-column justify-content-center align-items-center ">
          <br></br>
          <Link
            className={`${
              urlActual === "/" ? "text-light" : "text-white"
            } nav-item fs-4 fw-bold text-decoration-none mb-5 `}
            to="/"
          >
            Contactos
          </Link>

          <Link
            className={`${
              urlActual === "/nuevo-contacto" ? "text-light" : "text-white"
            } nav-item  fs-4 fw-bold text-decoration-none `}
            to="/nuevo-contacto"
          >
            Nuevo Contacto
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Lateral;
