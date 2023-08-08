import { useState } from 'react';
import axios from 'axios';

const Cadastro = () => {
  const [formValues, setFormValues] = useState({
    nome: '',
    descricao: '',
    data: '',
    preco: '',
    genero: '',
    imagem: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Faça a requisição para cadastrar o filme/jogo no backend
    axios.post('http://localhost:8080/filmes', formValues)
      .then(response => {
        console.log('Filme/jogo cadastrado com sucesso:', response.data);
        // Limpar o formulário após o cadastro
        setFormValues({
          nome: '',
          descricao: '',
          data: '',
          preco: '',
          genero: '',
          imagem: '',
        });
      })
      .catch(error => {
        console.error('Erro ao cadastrar filme/jogo:', error);
      });
  };

  return (
    <div>
      <h2>Cadastrar Novo Filme</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="nome" value={formValues.nome} onChange={handleChange} />
        </label>
        <label>
          Descrição:
          <textarea name="descricao" value={formValues.descricao} onChange={handleChange} />
        </label>
        <label>
          Data de Lançamento:
          <input type="date" name="data" value={formValues.data} onChange={handleChange} />
        </label>
        <label>
          Preço:
          <input type="number" step="0.01" name="preco" value={formValues.preco} onChange={handleChange} />
        </label>
        <label>
          Gênero:
          <input type="text" name="genero" value={formValues.genero} onChange={handleChange} />
        </label>
        <label>
          Imagem (URL):
          <input type="text" name="imagem" value={formValues.imagem} onChange={handleChange} />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
