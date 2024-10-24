import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Produtos</h1>
      <div className="container">
      <div className="produto">
        <img
          className="img"
          src="https://churrasco.coz.br/wp-content/uploads/2021/01/hamburguer-na-churrasqueira.jpg"
          alt=""
        />
        <p className="nome">hamburguer</p>
        <p className="preco">29,50</p>
      </div>

      <div className="produto">
        <img
          className="img"
          src="https://churrasco.coz.br/wp-content/uploads/2021/01/hamburguer-na-churrasqueira.jpg"
          alt=""
        />
        <p className="nome">hamburguer</p>
        <p className="preco">29,50</p>
      </div>

      <div className="produto">
        <img
          className="img"
          src="https://churrasco.coz.br/wp-content/uploads/2021/01/hamburguer-na-churrasqueira.jpg"
          alt=""
        />
        <p className="nome">hamburguer</p>
        <p className="preco">29,50</p>
      </div>
      </div>
    </div>
  );
}

export default App;
