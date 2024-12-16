import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/form/form";
import { InputName } from "../../constants/input-name";
import { useForm } from "../../hooks/useForm";
import { ProfileFormType } from "../../types/types";
import NavListItem from "../../components/nav-list-item/nav-list-item";
import profileStyles from "./profile-page.module.css";

function ProfilePage() {
  const { formData, handleChangeInput, isChangedData, setIsChangedData } =
    useForm<ProfileFormType>({
      name: "Иван",
      email: "ivan123@.ru",
      password: "111",
    });

  const handleBtnCancelClick = () => {
    setIsChangedData(false);
  };

  return (
    <main className={profileStyles.main}>
      <aside className={profileStyles.aside}>
        <nav>
          <ul>
            <NavListItem
              linkText="Профиль"
              linkHref="#"
              isActive={true}
              linkClasses="text text_type_main-medium"
            />
            <NavListItem
              linkText="История заказов"
              linkHref="#"
              isActive={false}
              linkClasses="text text_type_main-medium"
            />
            <NavListItem
              linkText="Выход"
              linkHref="#"
              isActive={false}
              linkClasses="text text_type_main-medium"
            />
          </ul>
        </nav>

        <p className={`${profileStyles.p} text text_type_main-default`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </aside>

      <Form>
        {/* @ts-expect-error: onPointerEnterCapture, onPointerLeaveCapture warnings otherwise */}
        <Input
          type="text"
          placeholder="Имя"
          onChange={handleChangeInput}
          value={formData.name}
          name={InputName.UserName}
          icon="EditIcon"
          disabled={false}
        />
        <EmailInput
          onChange={handleChangeInput}
          value={formData.email}
          name={InputName.Email}
          placeholder="Логин"
          isIcon={true}
          disabled={false}
        />
        <PasswordInput
          onChange={handleChangeInput}
          value={formData.password}
          name={InputName.Password}
          placeholder="Пароль"
          icon="EditIcon"
          disabled={false}
        />

        {isChangedData && (
          <div className={profileStyles["buttons-block"]}>
            <Button
              htmlType="button"
              type="secondary"
              size="medium"
              onClick={handleBtnCancelClick}
            >
              Отменить
            </Button>
            <Button htmlType="submit" type="primary" size="medium">
              Сохранить
            </Button>
          </div>
        )}
      </Form>
    </main>
  );
}

export default ProfilePage;
