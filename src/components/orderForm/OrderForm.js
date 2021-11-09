import { FormikInput, FormikTextarea } from "../../shared/FormikInput";
import { useDispatch } from "react-redux";
import { addOrder } from "../../redux/orders/orders-operations";
///////////////////////////////Formik, YUP /////////////////////////////////////////////////
import { Form, Formik } from "formik";
import * as Yup from "yup";

const initialForm = {
  name: "",
  phone: "",
  weight: "",
  price: "",
  prepayment: "",
  filling: "",
  description: "",
};

const phoneRegExp = /^(?:\+38)?(0\d{9})$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Поле обязательное!"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  weight: Yup.number().required("Поле обязательное!"),
  price: Yup.number().required("Поле обязательное!"),
  prepayment: Yup.number().required("Поле обязательное!"),
});

const OrderForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(addOrder(values));
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={initialForm}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
        enableReinitialize={true}
      >
        <Form>
          <FormikInput label="Имя" name="name" type="text" autoComplete="off" />
          <FormikInput
            label="Номер телефона"
            name="phone"
            type="tel"
            autoComplete="off"
            placeholder="+380990000000"
          />
          <FormikInput
            label="Вес изделия"
            name="weight"
            type="number"
            autoComplete="off"
            placeholder="кг"
          />
          <FormikInput
            label="Цена"
            name="price"
            type="number"
            autoComplete="off"
            placeholder="грн"
          />
          <FormikInput
            label="Предоплата"
            name="prepayment"
            type="number"
            autoComplete="off"
            placeholder="грн"
          />
          <FormikTextarea
            label="Начинка"
            name="filling"
            autoComplete="off"
            placeholder="Начинка"
          />
          <FormikTextarea
            label="Описание"
            name="description"
            autoComplete="off"
            placeholder="Описание"
          />

          <button type="submit" className="btn">
            Создать
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default OrderForm;
