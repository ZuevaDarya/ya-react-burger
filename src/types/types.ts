import { API_PATHS } from '../constants/api-constants';
import { AppRoute } from '../constants/app-route';
import { IngredientsTabsValue } from '../constants/ingredients-tabs';
import { ConstructorElemType, IngredientsType } from '../constants/ingredients-type';
import { IngredientConstructorSliceType } from './services-types';

export type NavListPropsType = {
  children: React.ReactNode;
};

export type NavLinkPropsType = {
  linkText: string;
  linkHref: string;
  isActive: boolean;
  classes?: string;
  children?: React.ReactNode;
};

export type ScrollTabsRefType = React.MutableRefObject<HTMLElement | null>;

export type HashTableType = {
  [x: string]: number;
};

export type BurgerIngredientsSectionPropsType = {
  title: string;
  ingredients: IngredientType[];
  hashTable: HashTableType;
};

export type PricePropsType = Pick<IngredientType, "price"> & {
  classes?: string;
};

export type IngredientCardPropsType = {
  ingredient: IngredientType;
  count: number;
};

export type BurgerConstructorItemType = IngredientType & {
  typePos?: ConstructorElemType;
  isLocked?: boolean;
};

export type BurgerConstructorItemPropsType = {
  ingredient: BurgerConstructorItemType;
  isLocked?: boolean;
  typePos?: ConstructorElemType;
  uuid?: string;
  idx: number;
};

export type ConstructorElementDragType = IngredientConstructorSliceType & {
  idx: number;
}

export type IngredientType = {
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

export type BurgerIngredientsPropsType = {
  ingredients: IngredientType[];
};

export type BurgerIngredientsTabsPropsType = {
  bunsRef: ScrollTabsRefType;
  sauceRef: ScrollTabsRefType;
  toppingRef: ScrollTabsRefType;
  current: IngredientsTabsValue | string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
};

export type BurgerConstructorPropsType = {
  ingredients: BurgerConstructorItemType[];
}

export type ModalPropsType = {
  isTitle: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export type ModalOverlayPropsType = Pick<ModalPropsType, "onClose">;

export type IngredientDetailsPropsType = {
  ingredient: IngredientType;
};

export type ColoriesItemPropsType = {
  nameCalories: string;
  numCalories: number;
};

export type OrderDetailsPropsType = {
  orderId: number;
};

export type BurgerTemplatePropsType = {
  text: string;
  type?: ConstructorElemType;
  isHover?: boolean;
};

export type FillHashTableFuncType = (x: IngredientType[], y: IngredientConstructorSliceType[], z?: IngredientType | null) => HashTableType;

type ApiPathsKeys = keyof typeof API_PATHS;
export type  ApiPathsType = typeof API_PATHS[ApiPathsKeys];

export type FormPropsType = {
  title?: string;
  children: React.ReactNode;
};

export type FormLinkPropsType = {
  route: AppRoute;
  preText?: string;
  linkText: string;
};

export type LoginFormType = {
  email: string;
  password: string;
};

export type RegistrationFormType = LoginFormType & {
  name: string;
};

export type ForgotPasswordFormType = {
  email: string;
}
