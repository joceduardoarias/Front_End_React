// src/components/FootballPlayers/PlayerForm.js
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const PlayerForm = ({ isEdit }) => {
  const { id } = useParams();
  const history = useHistory();
  const [player, setPlayer] = useState({ name: '', position: '', team: '' });

  useEffect(() => {
    if (isEdit) {
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
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayer((prevPlayer) => ({ ...prevPlayer, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = isEdit ? 'PUT' : 'POST';
      const url = isEdit
        ? `http://localhost:5000/api/footballplayers/update/${id}`
        : 'http://localhost:5000/api/footballplayers';
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(player)
      });
      if (response.ok) {
        history.push('/players');
      } else {
        console.error('Failed to save player');
      }
    } catch (error) {
      console.error('Failed to save player:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={player.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="position"
        value={player.position}
        onChange={handleChange}
        placeholder="Position"
      />
      <input
        type="text"
        name="team"
        value={player.team}
        onChange={handleChange}
        placeholder="Team"
      />
      <button type="submit">{isEdit ? 'Update' : 'Create'} Player</button>
    </form>
  );
};

export default PlayerForm;