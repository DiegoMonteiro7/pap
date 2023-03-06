import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Sobre from "./Sobre";
import Avaliacao from "./Avaliacao";
import Suporte from "./Suporte";
import Baixar from "./Baixar";
import Entrar from "./Login";
import Registar from "./Registar";

import Navbar from "../components/navbar";
import Container from "../components/Container/container";
import Footer from "../components/footer";

import "./styles.css";

function App() {
  return (
    <>
      <Navbar />
      <Container customClass="minHeight">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/Sobre" element={<Sobre />}></Route>
          <Route path="/Avaliacao" element={<Avaliacao />}></Route>
          <Route path="/Suporte" element={<Suporte />}></Route>
          <Route path="/Baixar" element={<Baixar />}></Route>
          <Route path="/Login" element={<Entrar />}></Route>
          <Route path="/Registar" element={<Registar />}></Route>
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;       