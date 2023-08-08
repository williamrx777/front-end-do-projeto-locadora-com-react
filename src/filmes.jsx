import { useEffect, useState } from 'react';
import axios from 'axios';

const Filmes = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/filmes')
      .then(response => {
        setFilmes(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar filmes:', error);
      });
  }, []);

  return (
    <section id="filmes">
      <h2>Filmes</h2>
      {filmes.map(filme => (
        <div className="item" key={filme.codigo}>
          <img width={650} src={filme.imagem} alt={filme.nome} />
          <h3>{filme.nome}</h3>
          <p>{filme.descricao}</p>
          <p>R$:{filme.preco}</p>
          <p>Disponível em DVD e Blu-ray.</p>
        </div>
      ))}
    </section>
  );
};

export default Filmes;
