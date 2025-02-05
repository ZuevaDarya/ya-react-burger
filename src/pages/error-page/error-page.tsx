import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import Text from "../../components/text/text";
import Title from "../../components/title/title";
import { AppRoute } from "../../constants/app-route";
import { TextCssType } from "../../constants/text-css-type";
import errorStyles from "./error-page.module.css";

function ErrorPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(AppRoute.Home, { replace: true });
  };

  return (
    <main id="error-page">
      <div className={errorStyles.container}>
        <Title type={TextCssType.DigitsLarge}>404</Title>
        <Text type={TextCssType.TextMedium}>
          Упсс... Такая страница не найдена
        </Text>
        <Text type={TextCssType.TextDefault}>
          Вы можете вернуться на страницу с конструтором и собрать лучший
          галактический бургер
        </Text>
        <Button htmlType="button" onClick={handleClick}>
          На главную
        </Button>
      </div>
    </main>
  );
}

export default ErrorPage;
