import { useState } from "react";
import css from "./PercentageOfSales.module.css";

const PercentageOfSales = ({ data }) => {
  const [input, setInput] = useState("10");
  const summ = data.reduce((acc, { price }) => {
    acc += price;
    return acc;
  }, 0);

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Заработок за месяц</h2>
      <div className={css.box}>
        <p className={css.text}>Установить процент:</p>

        <input
          className={css.input}
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <span className={css.span}>%</span>
      </div>
      <p className={css.textSumm}>
        Итого: {parseInt((summ / 100) * input)} грн
      </p>
    </div>
  );
};

export default PercentageOfSales;
