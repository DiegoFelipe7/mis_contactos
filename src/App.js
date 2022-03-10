import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactosState from "./contex/ContactosState";
import Menu from "./Layout/Menu";
import NuevoContacto from "./contactos/NuevoContaco";
import ListadoContactos from "./contactos/ListadoContactos";
import ActualizarContacto from "./contactos/ActualizarContacto";
function App() {
  return (
    <>
      <ContactosState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu />}>
              <Route index element={<ListadoContactos />} />
              <Route path="/nuevo-contacto" element={<NuevoContacto />} />
              <Route
                path="/actualizar-contacto"
                element={<ActualizarContacto />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContactosState>
    </>
  );
}

export default App;
