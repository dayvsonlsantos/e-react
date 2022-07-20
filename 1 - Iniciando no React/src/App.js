import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {

  const name = 'Dayvson'
  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://avatars.githubusercontent.com/u/102249811?v=4'
  const desc = "Foto Perfil"

  return (
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
      <List/>
    </main>
  );
}

export default App;
