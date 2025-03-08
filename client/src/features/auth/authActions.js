import axios from 'axios';
import { startLoading, setUser, setError } from './authSlice';

export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await axios.post('/api/auth/login', credentials);
    dispatch(setUser(response.data));
  } catch (error) {
    dispatch(setError(error.response?.data?.message || 'Login failed'));
  }
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await axios.post('/api/auth/register', userData);
    dispatch(setUser(response.data));
  } catch (error) {
    dispatch(setError(error.response?.data?.message || 'Registration failed'));
  }
};