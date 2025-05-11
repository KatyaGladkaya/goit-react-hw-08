import { NavLink } from 'react-router-dom';
import s from "../Navigation/Navigation.module.css"

const Navigation = () => {
  return (
    <nav className={s.nav} >
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;