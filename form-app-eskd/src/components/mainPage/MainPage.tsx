import { Link } from "react-router-dom";
import styles from "./mainPage.module.scss";

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <p>Добро пожаловать!</p>
        <Link to="/form-page">
          <button>Нажмите для продолжения</button>
        </Link>
      </div>
      <p>Этот сайт создан Губичем Александром для целей ТЗ.</p>
    </div>
  );
};
