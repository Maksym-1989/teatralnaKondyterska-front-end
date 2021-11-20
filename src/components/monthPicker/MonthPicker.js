import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import sprite from "../../img/icons/sprite_categories.svg";
import { getAllOrdersOfMonth } from "../../redux/orders/orders-operations";
import css from "./MonthPicker.module.css";

const MonthPicker = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const monthes = moment(date).format("MM.YYYY");

  useEffect(() => {
    dispatch(getAllOrdersOfMonth(monthes));
    // eslint-disable-next-line
  }, [date]);

  const changeMonth = (action) => {
    const value = action === "prev" ? -1 : 1;
    setDate((prevDate) => {
      const newDate = new Date(prevDate.getTime());
      const month = newDate.getMonth();
      newDate.setMonth(month + value);
      return newDate;
    });
  };
  const year = date.getFullYear();
  const month = date.toLocaleDateString("ru", { month: "long" });

  return (
    <div className={css.pickerBox}>
      {" "}
      <p className={css.title}>Текущий период :</p>
      <div className={css.box}>
        <span onClick={() => changeMonth("prev")}>
          <svg width="25" height="25">
            <use xlinkHref={`${sprite}#icon-arrow-left`} />
          </svg>
        </span>
        <p className={css.text}>
          {month} {year}
        </p>

        <span onClick={() => changeMonth("next")}>
          <svg width="25" height="25">
            <use xlinkHref={`${sprite}#icon-arrow-right`} />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default MonthPicker;
