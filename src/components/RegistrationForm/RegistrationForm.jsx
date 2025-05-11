import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import s from './RegistrationForm.module.css';
import { register } from '../../redux/auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <label className={s.label}>
          Name
          <Field type="text" name="name" required className={s.input}/>
        </label>
        <label className={s.label}>
          Email
          <Field type="email" name="email" required className={s.input}/>
        </label>
        <label className={s.label}>
          Password
          <Field type="password" name="password" required className={s.input}/>
        </label>
        <button type="submit" className={s.button}>Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;