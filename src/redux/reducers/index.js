import { combineReducers } from 'redux';
import { contactsReducer } from './contactsReducer';
import { filterReducer } from './filterReducer';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer
});
