import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { selectContacts } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { logout } from '../../redux/auth/operations';
import s from "../UserMenu/UserMenu.module.css"

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const contacts = useSelector(selectContacts);

  return (
    <div className={s.container}>
      <p className={s.welcome}>Welcome, {user.name} </p>
      <button onClick={() => dispatch(logout())} className={s.button}>Logout</button>
    </div>
  );
};

export default UserMenu;
