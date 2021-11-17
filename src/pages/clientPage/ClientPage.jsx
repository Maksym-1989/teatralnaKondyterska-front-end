import { useRouteMatch } from "react-router";
import Button from "../../components/button/Button";
import { getOneOrder } from "../../api/api.js";
import { useEffect, useState } from "react";
import notFound from "../../img/notFound.jpg";
import css from "./ClientPage.module.css";
import Container from "../../components/container/Container";

const ClientPage = () => {
  const match = useRouteMatch();
  const { id } = match.params;
  const [order, setOrder] = useState({});

  useEffect(() => {
    getOneOrder(id).then((data) => setOrder(data.data));
  }, [id]);
  return (
      <Container>
        <Button name="Вернутся назад" />
        <img src={order.img ? order.img : notFound} alt={order._id}  />
        <div className={css.itemBox}>
          <div className={css.itemBoxTitle}>
            <h2 className={css.itemTitle}>{order.name}</h2>
            <p className={css.itemPhone}>{order.phone}</p>
          </div>
          <div className={css.gridBox}>
            <div className={css.smallBox}>
              <h3 className={css.itemSubTitle}>Цена:</h3>
              <p className={css.itemText}>{order.price} грн</p>
            </div>
            <div className={css.smallBox}>
              <h3 className={css.itemSubTitle}>Вес:</h3>
              <p className={css.itemText}>{order.weight} кг</p>
            </div>
            <div className={css.smallBox}>
              <h3 className={css.itemSubTitle}>Предоплата:</h3>
              <p className={css.itemText}>{order.prepayment} грн</p>
            </div>
            <div className={css.smallBox}>
              <h3 className={css.itemSubTitle}>Время:</h3>
              <p className={css.itemText}>{order.time}</p>
            </div>
            <div className={css.smallBox}>
              <h3 className={css.itemSubTitle}>Дата:</h3>
              <p className={css.itemText}>{order.dateToReady} г.</p>
            </div>
            <div className={css.smallBox}>
              <h3 className={css.itemSubTitle}>Сумма:</h3>
              <p className={css.itemText}>
                {order.price - order.prepayment} грн
              </p>
            </div>
          </div>
        </div>
      </Container>
  );
};

export default ClientPage;
