import bunImg01 from "../images/bun-01.svg";
import bunImg02 from "../images/bun-02.svg";
import sauceImg01 from "../images/sauce-01.svg";
import sauceImg02 from "../images/sauce-02.svg";
import sauceImg03 from "../images/sauce-03.svg";
import sauceImg04 from "../images/sauce-04.svg";
import meatImg01 from "../images/meat-01.svg";
import meatImg02 from "../images/meat-02.svg";
import meatImg03 from "../images/meat-03.svg";
import meatImg04 from "../images/meat-04.svg";
import toppingImg01 from "../images/cheese.svg";
import toppingImg02 from "../images/core.svg";
import toppingImg03 from "../images/mineral rings.svg";
import toppingImg04 from "../images/salad.svg";
import toppingImg05 from "../images/sp 1.svg";

enum Price {
  BunPrice = '20',
  SaucePrice = '30',
  ToppingPrice = '80',
  MeatPrice = '300'
}

export enum ConstructorElemType {
  Top = 'top',
  Bottom = 'bottom'
}

export const INGREDIENT_BUNS = [
  {
    src: bunImg01,
    title: 'Краторная булка N-200i',
    price: Price.BunPrice,
    count: 1,
  },
  {
    src: bunImg02,
    title: 'Флюоресцентная булка R2-D3',
    price: Price.BunPrice,
  },
];

export const INGREDIENT_SAUCE = [
  {
    src: sauceImg01,
    title: 'Соус Spicy-X',
    price: Price.SaucePrice,
  },
  {
    src: sauceImg02,
    title: 'Соус фирменный Space Sauce',
    price: Price.SaucePrice,
  },
  {
    src: sauceImg03,
    title: 'Соус традиционный галактический',
    price: Price.SaucePrice,
    count: 1,
  },
  {
    src: sauceImg04,
    title: 'Соус с шипами Антарианского плоскоходца',
    price: Price.SaucePrice,
  },
];

export const INGREDIENT_TOPPING = [
  {
    src: meatImg01,
    title: 'Биокотлета из марсианской Магнолии',
    price: Price.MeatPrice,
  },
  {
    src: meatImg02,
    title: 'Мясо бессмертных моллюсков Protostomia',
    price: Price.MeatPrice,
    count: 1
  },
  {
    src: meatImg03,
    title: 'Филе Люминесцентного тетраодонтимформа',
    price: Price.MeatPrice,
  },
  {
    src: meatImg04,
    title: 'Говяжий метеорит (отбивная)',
    price: Price.MeatPrice,
  },
  {
    src: toppingImg01,
    title: 'Сыр с астероидной плесенью',
    price: Price.ToppingPrice,
  },
  {
    src: toppingImg02,
    title: 'Кристаллы марсианских альфа-сахаридов',
    price: Price.ToppingPrice,
  },
  {
    src: toppingImg03,
    title: 'Хрустящие минеральные кольца',
    price: Price.ToppingPrice,
    count: 2
  },
  {
    src: toppingImg04,
    title: 'Мини-салат Экзо-Плантаго',
    price: Price.ToppingPrice,
  },
  {
    src: toppingImg05,
    title: 'Плоды фалленианского дерева',
    price: Price.ToppingPrice,
    count: 1
  },
];

export const INGREDIENTS_IN_CONSTRUCTOR = [
  {
    title: 'Соус традиционный галактический',
    price: Price.SaucePrice,
    thumbnail: sauceImg03
  },
  {
    title: 'Мясо бессмертных моллюсков Protostomia',
    price: Price.MeatPrice,
    thumbnail: meatImg02
  },
  {
    title: 'Плоды фалленианского дерева',
    price: Price.ToppingPrice,
    thumbnail: toppingImg05
  },
  {
    title: 'Хрустящие минеральные кольца',
    price: Price.ToppingPrice,
    thumbnail: toppingImg03,
  },
  {
    title: 'Хрустящие минеральные кольца',
    price: Price.ToppingPrice,
    thumbnail: toppingImg03,
  },
];

export const INGREDIENTS_IN_CONSTRUCTOR_TOP = {
  type: ConstructorElemType.Top,
  isLocked: true,
  title: 'Краторная булка N-200i (верх)',
  price: Price.BunPrice,
  thumbnail: bunImg01
};

export const INGREDIENTS_IN_CONSTRUCTOR_BUTTOM = {
  type: ConstructorElemType.Bottom,
  isLocked: true,
  title: 'Краторная булка N-200i (низ)',
  price: Price.BunPrice,
  thumbnail: bunImg01
};

