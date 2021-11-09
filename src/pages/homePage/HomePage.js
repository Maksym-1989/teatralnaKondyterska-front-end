import { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../../components/header/Header";

const OrderForm = lazy(() =>
  import(
    "../../components/orderForm/OrderForm" /* webpackChunkName: "MoviesPage" */
  )
);

const NotFoundPage = lazy(() =>
  import("../notFound/NotFoundPage" /* webpackChunkName: "NotFoundPage" */)
);

const HomePage = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route exact path="/orders" component={OrderForm}></Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default HomePage;
