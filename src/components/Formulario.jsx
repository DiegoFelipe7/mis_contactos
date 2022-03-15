import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContactosContex from "../contex/ContactosContex";
import Guardar from "../icons/Guardar";
import Actualizar from "../icons/Actualizar";
import Swal from "sweetalert2";
const Formulario = ({ tipo }) => {
  //useNavigate para redireccionar a los usuarios
  const navegacion = useNavigate();
  //Creacion del contex con las funciondes usuariostate
  const contactocontex = useContext(ContactosContex);
  const {
    AgregarContacto,
    seleccion_contacto,
    ActualizarContactos,
    CancelarActualizacion,
    ActualizarNombre,
    ActualizarTelefono,
    ActualizarCorreo,
    ActualizarFecha,
  } = contactocontex;
  //fin contex//
  //creacion del useState con los datos del form//
  const [contactos, setcontactos] = useState({
    nombre: "",
    telefono: "",
    correo_electronico: "",
    fecha_de_nacimiento: "",
  });
  //fin usestate
  //extrallendo los datos del arreglo
  const { nombre, telefono, correo_electronico, fecha_de_nacimiento } =
    contactos;
  //fin
  //useState para mostar los errores
  const [error, seterror] = useState(false);
  //Useefecto para llenar los campos del form si selecciona un usario
  useEffect(() => {
    if (seleccion_contacto != null) {
      setcontactos(seleccion_contacto);
    } else {
      setcontactos({
        nombre: "",
        telefono: "",
        correo_electronico: "",
        fecha_de_nacimiento: "",
      });
    }
  }, [seleccion_contacto]);
  //funcion para guardar los datos o actualizarlos
  const saveUsuario = (e) => {
    e.preventDefault();
    //validacion de los campos
    if (
      nombre.trim() === "" ||
      telefono.trim() === "" ||
      correo_electronico.trim() === "" ||
      fecha_de_nacimiento.trim() === ""
    ) {
      seterror(true);
      setTimeout(() => {
        seterror(false);
      }, 3000);
    } else {
      //validamos si hay un contacto seleccionado
      if (seleccion_contacto != null) {
        if (seleccion_contacto.nombre !== nombre) {
          ActualizarNombre(contactos);
        }
        if (seleccion_contacto.telefono !== telefono) {
          ActualizarTelefono(contactos);
        }
        if (seleccion_contacto.correo_electronico !== correo_electronico) {
          ActualizarCorreo(contactos);
        }
        if (seleccion_contacto.fecha_de_nacimiento !== fecha_de_nacimiento) {
          ActualizarFecha(contactos);
        }

        if (
          seleccion_contacto.nombre !== nombre ||
          seleccion_contacto.telefono !== telefono ||
          seleccion_contacto.correo_electronico !== correo_electronico ||
          seleccion_contacto.fecha_de_nacimiento !== fecha_de_nacimiento
        ) {
          Swal.fire({
            title: "¿Estas seguro ?",
            text: "Una vez actualizado se perdera la informacion anterior",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, actualizar",
            cancelButtonText: "Cancelar",
          })
            .then((result) => {
              if (result.value) {
                // actualizamos los datos
                contactos.status = 1;
                ActualizarContactos(contactos);
                setcontactos({
                  nombre: "",
                  telefono: "",
                  correo_electronico: "",
                  fecha_de_nacimiento: "",
                });
                navegacion("/");
              } else {
                CancelarActualizacion();
                navegacion("/");
              }
            })
            .catch((err) => {
              console.log("ocurrio algo" + err);
            });
        }
      } else {
        //si no hay ningun usuario seleccionad se guardas los nuevos datos del usuarios
        contactos.status = 1;
        AgregarContacto(contactos);
        setcontactos({
          nombre: "",
          telefono: "",
          correo_electronico: "",
          fecha_de_nacimiento: "",
        });
        navegacion("/");
      }
    }
  };
  return (
    <>
      <div className="w-100 d-flex justify-content-center  aling-item-center ">
        <form
          className="w-50 border p-5 bg-white shadow rounden "
          autoComplete="off"
          onSubmit={saveUsuario}
        >
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label fw-bold">
              Nombre completo
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={(e) =>
                setcontactos({ ...contactos, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label fw-bold">
              Telefono
            </label>
            <input
              type="number"
              className="form-control"
              id="telefono"
              name="telefono"
              value={telefono}
              onChange={(e) =>
                setcontactos({ ...contactos, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="correo_electronico"
              name="correo_electronico"
              value={correo_electronico}
              onChange={(e) =>
                setcontactos({ ...contactos, [e.target.name]: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fecha_de_nacimiento" className="form-label fw-bold">
              Fecha De Nacimiento
            </label>
            <input
              type="date"
              className="form-control"
              id="fecha_de_nacimiento"
              name="fecha_de_nacimiento"
              value={fecha_de_nacimiento}
              onChange={(e) =>
                setcontactos({ ...contactos, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-dark w-100 fw-bold">
              {tipo === "Guardar" ? <Guardar /> : <Actualizar />} {tipo}
            </button>
          </div>
          {error ? (
            <div className="alert alert-danger" role="alert">
              <p> TODOS LOS CAMPOS SON OBLIGATORIOS</p>
            </div>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default Formulario;
