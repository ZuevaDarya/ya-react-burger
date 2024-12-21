import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import errorStyles from "./error-page.module.css";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "../../constants/app-route";

function ErrorPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(AppRoute.Home, { replace: true });
  };

  return (
    <main id="error-page">
      <div className={errorStyles.container}>
        <h1 className="text text_type_digits-large">404</h1>
        <p className="text text_type_main-medium">
          Упсс... Такая страница не найдена
        </p>
        <p className="text text_type_main-default">
          Вы можете вернуться на страницу с конструтором и собрать лучший
          галактический бургер
        </p>
        <Button htmlType="button" onClick={handleClick}>
          На главную
        </Button>
      </div>
    </main>
  );
}

export default ErrorPage;
