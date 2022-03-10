import Formulario from "../components/Formulario";
const ActualizarContacto = () => {
  return (
    <>
      <div className="mb-5">
        <h2 className="fw-bold">Actualizar Contacto</h2>
        <p>
          Llena los siguientes campos para realizar la actualizacion de tu
          contacto
        </p>
      </div>
      <Formulario tipo={"Actualizar"} />
    </>
  );
};
export default ActualizarContacto;
