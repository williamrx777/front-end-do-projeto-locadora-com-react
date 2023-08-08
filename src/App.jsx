import Filmes from '/src/filmes.jsx';
import Jogos from '/src/jogos';
import Cadastro from './cadastro';
import JogoCadastro from './jcadastro';
const App = () => {
  return (
    <div>
      <header>
        <h1>Locadora XYZ</h1>
        <nav>
          <ul>
            <li><a href="#filmes">Filmes</a></li>
            <li><a href="#jogos">Jogos</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <Filmes />
        <Jogos />
        <Cadastro /> {/* Adicione o componente Cadastro aqui */}
        <JogoCadastro/>
      </main>

      <footer>
        <p>© 2023 Locadora XYZ. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
