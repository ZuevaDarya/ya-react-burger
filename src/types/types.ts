import { ConstructorElemType } from '../constants/ingredients-info';

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

export type IngredientType = {
  src: string;
  price: string;
  title: string;
  count?: number;
};

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

export type BurgerConstructorItemType = {
  type?: ConstructorElemType;
  isLocked?: boolean;
  title: string;
  price: string;
  thumbnail: string;
};

export type BurgerConstructorItemPropsType = {
  ingredient: BurgerConstructorItemType;
};
