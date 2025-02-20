import { API_PATHS } from "../constants/api-constants";
import { AppRoute } from "../constants/app-route";
import { IngredientsTabsValue } from "../constants/ingredients-tabs";
import { ConstructorElemType, IngredientsType } from "../constants/ingredients-type";
import { ModalType } from "../constants/modal-type";
import { TextCssType } from "../constants/text-css-type";
import { TFeedOrder, TIngredientConstructorSlice } from "./services-types";

export type TNavListProps = {
  children: React.ReactNode;
};

export type TNavLinkProps = {
  route: AppRoute;
  classes?: string;
  linkClasses?: string;
  children?: React.ReactNode;
  isProfileLink?: boolean;
};

export type TScrollTabsRef = React.MutableRefObject<HTMLElement | null>;

export type THashTable = {
  [x: string]: number;
};

export type TBurgerIngredientsSectionProps = {
  title: string;
  ingredients: TIngredient[];
  hashTable: THashTable;
};

export type TPriceProps = Pick<TIngredient, "price"> & {
  classes?: string;
};

export type TIngredientCardProps = {
  ingredient: TIngredient;
  count: number;
  testId?: string;
};

export type TBurgerConstructorItemProps = {
  ingredient: TIngredient;
  isLocked?: boolean;
  typePos?: ConstructorElemType;
  uuid?: string;
  idx: number;
};

export type TConstructorElementDrag = TIngredientConstructorSlice & {
  idx: number;
};

export type TIngredient = {
  _id: string;
  name: string;
  type: IngredientsType | string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

export type TBurgerIngredientsProps = {
  ingredients: TIngredient[];
};

export type TBurgerIngredientsTabsProps = {
  bunsRef: TScrollTabsRef;
  sauceRef: TScrollTabsRef;
  toppingRef: TScrollTabsRef;
  current: IngredientsTabsValue | string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
};

export type TBurgerConstructorProps = {
  ingredients: TIngredient[];
};

export type TModalProps = {
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
  type: ModalType;
};

export type TModalOverlayProps = Pick<TModalProps, "onClose">;

export type TColoriesItemProps = {
  name: string;
  count: number;
};

export type TBurgerTemplateProps = {
  text: string;
  type?: ConstructorElemType;
  isHover?: boolean;
};

export type TFillHashTableFunc = (
  x: TIngredient[],
  y: TIngredientConstructorSlice[],
  z?: TIngredient | null
) => THashTable;

type ApiPathsKeys = keyof typeof API_PATHS;
export type TApiPaths = (typeof API_PATHS)[ApiPathsKeys];

export type TFormProps = {
  title?: string;
  children: React.ReactNode;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type TFormLinkProps = {
  route: AppRoute;
  preText?: string;
  linkText: string;
};

export type TLoginForm = {
  email: string;
  password: string;
};

export type TRegistrationForm = TLoginForm & {
  name: string;
};

export type TForgotPasswordForm = {
  email: string;
};

export type TResetPasswordForm = {
  password: string;
  token: string;
};

export type TProfileForm = TRegistrationForm;

export type TProtectedRouteProps = {
  withAuth: boolean;
  children: React.ReactNode;
};

export type TFeedStatisticProps = {
  title: string;
  count: number;
};

export type TFeedOrdersIdListProps = {
  orders: number[];
};

export type TFeedOrdersIdBlockProps = TFeedOrdersIdListProps & {
  title: string;
  isDone: boolean;
};

export type TFeedOrdersBlockProps = {
  classes?: string;
  children: React.ReactNode;
};

export type TOrderStatusProps = {
  status: string;
};

export type TFeedCardProps = {
  orderStatus?: string;
  route: AppRoute;
  order: TFeedOrder;
};

export type TTitleProps = {
  children: React.ReactNode;
  type: TextCssType;
  classes?: string;
  testId?: string;
};

export type TSubtitleProps = TTitleProps;

export type TTextProps = TTitleProps;

export type TSpanProps = Omit<TTitleProps, "children"> & {
  children?: React.ReactNode;
};

export type TFeedIngredientProps = {
  ingredient: Omit<TIngredient, "_id">;
  count?: number;
};

export type TModalFeedCardProps = {
  ingredientId: string;
  count: number;
};
