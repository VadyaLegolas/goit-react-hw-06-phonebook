import { contactsReducer } from './contacts/contactsReducer';
import { filterReducer } from './filter/filterReducer';

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer
};
