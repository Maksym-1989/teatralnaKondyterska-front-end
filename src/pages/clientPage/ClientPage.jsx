import { useRouteMatch } from "react-router";
import Button from "../../components/button/Button";
import { getOneOrder } from "../../api/api.js";
import { useEffect, useState } from "react";
import notFound from "../../img/notFound.jpg";
import css from "./ClientPage.module.css";
import Container from "../../components/container/Container";
import { useSelector } from "react-redux";
import { getIsAuth } from "../../redux/auth/auth-selectors.js";
import ModalWindow from "../../components/modalWindow/ModalWindow";

const obj = { img: false, weight: 0, price: 0, prepayment: 0 };

const ClientPage = () => {
  const match = useRouteMatch();
  const { id } = match.params;
  const [order, setOrder] = useState(obj);
  const isAuth = useSelector(getIsAuth);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    getOneOrder(id).then((data) => setOrder(data.data));
  }, [id]);
  return (
    <Container>
      {isAuth ? (
        <div className={css.btnBox}>
          <Button name="Назад" />
        </div>
      ) : (
        <></>
      )}

      <div className={css.wrapper}>
        <img
          src={order.img ? order.img : notFound}
          alt={order._id}
          className={css.img}
          onClick={toggleModal}
        />
        <div className={css.contentWrapper}>
          <div className={css.smallBox1}>
            <h3 className={css.subtitle}>На когда:</h3>
            <p className={css.text}>
              {order.dateToReady} г. {order.time}
            </p>
          </div>

          <div className={css.nameBox}>
            <h2 className={css.title}>{order.name}</h2>
            <a href={`tel:${order.phone}`} className={css.tell}>{order.phone}</a>
          </div>
          <div className={css.priceBox}>
            <div className={css.smallBox}>
              <h3 className={css.subtitle}>Цена за 1 кг:</h3>
              <p className={css.text}>{order.price} грн</p>
            </div>
            <div className={css.smallBox}>
              <h3 className={css.subtitle}>Предоплата:</h3>
              <p className={css.text}>{order.prepayment} грн</p>
            </div>
          </div>

          <div className={css.dateBox}>
            <div className={css.smallBox}>
              <h3 className={css.subtitle}>Вес изделия:</h3>
              <p className={css.text}>{order.weight} кг</p>
            </div>
          </div>
          <div>
            <h3 className={css.subtitle}>Состав:</h3>
            <p className={css.text}>{order.filling}</p>
          </div>
          <div>
            <h3 className={css.subtitle}>Описание:</h3>
            <p className={css.text}>{order.description}</p>
          </div>
          <div className={css.summary}>
            <h3 className={css.subtitleSumm}>Итого:</h3>
            <p className={css.textTotal}>
              {Number(order.price) * Number(order.weight) -
                Number(order.prepayment)}{" "}
              грн
            </p>
          </div>
        </div>
      </div>
      {isModalOpen && <ModalWindow url={order.img} onCancel={toggleModal} />}
    </Container>
  );
};

export default ClientPage;
