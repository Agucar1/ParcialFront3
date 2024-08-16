import React from 'react'

const Card = ({ name, car }) => {
  return (
    <div className="card">
      <h2>Ahora sabemos {name} que tu auto favorito es un {car}</h2>
    </div>
  );
};

export default Card
