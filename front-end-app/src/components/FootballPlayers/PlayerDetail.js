// src/components/FootballPlayers/PlayerDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PlayerDetail = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/footballplayers/${id}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await response.json();
        setPlayer(data);
      } catch (error) {
        console.error('Failed to fetch player:', error);
      }
    };

    fetchPlayer();
  }, [id]);

  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{player.name}</h1>
      <p>Position: {player.position}</p>
      <p>Team: {player.team}</p>
      {/* Add more player details as needed */}
    </div>
  );
};

export default PlayerDetail;