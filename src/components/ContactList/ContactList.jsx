import { ContactElement } from 'components/ContactElemet/ContactElement';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filterContacts = useSelector(state => state.filter);
  const getVisibleContacts = () => {
    const normalizedFilter = filterContacts.toLowerCase();
    if (!normalizedFilter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts.length > 0 ? (
        visibleContacts.map(({ id, name, number }) => (
          <ContactElement key={id} id={id} name={name} number={number} />
        ))
      ) : (
        <p>No contacts found.</p>
      )}
    </List>
  );
};
