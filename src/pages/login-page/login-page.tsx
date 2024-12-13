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
import { LoginFormType } from '../../types/types';
import { useForm } from '../../hooks/useForm';

function LoginPage() {
  const { formData, handleChangeInput } = useForm<LoginFormType>({
    email: "",
    password: ""
  });

  return (
    <main className={loginStyles.main}>
      <Form title="Вход">
        <EmailInput
          onChange={handleChangeInput}
          value={formData.email}
          name={InputName.Email}
          placeholder="E-mail"
          isIcon={false}
        />
        <PasswordInput
          onChange={handleChangeInput}
          value={formData.password}
          name={InputName.Password}
          placeholder="Пароль"
          icon="ShowIcon"
        />
        <Button type="primary" size="large" htmlType="submit">
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
    </main>
  );
}

export default LoginPage;
