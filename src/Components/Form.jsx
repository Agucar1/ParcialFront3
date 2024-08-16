import React, { useState } from 'react';
import Button from './Button.jsx';
import Card from './Card.jsx';

const Form = () => {
        const [name, setName] = useState('');
        const [car, setCar] = useState('');
        const [error, setError] = useState('');
        const [showCard, setCard] = useState(false);

          const handleSubmit = (e) => {
            e.preventDefault();
        
        if (name.length < 3 || name.trim() !== name) {
            setError('Por favor chequea que la información sea correcta');
            setCard(false);
            return;
      }
  
        if (car.length < 6) {
            setError('Por favor chequea que la información sea correcta');
            setCard(false);
            return;
      }

      setError('');
      setCard(true);
    }
  return (
    <div>
    <form className='form' onSubmit={handleSubmit}>
      <label className='label'>Nombre: </label>
      <input className='input'
        type="text"
        value= {name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className='label'>Auto Favorito: </label>
      <input className='input'
        type="text"
        value={car}
        onChange={(e) => setCar(e.target.value)}
      />
       <Button/>
    </form>
    {error ? <p style={{ color: 'red' }}>{error}</p> : null}
    {showCard ? <Card name={name} car={car} /> : null}
  </div>
  )
}

export default Form
