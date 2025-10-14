import {  NavLink, Outlet } from "react-router-dom";
import styles from './Layout.module.css'
import Button from "../../components/Button/Button";


export function Layout() {
  return (
    <div className={styles["layout"]}>
      <div className={styles["sidebar"]}>
        <div className={styles["user"]}>
          <img src="Intersect.png" alt="Аватар пользователя" />
          <div className={styles["name"]}>Василий Петров</div>
          <div className={styles["email"]}>vasi@gmail.com</div>
        </div>
        <div className={styles["menu"]}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            to="/"
          >
            <img src="menu-icon.svg" alt="" />
            Menu
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            to="/cart"
          >
            <img src="cart-icon.svg" alt="Иконка корзины" />
            Cart
          </NavLink>
        </div>
        <Button className={styles["exit"]}>
          Exit
          <img src="Group 18072.svg" alt="Иконка выхода" />
        </Button>
      </div>
      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  );
}
