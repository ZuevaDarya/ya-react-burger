import BurgerIngredientsSection from "../burger-ingredients-section/burger-ingredients-section";
import BurgerIngredientsTabs from "../burger-ingredients-tabs/burger-ingredients-tabs";
import { TabValue } from "../../constants/ingredients-tabs";
import ingredientsStyles from "./burger-ingredients.module.css";
import { BurgerIngredientsPropsType } from '../../types/types';
import { IngredientsType } from '../../constants/ingredients-type';
import { useRef } from 'react';

function BurgerIngredients({ ingredients }: BurgerIngredientsPropsType) {
  const bunsRef = useRef<HTMLElement | null>(null);
  const sauceRef = useRef<HTMLElement | null>(null);
  const toppingRef = useRef<HTMLElement | null>(null);

  const buns = ingredients.filter(ingredient => ingredient.type === IngredientsType.Bun);
  const sauce = ingredients.filter(ingredient => ingredient.type === IngredientsType.Sauce);
  const topping = ingredients.filter(ingredient => ingredient.type === IngredientsType.Main);

  return (
    <div className={ingredientsStyles["burger-ingredients"]}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <BurgerIngredientsTabs />
      <div className={ingredientsStyles["ingredients-section"]}>
        <BurgerIngredientsSection
          ref={bunsRef}
          title={TabValue.Bun}
          ingredients={buns}
        />
        <BurgerIngredientsSection
          ref={sauceRef}
          title={TabValue.Sauce}
          ingredients={sauce}
        />
        <BurgerIngredientsSection
          ref={toppingRef}
          title={TabValue.Topping}
          ingredients={topping}
        />
      </div>
    </div>
  );
}

export default BurgerIngredients;
