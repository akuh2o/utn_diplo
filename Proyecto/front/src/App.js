import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import Contacto from "./pages/Contacto";
import Games from "./pages/Games";
import HomePage from "./pages/HomePage";
import Peliculas from "./pages/Peliculas";
import Software from "./pages/Software";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element = {<HomePage></HomePage>}></Route>
          <Route path="Games" element = {<Games></Games>}></Route>
          <Route path="Peliculas" element = {<Peliculas></Peliculas>}></Route>
          <Route path="Software" element = {<Software></Software>}></Route>
          <Route path="Contacto" element = {<Contacto></Contacto>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
