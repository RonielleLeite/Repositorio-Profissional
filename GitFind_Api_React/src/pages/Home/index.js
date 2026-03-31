// Importação do hook useState para gerenciar o estado do componente Home
import { useState } from "react";
// Importação do componente Header para ser utilizado na página Home
import { Header } from "../../components/Header";
// Importe da imagem de fundo para a página Home
import background from "../../assets/backgraund.png";
// Importação do componente ItemList para exibir a lista de repositórios
import ItemList from "../../components/ItemList";
// Importação do arquivo de estilos para a página Home
import "./styles.css";

// Função principal do componente Home, onde o Header é renderizado e a imagem de fundo é aplicada
function App() {
  // Estado para armazenar o nome de usuário digitado no input
  const [user, setUser] = useState("");
  // Estado para armazenar o nome de usuário atual
  const [currentUser, setCurrentUser] = useState(null);
  // Estado para armazenar os repositórios do usuário
  const [repos, setRepos] = useState(null);

  // Con
  const handleGetData = async () => {
    const useData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await useData.json();

    // Criar uma condição do newUser para pegar so informaçoa do "nome, foto e descrição" do perfil pesquisado.
    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login });

      const reposData = await fetch(
        `https://api.github.com/users/${user}/repos`,
      );
      const newRepos = await reposData.json();

      // Criar uma condiçao com array para pegar infomarção do Repos dentro da Api
      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  };

  // Função para buscar os repositórios do usuário digitado
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <div>
            <input
              name="usuario"
              value={user}
              onChange={(event) => setUser(event.target.value)}
              placeholder="@username"
            />
            <button onClick={handleGetData}>Buscar</button>
            {currentUser?.name ? (
              <>
                <div className="perfil">
                  <img
                    src={currentUser.avatar_url}
                    className="profile"
                    alt="Foto de Perfil"
                  />
                  <div className="descricao">
                    <h3>{currentUser.name}</h3>
                    <span>@{currentUser.login}</span>
                    <p>{currentUser.bio}</p>
                  </div>
                </div>
              </>
            ) : null}
          </div>
          <hr />
          {repos?.length ? (
          <div>
            <h4 className="repositorio">Repositórios</h4>
            <hr /> {/* Separador */}
            {repos.map(repo => (
            <ItemList
              title={repo.name}
              description={repo.description}
            />))}
          </div>): null}
        </div>
      </div>
    </div>
  );
}

export default App;
