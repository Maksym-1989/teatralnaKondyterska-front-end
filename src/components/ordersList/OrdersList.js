import { Link } from "react-router-dom";
import css from "./OrdersList.module.css";
import IconDelete from "../iconDelete/IconDelete";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../../redux/orders/orders-operations";

const OrdersList = ({ data }) => {
  const dispatch = useDispatch();

  const handleOnClick = (id) => {
    dispatch(deleteOrder(id));
  };

  return (
    <ul className={css.list}>
      {data?.map((order) => (
        <li key={order._id} className={css.item}>
          <button
            onClick={() => handleOnClick(order._id)}
            className={css.btnDelete}
          >
            <IconDelete />
          </button>

          <Link to={{ pathname: `/client/${order._id}` }} className={css.link}>
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
                    {Number(order.price) * Number(order.weight) -
                      Number(order.prepayment)}{" "}
                    грн
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default OrdersList;
