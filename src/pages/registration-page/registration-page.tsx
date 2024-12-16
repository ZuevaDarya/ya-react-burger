import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/form/form";
import FormLink from "../../components/form-link/form-link";
import { AppRoute } from "../../constants/app-route";
import { InputName } from "../../constants/input-name";
import { useForm } from "../../hooks/useForm";
import { RegistrationFormType } from "../../types/types";

function RegistrationPage() {
  const { formData, handleChangeInput } = useForm<RegistrationFormType>({
    name: "",
    email: "",
    password: "",
  });

  return (
    <main>
      <div className="page-container page-container_gap">
        <Form title="Регистрация">
           {/* @ts-expect-error: onPointerEnterCapture, onPointerLeaveCapture warnings otherwise */}
          <Input
            type="text"
            placeholder="Имя"
            onChange={handleChangeInput}
            value={formData.name}
            name={InputName.UserName}
          />
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
          <Button type="primary" size="medium" htmlType="submit">
            Зарегистрироваться
          </Button>
        </Form>

        <FormLink
          route={AppRoute.Login}
          preText="Уже зарегистрированы?"
          linkText="Войти"
        />
      </div>
    </main>
  );
}

export default RegistrationPage;
