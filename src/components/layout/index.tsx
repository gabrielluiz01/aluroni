import React from "react";
import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import stylesTheme from "styles/theme.module.scss";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div className={stylesTheme.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
}
