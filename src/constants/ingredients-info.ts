import bunImg01 from "../images/bun-01.svg";
import sauceImg03 from "../images/sauce-03.svg";
import meatImg02 from "../images/meat-02.svg";
import toppingImg03 from "../images/mineral rings.svg";
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
