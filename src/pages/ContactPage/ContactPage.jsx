import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import css from './ContactPage.module.css';
import {selectContactsLoading} from "../../redux/contacts/selectors"

// const ContactsPage = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className={css.container}>
//       <h1>Your Contacts</h1>
//       <ContactForm />
//       <SearchBox />
//       <ContactList />
//     </div>
//   );
// };

// export default ContactsPage;

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Your Contacts</title>
      <ContactForm />
//       <SearchBox />
//       <ContactList />
    </>
  );
}
