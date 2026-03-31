//O código abaixo importa as bibliotecas React e ReactDOM, bem como o componente App. 
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles.css";
import App from './pages/Home';

/*Em seguida, ele cria uma raiz para a aplicação usando ReactDOM.createRoot e renderiza o componente 
  App dentro do elemento com o id 'root' no HTML. 
  O React.StrictMode é usado para destacar problemas potenciais na aplicação durante o desenvolvimento.*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
