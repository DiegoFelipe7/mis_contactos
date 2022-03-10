import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContactosContex from "../contex/ContactosContex";
import Guardar from "../icons/Guardar";
import Actualizar from "../icons/Actualizar";
import Swal from "sweetalert2";
const Formulario = ({ tipo }) => {
  const navegacion = useNavigate();
  const contactocontex = useContext(ContactosContex);
  const {
    AgregarContacto,
    seleccion_contacto,
    ActualizarContactos,
    CancelarActualizacion,
  } = contactocontex;
  const [contactos, setcontactos] = useState({
    nombre: "",
    telefono: "",
    correo_electronico: "",
    fecha_de_nacimiento: "",
  });
  const { nombre, telefono, correo_electronico, fecha_de_nacimiento } =
    contactos;
  const [error, seterror] = useState(false);
  useEffect(() => {
    if (seleccion_contacto != null) {
      setcontactos(seleccion_contacto);
      console.log(seleccion_contacto);
    } else {
      setcontactos({
        nombre: "",
        telefono: "",
        correo_electronico: "",
        fecha_de_nacimiento: "",
      });
    }
  }, [seleccion_contacto]);
  const saveUsuario = (e) => {
    e.preventDefault();
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
      if (seleccion_contacto != null) {
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
              // pasarlo al stateListarContactos();

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
      } else {
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
