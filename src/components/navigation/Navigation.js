import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  const match = useRouteMatch();

  return (
    <nav>
      <ul className={css.list}>
        <li>
          <NavLink
            exact
            to={`${match.url}`}
            className={css.header_nav_link}
            activeClassName={css.header_nav_link_active}
          >
            <p>Создание заказа</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to={`${match.url}/ordersOfDay`}
            className={css.header_nav_link}
            activeClassName={css.header_nav_link_active}
          >
            <p>Заказы за день</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to={`${match.url}/ordersOfMonth`}
            className={css.header_nav_link}
            activeClassName={css.header_nav_link_active}
          >
            <p>Заказы за месяц</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
