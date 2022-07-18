import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  
  const name = 'Dayvson'
  const newName = name.toUpperCase()
  
  function sum(a, b){
    return a + b
  }

  const url = 'https://avatars.githubusercontent.com/u/102249811?v=4'

  return (
  <main className="App">
    <h2>Alterando o JSX</h2>
    <p>Olá, {newName}</p>
    <p>Soma: {sum(1,2)}</p>
    <img src={url} alt="Meu Perfil"/>
    <HelloWorld/>
  </main>
  );
}

export default App;
