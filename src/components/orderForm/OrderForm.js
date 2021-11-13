import { FormikInput, FormikTextarea } from "../../shared/FormikInput";
import { useDispatch } from "react-redux";
import { addOrder } from "../../redux/orders/orders-operations";
///////////////////////////////Formik, YUP /////////////////////////////////////////////////
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router";
import { date } from "yup/lib/locale";
import moment from "moment";

const initialForm = {
  name: "",
  phone: "+380",
  weight: "",
  price: "",
  prepayment: "",
  filling: "",
  description: "",
  date: "",
  time: "",
};

const phoneRegExp = /^(?:\+38)?(0\d{9})$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Поле обязательное!"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid").max(13),
  weight: Yup.number().required("Поле обязательное!"),
  price: Yup.number().required("Поле обязательное!"),
  prepayment: Yup.number().required("Поле обязательное!"),
});

const OrderForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [urlImg, setUrlImg] = useState(false);

  const handleSubmit = async (values) => {
    const { data } = await dispatch(addOrder(values));
    // history.push(`/client/${data._id}`);
  };

  const handlePostImg = (event) => {
    const file = event.target.files[0];

    const data = new FormData();
    data.append("image", file);
    axios
      .post("http://localhost:4444/api/v1/orders/uploadFiles", data)
      .then((data) => setUrlImg(data?.data?.img))
      .catch((error) => alert("Изображение не загружено!!!"));
  };

  return (
    <>
      <form action="#">
        {" "}
        <input
          name="image"
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={handlePostImg}
        />
      </form>
      <Formik
        initialValues={initialForm}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const date = values.date;
          const newDate = moment(date).format("DD.MM.YYYY");
          const updateDateAndImg = { ...values, img: urlImg, date: newDate };

          handleSubmit(updateDateAndImg);
          // resetForm();
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
            label="Дата:"
            name="date"
            type="date"
            format="DD.MM.YYYY"
          />
          <FormikInput label="Время" name="time" type="time" />
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
      <img src={urlImg.img} alt="" width="250" />{" "}
    </>
  );
};

export default OrderForm;
