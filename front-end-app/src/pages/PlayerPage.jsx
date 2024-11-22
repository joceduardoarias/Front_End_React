// src/pages/PlayerPage.jsx
import React from 'react';
import PlayerList from '../components/FootballPlayers/PlayerList';
import './PlayerPage.css';

const PlayerPage = () => {
  return (
    <div className="player-page">
      <h1 className="title">Football Players</h1>
      <PlayerList />
    </div>
  );
};

export default PlayerPage;