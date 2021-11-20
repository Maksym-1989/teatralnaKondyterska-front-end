import { FormikInput, FormikTextarea } from "../../shared/FormikInput";
import { useDispatch } from "react-redux";
import { addOrder } from "../../redux/orders/orders-operations";
///////////////////////////////Formik, YUP /////////////////////////////////////////////////
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router";
import moment from "moment";
import Container from "../container/Container";
import svg from "../../img/icons/bx-upload.svg";
import css from "./OrderForm.module.css";
import { getCurrentUser } from "../../redux/auth/auth-operation";

const initialForm = {
  name: "",
  phone: "+380",
  weight: "",
  price: "",
  prepayment: "",
  filling: "",
  description: "",
  dateToReady: "",
  time: "",
};

const phoneRegExp = /^(?:\+38)?(0\d{9})$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Поле обязательное!"),
  phone: Yup.string()
    .matches(phoneRegExp, "Введите номер телефона.")
    .max(13)
    .required("Поле обязательное!"),
  weight: Yup.number().required("Поле обязательное!"),
  price: Yup.number().required("Поле обязательное!"),
  prepayment: Yup.number().required("Поле обязательное!"),
  dateToReady: Yup.string().required("Поле обязательное!"),
  time: Yup.string().required("Поле обязательное!"),
});

const OrderForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [urlImg, setUrlImg] = useState(false);
  useEffect(()=>{
    dispatch(getCurrentUser);
  },[])

  const handleSubmit = async (values) => {
    const { data } = await dispatch(addOrder(values));
    history.push(`/client/${data._id}`);
  };

  const handlePostImg = (event) => {
    const file = event.target.files[0];

    const data = new FormData();
    data.append("image", file);
    axios
      .post("hhttps://teatralna.herokuapp.com/api/v1/orders/uploadFiles", data)
      .then((data) => setUrlImg(data?.data?.img))
      .catch((error) => alert("Изображение не загружено!!!"));
  };

  return (
    <Container>
      <div className={css.wrapper}>
        {/* <form action="#">
            {" "}
            <input
            name="image"
            type="file"
              accept=".jpg, .jpeg, .png"
              onChange={handlePostImg}
              />
            </form> */}
        <Formik
          initialValues={initialForm}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            const date = values.date;
            const newDate = moment(date).format("DD.MM.YYYY");
            const updateDateAndImg = {
              ...values,
              img: urlImg,
              dateToReady: newDate,
            };

            handleSubmit(updateDateAndImg);
            resetForm();
          }}
          enableReinitialize={true}
        >
          <Form className={css.login_form}>
            <div className={css.content}>
              <div className={css.input__wrapper}>
                {" "}
                <input
                  name="image"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={handlePostImg}
                  id="input__file"
                  className={css.input__file}
                />
                <label htmlFor="input__file" className={css.input__file_button}>
                  <span className={css.input__file_icon_wrapper}>
                    <img src={svg} alt="" className={css.input__file_icon} />
                  </span>
                  <span className={css.input__file_button_text}>
                    Выберите файл
                  </span>
                </label>
              </div>

              <FormikInput
                className={css.input}
                label="Имя"
                name="name"
                type="text"
                autoComplete="off"
              />
              <FormikInput
                label="Номер телефона"
                name="phone"
                type="tel"
                autoComplete="off"
                placeholder="+380990000000"
                className={css.input}
              />

              <FormikInput
                label="Дата:"
                name="dateToReady"
                type="date"
                format="DD.MM.YYYY"
                className={css.input}
              />
              <FormikInput
                className={css.input}
                label="Время"
                name="time"
                type="time"
              />
              <div className={css.flexBox}>
                <FormikInput
                  label="Вес изделия"
                  name="weight"
                  type="number"
                  autoComplete="off"
                  placeholder="кг"
                  className={css.input}
                />
                <FormikInput
                  label="Цена"
                  name="price"
                  type="number"
                  autoComplete="off"
                  placeholder="грн"
                  className={css.input}
                />
              </div>
              <FormikInput
                label="Предоплата"
                name="prepayment"
                type="number"
                autoComplete="off"
                placeholder="грн"
                className={css.input}
              />
              <FormikTextarea
                label="Начинка"
                name="filling"
                autoComplete="off"
                placeholder="Начинка"
                className={css.input}
                rows="6"
                cols="35"
              />
              <FormikTextarea
                label="Описание"
                name="description"
                autoComplete="off"
                placeholder="Описание"
                className={css.input}
                rows="6"
                cols="35"
                // style={"resize: none;"}
              />

              <div className={css.footer}>
                <button type="submit" className={css.button}>
                  Создать
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </Container>
  );
};

export default OrderForm;
