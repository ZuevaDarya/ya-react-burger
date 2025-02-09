import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import FormLink from "../../components/form-link/form-link";
import Form from "../../components/form/form";
import { AppRoute } from "../../constants/app-route";
import { InputName } from "../../constants/input-name";
import { useForm } from "../../hooks/use-form";
import { useAppDispatch } from "../../services/store";
import { lastStepResetPassword } from "../../services/thunks";
import { TResetPasswordForm } from "../../types/types";

function ResetpasswordPage() {
  const { formData, handleChangeInput } = useForm<TResetPasswordForm>({
    password: "",
    token: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(lastStepResetPassword(formData)).unwrap();
    navigate(AppRoute.Login, { replace: true });
  };

  return (
    <main>
      <div className="page-container page-container_gap">
        <Form title="Восстановление пароля" handleSubmit={handleSubmit}>
          <PasswordInput
            onChange={handleChangeInput}
            value={formData.password}
            name={InputName.Password}
            placeholder="Введите новый пароль"
            icon="ShowIcon"
            required
          />
          {/* @ts-expect-error: onPointerEnterCapture, onPointerLeaveCapture warnings otherwise */}
          <Input
            type="text"
            placeholder="Введите код из письма"
            onChange={handleChangeInput}
            value={formData.token}
            name={InputName.Token}
            required
          />
          <Button type="primary" size="medium" htmlType="submit">
            Сохранить
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

export default ResetpasswordPage;
