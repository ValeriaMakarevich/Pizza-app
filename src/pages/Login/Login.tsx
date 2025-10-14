import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Headling from "../../components/Headling/Headling";
import Input from "../../components/Input/input";
import styles from "./Login.module.css";
import type { FormEvent } from "react";

export function Login() {
  const submit =(e:FormEvent) =>{
     e.preventDefault()
    console.log(e)
  }


  return (
    <div className={styles["login"]} onSubmit={submit}>
      <Headling>Вход</Headling>
      <form className={styles["form"]}>
        <div className={styles["field"]}>
          <label htmlFor="email">Ваш email</label>
          <Input id="email" placeholder="Email" />
        </div>
        <div className={styles["field"]}>
          <label htmlFor="password">Ваш пароль</label>
          <Input id="email" type="password" placeholder="Пароль" />
        </div>
        <Button appearence="big">Вход</Button>
        <div>Нет аккаунта?</div>
        <div className={styles['links']}>
          <Link to="/auth/register">Зарегистрироваться</Link>
        </div>
      </form>
    </div>
  );
}
