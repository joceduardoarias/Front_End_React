// src/pages/EditPlayerPage.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updatePlayer } from '../api/api';

const EditPlayerPage = () => {
  const { state } = useLocation();
  const { player } = state;
  const [nombre, setNombre] = useState(player.nombre);
  const [edad, setEdad] = useState(player.edad);
  const [equipo, setEquipo] = useState(player.equipo);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePlayer(player._id, { nombre, edad, equipo });
      navigate('/players');
    } catch (error) {
      console.error('Failed to update player:', error);
    }
  };

  return (
    <div>
      <h1>Editar Jugador</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
        <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} placeholder="Edad" />
        <input type="text" value={equipo} onChange={(e) => setEquipo(e.target.value)} placeholder="Equipo" />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default EditPlayerPage;