import { Link } from "react-router-dom";
import { Button, Typography } from "antd";
import styles from "./mainPage.module.scss";

const { Paragraph } = Typography;

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <Paragraph className={styles.welcomeText}>Добро пожаловать!</Paragraph>
        <Link to="/form-page">
          <Button type="primary" size="large">
            Нажмите для продолжения
          </Button>
        </Link>
      </div>
      <Paragraph className={styles.footerText}>
        Этот сайт создан Губичем Александром для целей ТЗ.
      </Paragraph>
    </div>
  );
};
