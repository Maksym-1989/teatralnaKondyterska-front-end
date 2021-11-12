import { Link } from "react-router-dom";

const OrdersList = ({ data }) => {
  return (
    <ul>
      {data?.map((order) => (
        <li key={order._id}>
          <Link to={{ pathname: `/client/${order._id}` }}>
            <div>
                <p>{order.time}</p>
                <p>{order.date} г.</p>
              <h2>{order.name}</h2>
              <p>{order.phone}</p>
              <div>
                <div>
                  <p>Цена:</p>
                  <span>{order.price}</span>
                </div>
                <div>
                  <p>Вес:</p>
                  <span>{order.weight}</span>
                </div>
                <div>
                  <p>Предоплата:</p>
                  <span>{order.prepayment}</span>
                </div>
              </div>
              <div>
                  <p>Cостав изделия:</p>
                  <span>{order.filling}</span>
              </div>
              <div>
                  <p>Описакние:</p>
                  <span>{order.description}</span>
              </div>
              <div>
                  <p>Описание:</p>
                  <span>{order.price-order.prepayment}</span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default OrdersList;
