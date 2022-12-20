import React from "react";
import Header from "../header";

import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header className={styles.layout_header} />
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default Layout;
