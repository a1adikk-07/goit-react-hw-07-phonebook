import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  postContacts,
  removeContacts,
} from './contacts-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const pending = state => {
  state.isLoading = true;
  state.error = null;
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, pending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(postContacts.rejected, rejected)

      .addCase(postContacts.pending, pending)
      .addCase(postContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(postContacts.rejected, rejected)

      .addCase(removeContacts.pending, pending)
      .addCase(removeContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(removeContacts.rejected, rejected);
  },
});

export default contactsSlice.reducer;
