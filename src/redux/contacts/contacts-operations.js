import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactApi from '../../api/contact-api.js';

export const fetchContacts = createAsyncThunk(
  '/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await contactApi.getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postContact = createAsyncThunk(
  '/addContacts',
  async (body, { rejectWithValue }) => {
    try {
      const data = await contactApi.postContacts(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: ({ name, number }, { getState }) => {
      const { contact } = getState();
      const normalizedName = name.toLowerCase();
      const normalizedNumber = number.toLowerCase();

      const duplicate = contact.items.find(item => {
        const normalizedCurrentName = item.name.toLowerCase();
        const normalizedCurrentNumber = item.number.toLowerCase();
        return (
          normalizedCurrentName === normalizedName ||
          normalizedCurrentNumber === normalizedNumber
        );
      });

      if (duplicate) {
        alert(
          `❕ You've already added ${name} or a number ${number} to your phonebook ❕`
        );
        return false;
      }

      return true;
    },
  }
);

export const removeContacts = createAsyncThunk(
  '/removeContacts',
  async (id, { rejectWithValue }) => {
    try {
      await contactApi.removeContacts(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
