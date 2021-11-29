import { Route, Navigate } from 'react-router-dom';

function MyRoute({ element: Element, isClosed = false, ...rest }) {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return (
      //se a rota for fechada e usuário não logado, redireciona, quando fizer login o prev redireciona a pag que o usuário queria acessar
      <Navigate
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  return <Route {...rest} element={Element} />;
}

export default MyRoute;
