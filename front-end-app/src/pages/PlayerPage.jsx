// src/pages/PlayerPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PlayerList from '../components/FootballPlayers/PlayerList';
import './PlayerPage.css';

const PlayerPage = () => {
  const navigate = useNavigate();

  const handleAddPlayer = () => {
    navigate('/add-player');
  };

  return (
    <div className="player-page">
      <h1 className="title">Football Players</h1>
      <button onClick={handleAddPlayer} className="add-player-button">Agregar Jugador</button>
      <PlayerList />
    </div>
  );
};

export default PlayerPage;