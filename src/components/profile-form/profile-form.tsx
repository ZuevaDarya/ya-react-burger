import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../form/form";
import { InputName } from "../../constants/input-name";
import { useForm } from "../../hooks/useForm";
import { updateUser } from "../../services/thunks";
import { ProfileFormType } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../services/store";
import profileStyles from "./profile-form.module.css";

function ProfileForm() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userInfo);

  const {
    formData,
    setFormData,
    handleChangeInput,
    isChangedData,
    setIsChangedData,
  } = useForm<ProfileFormType>({
    name: user ? user.name : "",
    email: user ? user.email : "",
    password: "",
  });

  const handleCancelBtnClick = () => {
    setIsChangedData(false);
    if (user) {
      setFormData({ ...user, password: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(updateUser(formData));
    setIsChangedData(false);
    setFormData(prev => ({...prev, password: ""}));
  };

  return (
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
        required
      />
      <EmailInput
        onChange={handleChangeInput}
        value={formData.email}
        name={InputName.Email}
        placeholder="Логин"
        isIcon={true}
        disabled={false}
        required
      />
      <PasswordInput
        onChange={handleChangeInput}
        value={formData.password}
        name={InputName.Password}
        placeholder="Пароль"
        icon="EditIcon"
        disabled={false}
        autoComplete="new-password"
        required
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
  );
}

export default ProfileForm;