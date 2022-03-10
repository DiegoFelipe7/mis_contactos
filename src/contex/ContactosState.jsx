import ContactosContex from "./ContactosContex";
import ContactosReduce from "./ContactosReduce";
import {
  OBTENER_CONTACTOS,
  AGREGARCONTACTOS,
  ELIMINARCONTACTOS,
  SELECCIONARCONTACTO,
  ACTUALIZARCONTACTOS,
  CANCELAR_ACTUALIZACION,
} from "../types";
import clienteAxios from "../config/axios";
import { useReducer } from "react";
const ContactosState = (props) => {
  const initialState = {
    contactos: [],
    seleccion_contacto: null,
  };

  const ListarContactos = async () => {
    try {
      const contactos = await clienteAxios.get("/contactos");

      dispatch({
        type: OBTENER_CONTACTOS,
        payload: contactos.data,
      });
    } catch (error) {
      console.log(`ocurrio un error ${error}`);
    }
  };

  const AgregarContacto = async (contacto) => {
    try {
      const respuesta = await clienteAxios.post("/contactos", contacto);
      dispatch({
        type: AGREGARCONTACTOS,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const EliminarContacto = async (id) => {
    try {
      const respuesta = await clienteAxios.delete(`contactos/${id}`);
      dispatch({
        type: ELIMINARCONTACTOS,
        payload: respuesta,
      });
    } catch (error) {}
  };
  const ActualizarContactos = async (contacto) => {
    try {
      const respuesta = await clienteAxios.put(
        `contactos/${contacto.id}`,
        contacto
      );
      dispatch({
        type: ACTUALIZARCONTACTOS,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const SeleccionarContacto = (contacto) => {
    dispatch({
      type: SELECCIONARCONTACTO,
      payload: contacto,
    });
  };
  const CancelarActualizacion = () => {
    dispatch({
      type: CANCELAR_ACTUALIZACION,
      payload: null,
    });
  };
  const EliminadoLogico = async (contacto) => {
    contacto.status = "0";
    try {
      await clienteAxios.patch(`/contactos/status/${contacto.id}`, contacto);
    } catch (error) {
      console.log(error);
    }
  };

  const ActualizarNombre = async (contacto) => {
    try {
      await clienteAxios.patch(`/contactos/nombre/${contacto.id}`, contacto);
    } catch (error) {
      console.log(error);
    }
  };
  const ActualizarTelefono = async (contacto) => {
    try {
      await clienteAxios.patch(`/contactos/telefono/${contacto.id}`, contacto);
    } catch (error) {
      console.log(error);
    }
  };
  const ActualizarCorreo = async (contacto) => {
    try {
      await clienteAxios.patch(`/contactos/correo/${contacto.id}`, contacto);
    } catch (error) {
      console.log(error);
    }
  };
  const ActualizarFecha = async (contacto) => {
    try {
      await clienteAxios.patch(`/contactos/fecha/${contacto.id}`, contacto);
    } catch (error) {
      console.log(error);
    }
  };

  const [state, dispatch] = useReducer(ContactosReduce, initialState);
  return (
    <ContactosContex.Provider
      value={{
        contactos: state.contactos,
        seleccion_contacto: state.seleccion_contacto,
        ListarContactos,
        AgregarContacto,
        EliminarContacto,
        ActualizarContactos,
        SeleccionarContacto,
        CancelarActualizacion,
        EliminadoLogico,
        ActualizarNombre,
        ActualizarTelefono,
        ActualizarCorreo,
        ActualizarFecha,
      }}
    >
      {props.children}
    </ContactosContex.Provider>
  );
};

export default ContactosState;
