import React, { useState } from "react";
import NavBar from "./components/navBar/NavBar";
import Menu from "./components/menu/Menu";
import Productos from "./components/productos/Productos";
import Foot from "./components/foot/Foot";
import Zapato from "./components/zapato/Zapato";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {

  const [ShowMenu, setShowMenu] = useState(false);

  return (
    <BrowserRouter>

      <NavBar setShowMenu={setShowMenu} />

      <Routes>


        <Route path="/" element={<Productos />} />

        <Route path="/zapato" element={<Zapato />} />


      </Routes>

      {
        ShowMenu && <Menu setShowMenu={setShowMenu} />
      }
      <Foot />

    </BrowserRouter>
  );
}

export default App;
