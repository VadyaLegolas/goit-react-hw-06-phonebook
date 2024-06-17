// import { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { useDispatch } from 'react-redux';
// import { addContact } from '../redux/actions/contactsAction';

// export function App() {
//   const dispatcher = useDispatch();
//   const [contacts, setContacts] = useState(() => {
//     const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));
//     if (localStorageContacts) {
//       return localStorageContacts;
//     }else {
//       return [];
//     }
//   });
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));

//     if (contacts.length === 0) localStorage.removeItem('contacts');
//   }, [contacts]);

  

//   const changeFilter = e => {
//     setFilter(e.currentTarget.value);
//   };

//   const getVisibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   const visibleContacts = getVisibleContacts();
//   return (
//     <>
//       <h1>Phonebook</h1>
//       <ContactForm onSubmit={dispatcher(addContact())} />
//       <h2>Contacts</h2>
//       <Filter value={filter} onChange={changeFilter} />
//       <ContactList contacts={visibleContacts} />
//       <ToastContainer />
//     </>
//   );
// }
export const App = () => {

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}