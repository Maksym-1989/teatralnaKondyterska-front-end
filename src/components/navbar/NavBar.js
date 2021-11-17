import React, { useState } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import "./NavBar.css";
import svgMenu from "../../img/icons/menu_icon.svg";
import svgClose from "../../img/icons/close_icon.svg";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/auth-operation";

function NavBar() {
  const [click, setClick] = useState(false);
  const match = useRouteMatch();

  const handleClick = () => setClick(!click);
  const dispatch = useDispatch();
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a  href="https://www.instagram.com/teatralnakondyterska/?hl=ru" target="_blank" className="nav-logo">
            Teatralnaya
            <i className="fas fa-code"></i>
          </a>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact={true}
                to={`${match.url}`}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Создание заказа
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact={true}
                to={`${match.url}/ordersOfDay`}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Заказы за день
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact={true}
                to={`${match.url}/ordersOfMonth`}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Заказы за месяц
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                className="nav-links"
                onClick={() => {
                  dispatch(logOut());
                }}
              >
                Выход
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <img
              src={click ? svgClose : svgMenu}
              alt=""
              // className={click ? "fas fa-times" : "fas fa-bars"}
              width="35"
              height="35"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
