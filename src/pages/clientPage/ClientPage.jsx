import { useRouteMatch } from "react-router";
import Button from "../../components/button/Button";
import { getOneOrder } from "../../api/api.js";
import { useEffect, useState } from "react";
import notFound from "../../img/notFound.jpg";

const ClientPage = () => {
  const match = useRouteMatch();
  const { id } = match.params;
  const [order, setOrder] = useState({});

  useEffect(() => {
    getOneOrder(id).then((data) => setOrder(data.data));
  }, [id]);
  console.log()
  return (
    <>
      <Button name="Вернутся назад" />
      <h1>ClientPage</h1>
      <img src={order.img ? order.img : notFound} alt="" width="250" />
      <p>
        {order.name}
        {order.phone}
      </p>
    </>
  );
};

export default ClientPage;
