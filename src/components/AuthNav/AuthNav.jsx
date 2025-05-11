import { NavLink } from 'react-router-dom';
import s from "../AuthNav/AuthNav.module.css"

const AuthNav = () => {
  return (
    <nav className={s.nav} >
      <NavLink
        to="/register"
        className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}
      >
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;

