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
import { AppRoute } from "../../constants/app-route";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { logout, updateUser } from "../../services/thunks";

function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userInfo);

  const { formData, handleChangeInput, isChangedData, setIsChangedData } =
    useForm<ProfileFormType>({
      name: user ? user.name : "",
      email: user ? user.email : "",
      password: "",
    });

  const handleCancelBtnClick = () => {
    setIsChangedData(false);
  };

  const handleLogoutBtnClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    await dispatch(logout());
    navigate(AppRoute.Home);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(updateUser(formData));
    setIsChangedData(false);
  };

  return (
    <main className={profileStyles.main}>
      <aside className={profileStyles.aside}>
        <nav>
          <ul>
            <NavListItem route={AppRoute.Profile} isProfileLink={true}>
              Профиль
            </NavListItem>
            <NavListItem route={AppRoute.Orders} isProfileLink={true}>
              История заказов
            </NavListItem>
            <button
              type="button"
              className={`${profileStyles.button} text text_type_main-medium`}
              onClick={handleLogoutBtnClick}
            >
              Выход
            </button>
          </ul>
        </nav>

        <p className={`${profileStyles.p} text text_type_main-default`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </aside>

      <Form handleSubmit={handleSubmit}>
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
              onClick={handleCancelBtnClick}
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
