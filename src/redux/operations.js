import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const errorHandler = (error, thunkAPI) =>
  thunkAPI.rejectWithValue(error.message);

axios.defaults.baseURL =
  'https://65db43603ea883a152916b07.mockapi.io/contacts/';
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    return errorHandler(error);
  }
});

export const postContact = createAsyncThunk(
  'contacts/postContact',
  async ({ name, phone }) => {
    try {
      const { data } = await axios.post('contacts', { name, phone });
      return data;
    } catch (error) {
      return errorHandler(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      const { data } = await axios.delete(`contacts/${contactId}`);
      return data;
    } catch (error) {
      return errorHandler(error);
    }
  }
);
