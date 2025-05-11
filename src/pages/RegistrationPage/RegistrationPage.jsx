import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import s from "./RegistrationPage.module.css"

const RegistrationPage = () => {
  return (
    <div className={s.container}>
      <h1>Registration</h1>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;