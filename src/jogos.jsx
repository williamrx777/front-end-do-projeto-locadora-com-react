import  { useEffect, useState } from 'react';
import axios from 'axios';

const Jogos = () => {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/jogos')
      .then(response => {
        setJogos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar jogos:', error);
      });
  }, []);

  return (
    <section id="jogos">
      <h2>Jogos</h2>
      {jogos.map(jogo => (
        <div className="item" key={jogo.codigo}>
          <img width={650} src={jogo.imagem} alt={jogo.nome} />
          <h3>{jogo.nome}</h3>
          <p>{jogo.descricao}</p>
          <p>R$:{jogo.preco}</p>
          <p>Disponível para {jogo.console}.</p>
        </div>
      ))}
    </section>
  );
};

export default Jogos;
