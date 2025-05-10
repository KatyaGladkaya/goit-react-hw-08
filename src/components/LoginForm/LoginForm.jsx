import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
   await dispatch(login(values));
    actions.resetForm();
    if (result.type === 'auth/login/fulfilled') {
      navigate("/contacts");
    }
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label>
          Email
          <Field type="email" name="email" required />
        </label>
        <label>
          Password
          <Field type="password" name="password" required />
        </label>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
