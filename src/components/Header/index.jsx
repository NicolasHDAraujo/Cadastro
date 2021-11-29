import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <span>Logotipo</span>
        </div>
        <div className="navbar">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/adefinir">
            <button>Novo Aluno</button>
          </Link>
          <Link to="/login">
            <button>Logout</button>
          </Link>
        </div>
      </div>
      <div className="title">Bem Vindo</div>
      <div className="subtitle">
        <span>Aqui estão os alunos cadastrados em nosso sistema</span>
      </div>
    </>
  );
}

export default Header;
