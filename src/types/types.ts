import { ConstructorElemType, IngredientsType } from '../constants/ingredients-type';

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

export type BurgerIngredientsSectionPropsType = {
  title: string;
  ingredients: IngredientType[];
};

export type PricePropsType = Pick<IngredientType, "price"> & {
  classes?: string;
};

export type IngredientCardPropsType = {
  ingredient: IngredientType;
};

export type BurgerConstructorItemType = IngredientType & {
  typePos?: ConstructorElemType;
  isLocked?: boolean;
};

export type BurgerConstructorItemPropsType = {
  ingredient: BurgerConstructorItemType;
};

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
}

export type ColoriesItemPropsType = {
  nameCalories: string;
  numCalories: number;
}

export type OrderDetailsPropsType = {
  orderId: string;
}
