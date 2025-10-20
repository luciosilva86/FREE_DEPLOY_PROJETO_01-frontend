// Exemplo básico de inicialização React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Componente simples para teste
const App = () => {
  return (
    <div>
      <h1>Deploy Quase Completo!</h1>
      <p>O Render está rodando o código. Agora vamos para a segurança do Supabase.</p>
    </div>
  );
};

// Encontra a div 'root' no index.html e renderiza o componente
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
