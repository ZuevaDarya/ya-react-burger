import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import FormLink from "../../components/form-link/form-link";
import Form from "../../components/form/form";
import { AppRoute } from "../../constants/app-route";
import { InputName } from "../../constants/input-name";
import { useForm } from "../../hooks/use-form";
import { useAppDispatch } from "../../services/store";
import { firstStepResetPassword } from "../../services/thunks";
import { TForgotPasswordForm } from "../../types/types";

function ForgotPasswordPage() {
  const { formData, handleChangeInput } = useForm<TForgotPasswordForm>({
    email: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(firstStepResetPassword(formData)).unwrap();
    navigate(AppRoute.ResetPassword);
  };

  return (
    <main>
      <div className="page-container page-container_gap">
        <Form title="Восстановление пароля" handleSubmit={handleSubmit}>
          <EmailInput
            onChange={handleChangeInput}
            value={formData.email}
            name={InputName.Email}
            placeholder="Укажите e-mail"
            isIcon={false}
            required
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
