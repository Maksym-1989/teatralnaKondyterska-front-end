import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink
            exact
            to="/"
            className={css.header_nav_link}
            activeClassName={css.header_nav_link_active}
          >
            <p>Auth</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/orders"
            className={css.header_nav_link}
            activeClassName={css.header_nav_link_active}
          >
            <p>Orders</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
