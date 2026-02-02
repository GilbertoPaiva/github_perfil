import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";
import "./App.css";

function App() {
  const [entradaUsuario, setEntradaUsuario] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [erro, setErro] = useState("");
  const [verificando, setVerificando] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const valor = entradaUsuario.trim();

    if (valor.length < 5) {
      setErro("Digite pelo menos 5 caracteres.");
      setNomeUsuario("");
      return;
    }

    setErro("");
    setVerificando(true);

    try {
      const response = await fetch(`https://api.github.com/users/${valor}`);

      if (!response.ok) {
        setNomeUsuario("");
        setErro("Perfil não encontrado. Verifique o nome e tente novamente.");
        return;
      }

      setNomeUsuario(valor);
    } catch (error) {
      setNomeUsuario("");
      setErro("Não foi possível buscar agora. Tente mais tarde.");
    } finally {
      setVerificando(false);
    }
  };

  return (
    <div className="app">
      <form className="user-form" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="usuario">Buscar perfil no GitHub</label>
        <div className="form-row">
          <input
            id="usuario"
            className="form-input"
            type="text"
            placeholder="Ex.: octocat"
            value={entradaUsuario}
            onChange={(e) => setEntradaUsuario(e.target.value)}
            disabled={verificando}
          />
          <button className="form-button" type="submit" disabled={verificando}>
            {verificando ? "Buscando..." : "Buscar"}
          </button>
        </div>
        <p className="form-helper">Digite o usuário e clique em buscar para carregar o perfil e repositórios.</p>
        {erro && <p className="form-error">{erro}</p>}
      </form>

      {nomeUsuario && !verificando && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario />
      )} */}

    </div>
  )
}


export default App
