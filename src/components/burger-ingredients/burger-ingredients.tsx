import { useMemo, useRef, useState } from "react";
import {
  IngredientsTabsValue,
  TabValue,
} from "../../constants/ingredients-tabs";
import { IngredientsType } from "../../constants/ingredients-type";
import { TextCssType } from '../../constants/text-css-type';
import { useAppSelector } from "../../services/store";
import fillHashTable from "../../utils/functions/fill-hash-table";
import getSameIngredients from "../../utils/functions/get-same-ingredients";
import BurgerIngredientsSection from "../burger-ingredients-section/burger-ingredients-section";
import BurgerIngredientsTabs from "../burger-ingredients-tabs/burger-ingredients-tabs";
import Spinner from "../spinner/spinner";
import Title from '../title/title';
import ingredientsStyles from "./burger-ingredients.module.css";

function BurgerIngredients() {
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const bunsRef = useRef<HTMLElement | null>(null);
  const sauceRef = useRef<HTMLElement | null>(null);
  const toppingRef = useRef<HTMLElement | null>(null);

  const [current, setCurrent] = useState<IngredientsTabsValue | string>(
    IngredientsTabsValue.One
  );

  const { isRequest, isSuccess } = useAppSelector((store) => store.burgerIngredients);
  const allIngredients = useAppSelector((store) => store.burgerIngredients.ingredients);
  const { ingredients, bun } = useAppSelector((store) => store.constructorIngredients);

  const ingredientsCountHashTable = fillHashTable(
    allIngredients,
    ingredients,
    bun
  );

  const buns = useMemo(
    () => getSameIngredients(allIngredients, IngredientsType.Bun),
    [allIngredients]
  );
  const sauce = useMemo(
    () => getSameIngredients(allIngredients, IngredientsType.Sauce),
    [allIngredients]
  );
  const topping = useMemo(
    () => getSameIngredients(allIngredients, IngredientsType.Main),
    [allIngredients]
  );

  const handleScroll = () => {
    if (
      tabsRef.current &&
      bunsRef.current &&
      sauceRef.current &&
      toppingRef.current
    ) {
      const tabsBottomPos = tabsRef.current.getBoundingClientRect().bottom;
      const bunsTopPos = bunsRef.current.getBoundingClientRect().top;
      const sauceTopPos = sauceRef.current.getBoundingClientRect().top;
      const toppingTopPos = toppingRef.current.getBoundingClientRect().top;

      const bunsDistance = Math.abs(tabsBottomPos - bunsTopPos);
      const sauceDistance = Math.abs(tabsBottomPos - sauceTopPos);
      const toppingDistance = Math.abs(tabsBottomPos - toppingTopPos);

      if (bunsDistance < sauceDistance && bunsDistance < toppingDistance) {
        setCurrent(IngredientsTabsValue.One);
      } else if (
        sauceDistance < bunsDistance &&
        sauceDistance < toppingDistance
      ) {
        setCurrent(IngredientsTabsValue.Two);
      } else {
        setCurrent(IngredientsTabsValue.Three);
      }
    }
  };

  return (
    <div className={ingredientsStyles["burger-ingredients"]}>
      <Title type={TextCssType.TextLarge} classes="mt-10 mb-5">Соберите бургер</Title>
      <BurgerIngredientsTabs
        ref={tabsRef}
        bunsRef={bunsRef}
        sauceRef={sauceRef}
        toppingRef={toppingRef}
        current={current}
        setCurrent={setCurrent}
      />
      {isRequest && (
        <div className={ingredientsStyles["spinner-block"]}>
          <Spinner />
        </div>
      )}
      {isSuccess && (
        <div
          className={ingredientsStyles["ingredients-section"]}
          onScroll={handleScroll}
        >
          <BurgerIngredientsSection
            ref={bunsRef}
            title={TabValue.Bun}
            ingredients={buns}
            hashTable={ingredientsCountHashTable}
          />
          <BurgerIngredientsSection
            ref={sauceRef}
            title={TabValue.Sauce}
            ingredients={sauce}
            hashTable={ingredientsCountHashTable}
          />
          <BurgerIngredientsSection
            ref={toppingRef}
            title={TabValue.Topping}
            ingredients={topping}
            hashTable={ingredientsCountHashTable}
          />
        </div>
      )}
    </div>
  );
}

export default BurgerIngredients;
