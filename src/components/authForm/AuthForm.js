import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/auth-operation";
import { FormikInput } from "../../shared/FormikInput";
///////////////////////////////Formik, YUP /////////////////////////////////////////////////
import {  Form, Formik, } from "formik";
import * as Yup from "yup";

const initialForm = { email: "", password: "" };

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Поле должно содержать  cимвол '@'")
    .required("Поле обязательное!"),
  password: Yup.string()
    .required("Поле обязательное!")
    .min(3, "Must be exactly 3 digits")
    .max(10, "Must be exactly 10 digits"),
});



const AuthForm = () => {
  const dispatch = useDispatch();
  const onLogin = (state) => dispatch(logIn(state));

  const handleSubmit = (values) => {
    onLogin(values);
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={initialForm}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <FormikInput label="Email" name="email" type="email" />
          <FormikInput label="Password" type="password" name="password" />
          <button type="submit" className="btn">
            Войти
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AuthForm;
