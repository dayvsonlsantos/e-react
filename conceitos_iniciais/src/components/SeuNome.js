function SeuNome({ setNome }) {
  //const [nome, setNome] = useState()

  return (
    <div>
      <p>Digite o seu nome: </p>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Qual é o seu nome?"
        onChange={(e) => setNome(e.target.value)}
      />
    </div>
  );
}

export default SeuNome;
