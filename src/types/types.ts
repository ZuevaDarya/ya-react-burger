import { ConstructorElemType } from '../constants/ingredients-info';
import { IngredientsType } from '../constants/ingredients-type';

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

export type BurgerIngredientsSectionPropsType = {
  ref: React.MutableRefObject<HTMLElement | null>;
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

export type IngredientType = {
  _id: string;
  name: string;
  type: IngredientsType;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
}

export type BurgerIngredientsPropsType = {
  ingredients: IngredientType[];
}


