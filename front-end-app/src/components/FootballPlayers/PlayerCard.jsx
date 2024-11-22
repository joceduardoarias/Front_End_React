// src/components/FootballPlayers/PlayerCard.jsx
import React from 'react';
import './PlayerCard.css';

const PlayerCard = ({ player, onEdit, onDelete }) => {
  return (
    <div className="player-card">
      <h2>{player.nombre}</h2>
      <p>Edad: {player.edad}</p>
      <p>Equipo: {player.equipo}</p>
      <button onClick={() => onEdit(player)}>Editar</button>
      <button onClick={() => onDelete(player._id)}>Eliminar</button>
    </div>
  );
};

export default PlayerCard;