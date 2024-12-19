import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/form/form";
import { InputName } from "../../constants/input-name";
import { AppRoute } from "../../constants/app-route";
import loginStyles from "./login-page.module.css";
import FormLink from "../../components/form-link/form-link";
import { LoginFormType } from "../../types/types";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../services/store';
import { login } from '../../services/thunks';

function LoginPage() {
  const { formData, handleChangeInput } = useForm<LoginFormType>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

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
