import { toast } from 'react-toastify';

import { createReducer } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';
import { addContact, deleteContact } from './contactsAction';

export const contactsReducer = createReducer(contactsInitialState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      const normalizeName = action.payload.name.toLowerCase();

      if (state.find(({ name }) => name.toLowerCase() === normalizeName)) {
        toast.error(`${action.payload.name} is already in contacts`, {
          position: 'top-center',
          autoClose: 3000,
          theme: 'colored',
        });
        return state;
      }
      return [...state, action.payload];
    })
    .addCase(deleteContact, (state, action) => {
      return state.filter(contact => {
        return contact.id !== action.payload.id;
      });
    });
});
