// src/api/api.js
const API_URL = 'http://localhost:5000/api';

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

export const register = (userData) => request(`${API_URL}/register`, {
  method: 'POST',
  body: JSON.stringify(userData)
});

export const login = (userData) => request(`${API_URL}/login`, {
  method: 'POST',
  body: JSON.stringify(userData)
});

export const logout = () => request(`${API_URL}/logout`, {
  method: 'POST'
});

export const getAllPlayers = () => request(`${API_URL}/footballplayers`);

export const getPlayerById = (id) => request(`${API_URL}/footballplayers/${id}`);

export const createPlayer = (playerData) => request(`${API_URL}/footballplayers`, {
  method: 'POST',
  body: JSON.stringify(playerData)
});

export const updatePlayer = (id, playerData) => request(`${API_URL}/footballplayers/update/${id}`, {
  method: 'PUT',
  body: JSON.stringify(playerData)
});

export const deletePlayer = (id) => request(`${API_URL}/footballplayers/delete/${id}`, {
  method: 'DELETE'
});