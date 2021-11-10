import { useHistory, useLocation } from "react-router";

const Button = ({classname, name}) => {
  const history = useHistory();
  const location = useLocation();
  const handleGoBack = () => {
    history.push(location.state?.pathname);
  };
  return (
    <button type="button" onClick={handleGoBack} className={classname}>
      {name}
    </button>
  );
};

export default Button;
