import { useSelector } from "react-redux";
import { getAllOfmonth } from "../../redux/orders/orders-selectors";
import Container from "../container/Container";
import MonthPicker from "../monthPicker/MonthPicker";
import OrdersList from "../ordersList/OrdersList";
import css from "./OrdersOfMonth.module.css";

const OrdersOfMonth = () => {
  const dataOfmonth = useSelector(getAllOfmonth);

  return (
    <Container>
      {" "}
      <div className={css.pickerBox}>
        <MonthPicker />
      </div>
      {dataOfmonth.length === 0 ? (
        <h2 className={css.title}>Заказы за выбраный месяц отсутствуют! </h2>
      ) : (
        <OrdersList data={dataOfmonth} />
      )}
    </Container>
  );
};

export default OrdersOfMonth;
