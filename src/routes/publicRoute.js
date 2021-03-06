import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { getIsAuth } from "../redux/auth/auth-selectors";

const PublicRoute = ({
  component: Component,
  redirectTo,
  restricted,
  ...routeProps
}) => {
  const isAuth = useSelector(getIsAuth);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuth && restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuth(state),
});

export default connect(mapStateToProps)(PublicRoute);
