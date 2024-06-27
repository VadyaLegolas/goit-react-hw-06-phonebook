import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('ADD_CONTACT', data => ({payload: { ...data, id: nanoid() }}));
export const deleteContact = createAction('DELETE_CONTACT', id => ({payload: {id}}))