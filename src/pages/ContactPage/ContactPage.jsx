import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import s from '../ContactPage/ContactPage.module.css';
import {selectContactsLoading} from "../../redux/contacts/selectors"

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
   <SearchBox />
      <ContactList />
    </>
  );
}
