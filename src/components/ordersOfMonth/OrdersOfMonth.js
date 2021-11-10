import { useSelector } from "react-redux";
import { getAllOfmonth } from "../../redux/orders/orders-selectors";
import MonthPicker from "../monthPicker/MonthPicker";

const OrdersOfMonth = () => {
  const dataOfmonth = useSelector(getAllOfmonth);

  return (
    <>
    <MonthPicker/>
      <h2>OrdersOfMonth</h2>
    </>
  );
};

export default OrdersOfMonth;
