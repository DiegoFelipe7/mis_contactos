import Eliminar from "../icons/Eliminar";
import Actualizar from "../icons/Actualizar";
import EliminadoLogicos from "../icons/EliminadoLogico";
import ContactosContex from "../contex/ContactosContex";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Contactos = ({ contacto }) => {
  //useNavigate para rediregir a el usaurio
  const navegacion = useNavigate();

  //Creacion del contex con las funciondes usuariostate
  const contactocontex = useContext(ContactosContex);
  const {
    ListarContactos,
    SeleccionarContacto,
    EliminarContacto,
    EliminadoLogico,
  } = contactocontex;
  const eliminar = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Un contacto que se elimina no se puede recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        // pasarlo al state
        EliminarContacto(id);
      }
    });
    ListarContactos();
  };

  const actualizarContacto = (contacto) => {
    //si el usuario selecciona actalizar proyecto pasamos los datos al state
    //del proyecto seleccionado
    SeleccionarContacto(contacto);
    navegacion("/actualizar-contacto");
  };

  const eliminado_Logico = (contacto) => {
    //recibimos un contacto y realizamos una validacion para el eliminado
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Estas apunto de realizar un borrado logico",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        // pasarlo al state con el proyecto a eliminar
        EliminadoLogico(contacto);
      }
    });
    //listar los contactos
    ListarContactos();
  };
  const { id, nombre, telefono, correo_electronico, fecha_de_nacimiento } =
    contacto;
  return (
    <>
      <tr className="bg-white text-center">
        <th scope="row">{id}</th>
        <td>{nombre}</td>
        <td>{telefono}</td>
        <td>{correo_electronico}</td>
        <td>{fecha_de_nacimiento}</td>
        <td>
          <button
            className="btn btn-danger"
            title="Eliminar"
            onClick={() => eliminar(id)}
          >
            <Eliminar />
          </button>{" "}
          <button
            className="btn btn-dark"
            title="Modificar"
            onClick={() => actualizarContacto(contacto)}
          >
            <Actualizar />
          </button>{" "}
          <button
            className="btn btn-primary "
            title="Eliminado Logico"
            onClick={() => eliminado_Logico(contacto)}
          >
            <EliminadoLogicos />
          </button>
        </td>
      </tr>
    </>
  );
};

export default Contactos;
