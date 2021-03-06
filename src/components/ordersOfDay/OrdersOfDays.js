import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedDate } from "../../redux/date/date.selectors";
import { getAllOrdersForDay } from "../../redux/orders/orders-operations";
import { getAllOfDay, trackLoad } from "../../redux/orders/orders-selectors";
import setSelectedDate from "../../redux/date/date.actions";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import OrdersList from "../ordersList/OrdersList";
import Container from "../container/Container";
import css from "./OrdersOfDays.module.css";
import { ReactComponent as CalendarLogo } from "../../img/icons/calendar.svg";
import AppLoader from "../appLoader/AppLoader";

const OrdersOfDays = () => {
  const dispatch = useDispatch();
  const dataOfDay = useSelector(getAllOfDay);
  const date = useSelector(getSelectedDate);
  const load = useSelector(trackLoad);

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
        <div className={css.calendarBox}>
          {" "}
          <CalendarLogo width="35" height="35" />
          <DatePicker
            className={css.datePicker}
            dateFormat="dd.MM.yyyy"
            selected={
              date ? new Date(date.split(".").reverse().join("-")) : new Date()
            }
            onChange={handleChangeDate}
          />
        </div>
        {load ? (
          <AppLoader />
        ) : dataOfDay.length === 0 ? (
          <h2 className={css.title}>Заказы за выбранную дату отсутствуют! </h2>
        ) : (
          <OrdersList data={dataOfDay} />
        )}
      </Container>
    </>
  );
};

export default OrdersOfDays;
