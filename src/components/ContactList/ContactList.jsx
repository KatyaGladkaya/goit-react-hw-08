import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contacts/slice';
import s from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
