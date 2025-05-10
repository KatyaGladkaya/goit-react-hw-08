import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const goitAPI = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

const setAuthHeader = token => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  goitAPI.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (body, thunkAPI) => {
    try {
      const res = await goitAPI.post('/users/signup', body);
      setAuthHeader(res.data.token);
      return res.data
    } catch (err) {
      console.log(err.response);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (body, thunkAPI) => {
    try {
      const res = await goitAPI.post('/users/login', body);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await goitAPI.post('/users/logout');
    clearAuthHeader();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token");
    }
    try {
      setAuthHeader(token);
      const res = await goitAPI.get('/users/current');
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export default goitAPI;