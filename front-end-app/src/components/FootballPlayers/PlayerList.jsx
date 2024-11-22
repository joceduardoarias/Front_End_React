// src/components/FootballPlayers/PlayerList.jsx
import React, { useEffect, useState } from 'react';
import { getAllPlayers } from '../../api/api';
import PlayerCard from './PlayerCard';
import './PlayerList.css';

const PlayerList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const data = await getAllPlayers();
        setPlayers(data);
      } catch (error) {
        console.error('Failed to fetch players:', error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div>      
      <div className="player-list">
        {players.map((player) => (
          <PlayerCard key={player._id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default PlayerList;