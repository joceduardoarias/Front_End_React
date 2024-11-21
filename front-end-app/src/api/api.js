// src/api/api.js
import config from '../config';

const request = async (url, options = {}) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      ...options.headers
    }
  });
  return response.json();
};

export const register = (userData) => request(`${config.API_URL}/register`, {
  method: 'POST',
  body: JSON.stringify(userData)
});

export const login = (userData) => request(`${config.API_URL}/login`, {
  method: 'POST',
  body: JSON.stringify(userData)
});

export const logout = () => request(`${config.API_URL}/logout`, {
  method: 'POST'
});

export const getAllPlayers = () => request(`${config.API_URL}/footballplayers`);

export const getPlayerById = (id) => request(`${config.API_URL}/footballplayers/${id}`);

export const createPlayer = (playerData) => request(`${config.API_URL}/footballplayers`, {
  method: 'POST',
  body: JSON.stringify(playerData)
});

export const updatePlayer = (id, playerData) => request(`${config.API_URL}/footballplayers/update/${id}`, {
  method: 'PUT',
  body: JSON.stringify(playerData)
});

export const deletePlayer = (id) => request(`${config.API_URL}/footballplayers/delete/${id}`, {
  method: 'DELETE'
});