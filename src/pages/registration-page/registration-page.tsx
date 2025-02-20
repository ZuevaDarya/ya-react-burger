import {
  Button,
  EmailInput,
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
import { register } from "../../services/thunks";
import { TRegistrationForm } from "../../types/types";

function RegistrationPage() {
  const { formData, handleChangeInput } = useForm<TRegistrationForm>({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(register(formData)).unwrap();
    navigate(AppRoute.Home);
  };

  return (
    <main>
      <div className="page-container page-container_gap">
        <Form title="Регистрация" handleSubmit={handleSubmit}>
          {/* @ts-expect-error: onPointerEnterCapture, onPointerLeaveCapture warnings otherwise */}
          <Input
            type="text"
            placeholder="Имя"
            onChange={handleChangeInput}
            value={formData.name}
            name={InputName.UserName}
            required
          />
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
