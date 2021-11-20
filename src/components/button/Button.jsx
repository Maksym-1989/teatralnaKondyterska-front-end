import { useHistory } from "react-router";
import css from "./Button.module.css";

const Button = ({ name }) => {
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };
  return (
    <button type="button" onClick={handleGoBack} className={css.btn}>
      {name}
    </button>
  );
};

export default Button;
