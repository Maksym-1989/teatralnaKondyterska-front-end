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
const HomePage = lazy(() =>
  import("./pages/homePage/HomePage" /* webpackChunkName: "HomePage" */)
);

const NotFoundPage = lazy(() =>
  import("./pages/notFound/NotFoundPage" /* webpackChunkName: "NotFoundPage" */)
);

function App() {
  return (
    <>
      <Suspense fallback={<AppLoader/>}>
        <Switch>
          <PublicRoute
            exact
            path="/"
            redirectTo="/orders"
            restricted
            component={AuthPage} 
          />
          <PrivateRoute
            exact
            path="/orders"
            redirectTo="/"
            component={HomePage}
          />
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
