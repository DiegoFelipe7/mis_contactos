import { useContext, useEffect } from "react";
import ContactosContex from "../contex/ContactosContex";
import Contactos from "../components/Contactos";
const ListadoContactos = () => {
  //Creacion del contex con las funciondes usuariostate
  const contactocontex = useContext(ContactosContex);
  const { contactos, ListarContactos } = contactocontex;
  //utlizamos el usefecto para detonar cualquier cambio que pueda surgir  en el listado
  //de los usuarios para que vualva a ejecutar la funcion
  useEffect(() => {
    ListarContactos();
  }, [ListarContactos]);

  return (
    <>
      <div className="mb-5">
        <h2 className="fw-bold">Contactos</h2>
        <p>Administra tus contactos</p>
      </div>
      {contactos.length === 0 ? (
        <div className="alert alert-danger" role="alert">
          <p> No hay contactos registrado</p>
        </div>
      ) : (
        <table className="table">
          <thead className="bg-dark text-white text-center">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Telefono</th>
              <th scope="col">Correo</th>
              <th scope="col"> Fecha De nacimiento</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {contactos.map((contacto) => (
              <Contactos key={contacto.id} contacto={contacto} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default ListadoContactos;
