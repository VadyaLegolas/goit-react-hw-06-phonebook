import { ContactElement } from 'components/ContactElemet/ContactElement';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactElement
            key={id}
            id={id}
            name={name}
            number={number}
          />
        );
      })}
    </List>
  );
};
