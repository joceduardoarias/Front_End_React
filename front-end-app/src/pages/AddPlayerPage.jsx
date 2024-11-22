// src/pages/AddPlayerPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPlayer } from '../api/api';

const AddPlayerPage = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [equipo, setEquipo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPlayer({ nombre, edad, equipo });
      navigate('/players');
    } catch (error) {
      console.error('Failed to add player:', error);
    }
  };

  return (
    <div>
      <h1>Agregar Jugador</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
        <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} placeholder="Edad" required />
        <input type="text" value={equipo} onChange={(e) => setEquipo(e.target.value)} placeholder="Equipo" required />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default AddPlayerPage;