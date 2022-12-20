import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { appRoutes, routes } from "../../routes/page-routes";

import styles from "./header.module.scss";

const Header = ({ className }) => {
  const {isAuth}= useSelector(state => state.authorization);

  return (
    <div className={clsx(className, styles.header)}>
      <div className={styles.header_link}>
        {isAuth
          ? appRoutes?.map((item) => {
              return (
                <div key={item.name} className={styles.link}>
                  <NavLink to={item.path}>{item.text}</NavLink>
                </div>
              );
            })
          : routes?.map((item) => (
              <div key={item.name} className={styles.link}>
                <NavLink to={item.path}>{item.text}</NavLink>
              </div>
            ))}
      </div>
    </div>
  );
};
export default Header;
