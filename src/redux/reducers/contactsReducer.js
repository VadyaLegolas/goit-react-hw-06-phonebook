const initialState = []
export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload]

    case "DELETE_CONTACT":
      return state.filter(contact => {
          return contact.id !== action.payload.id
        })
    
  
    default:
      return state;
  }
  
};