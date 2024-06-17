import { toast } from "react-toastify";

const initialState = []
export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      const normalizeName = action.payload.name.toLowerCase();

    if (state.find(({ name }) => name.toLowerCase() === normalizeName)) {
      toast.error(`${action.payload.name} is already in contacts`, {
        position: 'top-center',
        autoClose: 3000,
        theme: 'colored',
      });
    return state;
    }
      return [...state, action.payload]

    case "DELETE_CONTACT":
      return state.filter(contact => {
          return contact.id !== action.payload.id
        })
    
  
    default:
      return state;
  }
  
};