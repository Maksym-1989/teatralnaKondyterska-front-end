import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/auth-operation";
import { FormikInput } from "../../shared/FormikInput";
///////////////////////////////Formik, YUP /////////////////////////////////////////////////
import { Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./AuthForm.module.css";

const initialForm = { email: "", password: "" };

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Поле должно содержать  cимвол '@'")
    .required("Поле обязательное!"),
  password: Yup.string()
    .required("Поле обязательное!")
    .min(6, "Минимум 6 символов."),
});

const AuthForm = () => {
  const dispatch = useDispatch();
  const onLogin = (state) => dispatch(logIn(state));

  const handleSubmit = (values) => {
    onLogin(values);
  };

  return (
    <div className={css.wrapper}>
      <Formik
        initialValues={initialForm}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form className={css.login_form}>
          <div className={css.header}>
            <h1>Авторизация</h1>
            <span>
              Введите ваши регистрационные данные для входа в ваш личный
              кабинет.{" "}
            </span>
          </div>
          <div className={css.content}>
            <FormikInput
              label="Email"
              name="email"
              type="email"
              className={css.input}
            />
            <FormikInput
              label="Password"
              type="password"
              name="password"
              className={css.input}
            />
          </div>
          <div className={css.footer}>
            <button type="submit" className={css.button}>
              Войти
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AuthForm;
