import React from 'react'

const Card = ({ name, car }) => {
  return (
    <div className="card">
      <h2>Hola {name}!</h2>
      <h2>Ahora sabemos que tu auto favorito es un: </h2>
      <h2>!{car}!🚗</h2>
    </div>
  );
};

export default Card
