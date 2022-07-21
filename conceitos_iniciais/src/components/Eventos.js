import Button from "./evento/Button";

function Eventos() {
  function meuEvento() {
    console.log("Opa, fui ativado!");
  }
  function meuEvento2() {
    console.log("Ativando primeiro evento");
  }
  function meuEvento3() {
    console.log("Ativando segundo evento");
  }
  return (
    <div>
      <p>Clique para disparar um evento.</p>
      <Button event={meuEvento2} text="Primeiro Evento" />
      <Button event={meuEvento3} text="Segundo Evento" />
      <button onClick={meuEvento}>Ativar!</button>
    </div>
  );
}

export default Eventos;
