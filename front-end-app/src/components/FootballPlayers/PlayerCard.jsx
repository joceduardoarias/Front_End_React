// src/components/FootballPlayers/PlayerCard.jsx
import React from 'react';
import './PlayerCard.css';

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <h2>{player.nombre}</h2>
      <p>Edad: {player.edad}</p>
      <p>Equipo: {player.equipo}</p>
    </div>
  );
};

export default PlayerCard;

