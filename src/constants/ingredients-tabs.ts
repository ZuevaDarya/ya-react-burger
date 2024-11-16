export enum IngredientsTabsValue {
  One = 'one',
  Two = 'two',
  Three = 'three',
};

export enum TabValue {
  Bun = 'Булки',
  Sauce = 'Соусы',
  Topping = 'Начинки',
};

export const INGREDIENTS_TABS = [
  {
    title: TabValue.Bun,
    value: IngredientsTabsValue.One
  },
  {
    title: TabValue.Sauce,
    value: IngredientsTabsValue.Two
  },
  {
    title: TabValue.Topping,
    value: IngredientsTabsValue.Three
  }
];
