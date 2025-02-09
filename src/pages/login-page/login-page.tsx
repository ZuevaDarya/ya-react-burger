import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation, useNavigate } from "react-router-dom";
import FormLink from "../../components/form-link/form-link";
import Form from "../../components/form/form";
import Span from "../../components/span/span";
import { AppRoute } from "../../constants/app-route";
import { InputName } from "../../constants/input-name";
import { TextCssType } from "../../constants/text-css-type";
import { useForm } from "../../hooks/use-form";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { login } from "../../services/thunks";
import { TLoginForm } from "../../types/types";
import loginStyles from "./login-page.module.css";

function LoginPage() {
  const { formData, handleChangeInput } = useForm<TLoginForm>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const error = useAppSelector((store) => store.userInfo.error);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(login(formData)).unwrap();
    navigate(location.search.split("=")[1], { replace: true });
  };

  return (
    <main>
      <div className="page-container page-container_gap">
        <Form title="Вход" handleSubmit={handleSubmit}>
          <EmailInput
            onChange={handleChangeInput}
            value={formData.email}
            name={InputName.Email}
            placeholder="E-mail"
            isIcon={false}
            required
          />
          <PasswordInput
            onChange={handleChangeInput}
            value={formData.password}
            name={InputName.Password}
            placeholder="Пароль"
            icon="ShowIcon"
            required
          />
          {error && error.includes("email or password are incorrect") && (
            <Span
              type={TextCssType.TextDefault}
              classes={`${loginStyles.error}`}
            >
              Ошибка! Проверьте корректность введенных данных!
            </Span>
          )}
          <Button type="primary" size="medium" htmlType="submit">
            Войти
          </Button>
        </Form>

        <div className={loginStyles["links-container"]}>
          <FormLink
            route={AppRoute.Registration}
            preText="Вы — новый пользователь?"
            linkText="Зарегистрироваться"
          />
          <FormLink
            route={AppRoute.ForgotPassword}
            preText="Забыли пароль?"
            linkText="Восстановить пароль"
          />
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
