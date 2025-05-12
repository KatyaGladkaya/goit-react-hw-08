import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import s from "../LoginForm/LoginForm.module.css";
import { login } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    try {
      const result = await dispatch(login(values));
      if (result.type === "auth/login/fulfilled") {
        navigate("/contacts");
      } else {
        console.error("Login failed:", result.payload);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      actions.resetForm();
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <label className={s.label}>
          Email
          <Field type="email" name="email" required className={s.input} />
        </label>
        <label className={s.label}>
          Password
          <Field type="password" name="password" required className={s.input} />
        </label>
        <button type="submit" className={s.button}>
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
