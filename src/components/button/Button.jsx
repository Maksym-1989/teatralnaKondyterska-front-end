import { useHistory } from "react-router";

const Button = ({classname, name}) => {
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };
  return (
    <button type="button" onClick={handleGoBack} className={classname}>
      {name}
    </button>
  );
};

export default Button;
