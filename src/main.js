import React from 'react';
import ReactDOM from 'react-dom/client';
// Correção CRÍTICA: O nome do componente E a extensão do arquivo
import Aplicativo from './Aplicativo.jsx'; 
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Aplicativo /> // O nome do componente (Aplicativo) deve ser usado aqui também
  </React.StrictMode>,
);
