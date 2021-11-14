import { Suspense, lazy } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AppLoader from "../../components/appLoader/AppLoader";

import NavBar from "../../components/navbar/NavBar";

const OrderForm = lazy(() =>
  import(
    "../../components/orderForm/OrderForm" /* webpackChunkName: "OrderForm" */
  )
);
const OrdersOfDays = lazy(() =>
  import(
    "../../components/ordersOfDay/OrdersOfDays" /* webpackChunkName: "OrdersOfDays" */
  )
);
const OrdersOfMonth = lazy(() =>
  import(
    "../../components/ordersOfMonth/OrdersOfMonth" /* webpackChunkName: "OrdersOfMonth" */
  )
);


const MainPage = () => {
  const match = useRouteMatch();
  return (
    <>
    <NavBar/>
      <Suspense fallback={<AppLoader/>}>
        <Switch>
          <Route exact  path={`${match.path}`} component={OrderForm}></Route>
          <Route exact  path={`${match.path}/ordersOfDay`} component={OrdersOfDays}></Route>
          <Route exact path={`${match.path}/ordersOfMonth`}  component={OrdersOfMonth}></Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default MainPage;
