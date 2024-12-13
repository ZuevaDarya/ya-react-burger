import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/form/form";
import FormLink from "../../components/form-link/form-link";
import { AppRoute } from "../../constants/app-route";
import { InputName } from "../../constants/input-name";
import { useForm } from "../../hooks/useForm";
import { ForgotPasswordFormType } from "../../types/types";
import loginStyles from "../login-page/login-page.module.css";

function ForgotPasswordPage() {
  const { formData, handleChangeInput } = useForm<ForgotPasswordFormType>({
    email: "",
  });

  return (
    <main>
      <div className={loginStyles.container}>
        <Form title="Восстановление пароля">
          <EmailInput
            onChange={handleChangeInput}
            value={formData.email}
            name={InputName.Email}
            placeholder="Укажите e-mail"
            isIcon={false}
          />
          <Button type="primary" size="medium" htmlType="submit">
            Восстановить
          </Button>
        </Form>

        <FormLink
          route={AppRoute.Login}
          preText="Вспомнили пароль?"
          linkText="Войти"
        />
      </div>
    </main>
  );
}

export default ForgotPasswordPage;
