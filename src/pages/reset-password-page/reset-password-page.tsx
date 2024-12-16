import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/form/form";
import FormLink from "../../components/form-link/form-link";
import { AppRoute } from "../../constants/app-route";
import { InputName } from "../../constants/input-name";
import { useForm } from "../../hooks/useForm";
import { ResetPasswordFormType } from "../../types/types";

function ResetpasswordPage() {
  const { formData, handleChangeInput } = useForm<ResetPasswordFormType>({
    password: "",
    token: "",
  });

  return (
    <main>
      <div className="page-container page-container_gap">
        <Form title="Восстановление пароля">
          <PasswordInput
            onChange={handleChangeInput}
            value={formData.password}
            name={InputName.Password}
            placeholder="Введите новый пароль"
            icon="ShowIcon"
          />
           {/* @ts-expect-error: onPointerEnterCapture, onPointerLeaveCapture warnings otherwise */}
          <Input
            type="text"
            placeholder="Введите код из письма"
            onChange={handleChangeInput}
            value={formData.token}
            name={InputName.Token}
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
