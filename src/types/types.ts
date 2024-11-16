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

export type IngredientCardPricePropsType = Pick<IngredientType, "price">;

export type IngredientCardPropsType = {
  ingredient: IngredientType;
};
