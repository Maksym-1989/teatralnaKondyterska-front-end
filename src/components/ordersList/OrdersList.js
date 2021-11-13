import { Link } from "react-router-dom";
import css from "./OrdersList.module.css";

const OrdersList = ({ data }) => {
  return (
    <ul className={css.list}>
      {data?.map((order) => (
        <Link to={{ pathname: `/client/${order._id}` }} className={css.link}>
          <li key={order._id} className={css.item}>
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
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default OrdersList;
