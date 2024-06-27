import { createSlice, nanoid } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';
import { toast } from 'react-toastify';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        const normalizeName = action.payload.name.toLowerCase();

        if (state.find(({ name }) => name.toLowerCase() === normalizeName)) {
          toast.error(`"${action.payload.name}" is already in contacts`, {
            position: 'top-center',
            autoClose: 3000,
            theme: 'colored',
          });
          return;
        }

        state.push(action.payload);
      },
      
      prepare: data => {
        const id = nanoid();
        return { payload: { id, ...data } };
      },
    },

    deleteContact: {
      reducer: (state, action) => {
        return state.filter(contact => contact.id !== action.payload.id);
      },
      prepare: id => ({ payload: { id } }),
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;
