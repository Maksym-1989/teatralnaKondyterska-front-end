import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersForDay } from "../../redux/orders/orders-operations";
import { getAllOfDay } from "../../redux/orders/orders-selectors";

const OrdersOfDays = () => {
  const date = "09.11.2021";
  const dispatch = useDispatch();
  const dataOfDay = useSelector(getAllOfDay);

  useEffect(() => {
    dispatch(getAllOrdersForDay(date));
  }, []);
  return (
    <>
      <h2>OrdersOfDays</h2>
      {dataOfDay.map((order) => (
        <li>
          <p>{order.time}</p>
        </li>
      ))}
    </>
  );
};

export default OrdersOfDays;
