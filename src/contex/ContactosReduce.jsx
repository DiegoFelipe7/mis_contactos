import {
  OBTENER_CONTACTOS,
  AGREGARCONTACTOS,
  ACTUALIZARCONTACTOS,
  CANCELAR_ACTUALIZACION,
  ELIMINARCONTACTOS,
  SELECCIONARCONTACTO,
} from "../types";
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case OBTENER_CONTACTOS:
      return {
        ...state,
        contactos: action.payload.filter((contacto) => contacto.status === "1"),
      };

    case AGREGARCONTACTOS:
      return { ...state, contactos: [...state.contactos, action.payload] };
    case ACTUALIZARCONTACTOS:
      return {
        ...state,
        contactos: state.contactos.map((contacto) =>
          contacto.id === action.payload.id ? action.payload : contacto
        ),
        seleccion_contacto: null,
      };

    case ELIMINARCONTACTOS:
      return {
        ...state,
        contactos: state.contactos.filter(
          (contacto) => contacto.id !== action.payload.id
        ),
      };
    case SELECCIONARCONTACTO:
      return { ...state, seleccion_contacto: action.payload };
    case CANCELAR_ACTUALIZACION:
      return { ...state, seleccion_contacto: action.payload };
    default:
      return state;
  }
};
