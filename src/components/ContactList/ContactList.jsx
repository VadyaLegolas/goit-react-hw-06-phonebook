import { ContactElement } from 'components/ContactElemet/ContactElement';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filterContacts = useSelector(state => state.filter);
  const getVisibleContacts = () => {
    const normalizedFilter = filterContacts.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return <ContactElement key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
};
