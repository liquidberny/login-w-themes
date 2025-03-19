import React from 'react';

import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div >
      <div   />
      <div >
        <h1>Error 404 - Página No Encontrada</h1>
        <p>
          La petición solicitada no fue encontrada dentro de nuestros servidores.
          Probablemente, la página que usted buscó no exista o ha sido movida.
        </p>
        <button onClick={() => navigate("/")}>Regresar a Inicio</button>
      </div>

    </div>
  );
}

export default NotFound;
