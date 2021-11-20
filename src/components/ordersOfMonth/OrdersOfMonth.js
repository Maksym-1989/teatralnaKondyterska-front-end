import { useSelector } from "react-redux";
import { getAllOfmonth, trackLoad } from "../../redux/orders/orders-selectors";
import AppLoader from "../appLoader/AppLoader";
import Container from "../container/Container";
import MonthPicker from "../monthPicker/MonthPicker";
import OrdersList from "../ordersList/OrdersList";
import PercentageOfSales from "../percentageOfSales/PercentageOfSales";
import css from "./OrdersOfMonth.module.css";

const OrdersOfMonth = () => {
  const dataOfmonth = useSelector(getAllOfmonth);
  const load = useSelector(trackLoad);

  return (
    <Container>
      <div className={css.flexBox}>
        <PercentageOfSales data={dataOfmonth} />{" "}
        <div className={css.pickerBox}>
          <MonthPicker />
        </div>
      </div>
      {load ? (
        <AppLoader />
      ) : dataOfmonth.length === 0 ? (
        <h2 className={css.title}>Заказы за выбранный месяц отсутствуют! </h2>
      ) : (
        <OrdersList data={dataOfmonth} />
      )}
    </Container>
  );
};

export default OrdersOfMonth;
