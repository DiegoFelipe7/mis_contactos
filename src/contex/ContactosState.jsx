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
  //valores iniciales utilizados para el use dispatchs
  const initialState = {
    contactos: [],
    seleccion_contacto: null,
  };
  //Listar contactactor realizamos una peticion get por medio de axios
  //y tramos todos los usuario registrado en la basde de datos de heidisql
  const ListarContactos = async () => {
    try {
      const contactos = await clienteAxios.get("/contactos");
      //utlizamos el dispa para enviar el typo y el valor del payload los cuales van a se tratados por
      //medio de casos en el contactos reducer
      dispatch({
        type: OBTENER_CONTACTOS,
        payload: contactos.data,
      });
    } catch (error) {
      console.log(`ocurrio un error ${error}`);
    }
  };
  //Realiasmos un post para enviar nuevos contactos a la bd
  const AgregarContacto = async (contacto) => {
    try {
      const respuesta = await clienteAxios.post("/contactos", contacto);
      //utlizamos el dispa para enviar el typo y el valor del payload los cuales van a se tratados por
      //medio de casos en el contactos reducer
      dispatch({
        type: AGREGARCONTACTOS,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //eLIMINAR UN USARIO POR MEDIO DEL ID
  const EliminarContacto = async (id) => {
    try {
      const respuesta = await clienteAxios.delete(`contactos/${id}`);
      dispatch({
        type: ELIMINARCONTACTOS,
        payload: respuesta,
      });
    } catch (error) {}
  };
  //ACTUALIZAR CONTACTO SE RECIBE UN CONTACTO
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
  //Seleccion del proyecto a editar
  const SeleccionarContacto = (contacto) => {
    dispatch({
      type: SELECCIONARCONTACTO,
      payload: contacto,
    });
  };
  //cancelar la actualizacion para liimpiar el proyecto seleccionado
  const CancelarActualizacion = () => {
    dispatch({
      type: CANCELAR_ACTUALIZACION,
      payload: null,
    });
  };
  //eliminado logico para cambiar el estado de un contacto
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
