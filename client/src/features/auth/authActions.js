import axios from 'axios';
import { startLoading, setUser, setError } from './authSlice';

export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await axios.post('/api/auth/signin', credentials);
    dispatch(setUser(response.data));
    return { success: true, data: response.data };

  } catch (error) {
    //console.log(error);
    const errorMessage = error.response?.data?.message || 'Login failed';
    dispatch(setError(errorMessage));

    return { success: false, error: errorMessage };
  }
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await axios.post('/api/auth/register', userData);
    dispatch(setUser(response.data));

    return { success: true, data: response.data }; 
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Registration failed';
    dispatch(setError(errorMessage));

    return { success: false, error: errorMessage }; 
  }
};
