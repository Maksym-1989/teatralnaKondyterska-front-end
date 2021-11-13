import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedDate } from "../../redux/date/date.selectors";
import { getAllOrdersForDay } from "../../redux/orders/orders-operations";
import { getAllOfDay } from "../../redux/orders/orders-selectors";
import setSelectedDate from "../../redux/date/date.actions";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useLocation } from "react-router-dom";
import OrdersList from "../ordersList/OrdersList";
import Container from "../container/Container";

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
      <Container>
        {" "}
        <DatePicker
          dateFormat="dd.MM.yyyy"
          selected={
            date ? new Date(date.split(".").reverse().join("-")) : new Date()
          }
          onChange={handleChangeDate}
        />
        <OrdersList data={dataOfDay} />
      </Container>
    </>
  );
};

export default OrdersOfDays;
