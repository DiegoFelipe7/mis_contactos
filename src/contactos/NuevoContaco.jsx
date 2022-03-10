import Formulario from "../components/Formulario";
const NuevoContacto = () => {
  return (
    <>
      <div className="mb-5">
        <h2 className="fw-bold">Nuevo Contacto</h2>
        <p>
          Llena los siguientes campos para realizar el registro de un contacto
        </p>
      </div>
      <Formulario tipo={"Guardar"} />
    </>
  );
};

export default NuevoContacto;
