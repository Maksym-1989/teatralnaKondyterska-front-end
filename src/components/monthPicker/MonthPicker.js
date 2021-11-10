import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import sprite from "../../img/icons/sprite_categories.svg";
import { getAllOrdersOfMonth } from "../../redux/orders/orders-operations";

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
    <div>
      {" "}
      <p>Текущий период :</p>
      <div>
        <span onClick={() => changeMonth("prev")}>
          <svg width="8" height="15">
            <use xlinkHref={`${sprite}#icon-arrow-left`} />
          </svg>
        </span>
        {month} {year}
        <span onClick={() => changeMonth("next")}>
          <svg width="8" height="15">
            <use xlinkHref={`${sprite}#icon-arrow-right`} />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default MonthPicker;
