import { nanoid } from 'nanoid';

export const addContact = data => {
  return {
    type: 'ADD_CONTACT',
    payload: { ...data, id: nanoid() },
  };
};

export const deleteContact = id => {
  return {
    type: 'DELETE_CONTACT',
    payload: {id},
  };
}