import { Link } from 'react-router-dom';

import './styles.css';

import history from '../../services/history';

function Page404() {
  function handleClick() {
    history.push('/');
  }

  return (
    <div className="container">
      <h1>
        Desculpe! <br />
        <br /> Clique no botão abaixo para voltar
      </h1>
      <Link to="/" className="textbtn">
        <button className="btnVoltar" onClick={handleClick}>
          Voltar
        </button>
      </Link>
    </div>
  );
}

export default Page404;
