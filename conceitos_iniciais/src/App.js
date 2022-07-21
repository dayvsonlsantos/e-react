import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import List from "./components/List";
import Eventos from "./components/Eventos";
import Form from "./components/Form";
import Condicional from "./components/Condicional";
import OutraLista from "./components/OutraLista";
import { useState } from "react";
import SeuNome from "./components/SeuNome";
import Saudacao from "./components/Saudacao";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Empresa from "./components/pages/Empresa";
import Contato from "./components/pages/Contato";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  const name = "Dayvson";
  const newName = name.toUpperCase();

  function sum(a, b) {
    return a + b;
  }

  const url = "https://avatars.githubusercontent.com/u/102249811?v=4";
  const desc = "Foto Perfil";

  const meusItens = ["React", "Vue", "Angular"];

  const [nome, setNome] = useState();

  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <main className="App">
        <h2>Alterando o JSX</h2>
        <p>Olá, {newName}</p>
        <p>Soma: {sum(1, 2)}</p>
        <img src={url} alt="Meu Perfil" />
        <HelloWorld />
        <SayMyName nome="Pedro" />
        <SayMyName nome="João" />
        <SayMyName nome={newName} />
        <Pessoa foto={url} desc={desc} />
        <List />
        <Eventos />
        <Form />
        <br />
        <h2>Renderização Condicional</h2>
        <Condicional />
        <br />
        <h2>Renderização de Listas</h2>
        <OutraLista itens={meusItens} />
        <OutraLista itens={[]} />
        <br />
        <h2>State Lift</h2>
        <SeuNome setNome={setNome} />
        {nome}
        <Saudacao nome={nome} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
