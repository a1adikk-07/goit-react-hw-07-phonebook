import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactsApi from '../../api/contact-api.js';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await contactsApi.getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postContact = createAsyncThunk(
  'contacts/addContact',
  async (body, { rejectWithValue }) => {
    try {
      const data = await contactsApi.postContacts(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    // condition: ({ name, number }, { getState }) => {
    //   const { contact } = getState();
    //   const normalizedName = name.toLowerCase();
    //   const normalizedNumber = number.toLowerCase();
    //   const duplicate = contact.items.find(item => {
    //     const normalizedCurrentName = item.name.toLowerCase();
    //     const normalizedCurrentNumber = item.number.toLowerCase();
    //     return (
    //       normalizedCurrentName === normalizedName ||
    //       normalizedCurrentNumber === normalizedNumber
    //     );
    //   });
    //   if (duplicate) {
    //     alert(
    //       `❕ You've already added ${name} or a number ${number} to your phonebook ❕`
    //     );
    //     return false;
    //   }
    // },
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContacts',
  async (id, { rejectWithValue }) => {
    try {
      await contactsApi.removeContacts(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
