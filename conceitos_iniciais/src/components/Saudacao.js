function Saudacao({ nome }) {
  function gerarSaudacao(algumnome) {
    return `Olá, ${algumnome}, tudo bem?`;
  }

  return (
    <>
      <p>O nome digitado foi: {nome}</p>
      {nome && <p>{gerarSaudacao(nome)}</p>}
    </>
  );
}

export default Saudacao;
