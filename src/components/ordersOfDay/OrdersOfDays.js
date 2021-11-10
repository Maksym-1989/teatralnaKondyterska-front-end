import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedDate } from "../../redux/date/date.selectors";
import { getAllOrdersForDay } from "../../redux/orders/orders-operations";
import { getAllOfDay } from "../../redux/orders/orders-selectors";
import setSelectedDate from "../../redux/date/date.actions";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useLocation } from "react-router-dom";

const OrdersOfDays = () => {
  const dispatch = useDispatch();
  const dataOfDay = useSelector(getAllOfDay);
  const date = useSelector(getSelectedDate);
  const location = useLocation();

  useEffect(() => {
    dispatch(getAllOrdersForDay(date));
    // eslint-disable-next-line
  }, [date]);

  const handleChangeDate = (date) => {
    dispatch(
      setSelectedDate(
        date.toISOString().slice(0, 10).split("-").reverse().join(".")
      )
    );
  };

  return (
    <>
      <h2>OrdersOfDays</h2>
      <DatePicker
        dateFormat="dd.MM.yyyy"
        selected={
          date ? new Date(date.split(".").reverse().join("-")) : new Date()
        }
        onChange={handleChangeDate}
      />
      {dataOfDay.map((order) => (
        <Link to={{ pathname: `/client/${order._id}`, state: location }}>
          <p>{order.time}</p>
        </Link>
      ))}
    </>
  );
};

export default OrdersOfDays;
