// src/components/FootballPlayers/PlayerList.jsx
import React, { useEffect, useState } from 'react';
import { getAllPlayers, deletePlayer } from '../../api/api';
import PlayerCard from './PlayerCard';
import { useNavigate } from 'react-router-dom';
import './PlayerList.css';

const PlayerList = () => {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

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

  const handleEdit = (player) => {
    navigate(`/edit-player/${player._id}`, { state: { player } });
  };

  const handleDelete = async (playerId) => {
    try {
      await deletePlayer(playerId);
      setPlayers(players.filter(player => player._id !== playerId));
    } catch (error) {
      console.error('Failed to delete player:', error);
    }
  };

  return (
    <div>
      <div className="player-list">
        {players.map((player) => (
          <PlayerCard key={player._id} player={player} onEdit={handleEdit} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default PlayerList;