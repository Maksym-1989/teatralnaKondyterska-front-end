import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";

const AuthPage = lazy(() =>
  import("./pages/authPage/AuthPage" /* webpackChunkName: "AuthPage" */)
);
const HomePage = lazy(() =>
  import("./pages/homePage/HomePage" /* webpackChunkName: "HomePage" */)
);

const NotFoundPage = lazy(() =>
  import("./pages/notFound/NotFoundPage" /* webpackChunkName: "NotFoundPage" */)
);

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route exact path="/" component={AuthPage}></Route>
          <Route exact path="/orders" component={HomePage}></Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
