import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PublicRoute from "./routes/publicRoute";
import PrivateRoute from "./routes/privateRoute";
import AppLoader from "./components/appLoader/AppLoader";

const AuthPage = lazy(() =>
  import("./pages/authPage/AuthPage" /* webpackChunkName: "AuthPage" */)
);
const MainPage = lazy(() =>
  import("./pages/mainPage/MainPage" /* webpackChunkName: "MainPage" */)
);
const ClientPage = lazy(() =>
  import("./pages/clientPage/ClientPage" /* webpackChunkName: "ClientPage" */)
);

const NotFoundPage = lazy(() =>
  import("./pages/notFound/NotFoundPage" /* webpackChunkName: "NotFoundPage" */)
);

function App() {
  return (
    <>
      <Suspense fallback={<AppLoader />}>
        <Switch>
          <PublicRoute
            exact
            path="/"
            redirectTo="/main"
            restricted
            component={AuthPage}
          />

          <PublicRoute
            exact
            path="/client/:id"
            redirectTo="/"
            component={ClientPage}
          />
          <PrivateRoute path="/main" redirectTo="/" component={MainPage} />

          <Route component={NotFoundPage}></Route>
        </Switch>
      </Suspense>
      <ToastContainer
        transition={Zoom}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
