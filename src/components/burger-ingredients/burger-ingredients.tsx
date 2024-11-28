import BurgerIngredientsSection from "../burger-ingredients-section/burger-ingredients-section";
import BurgerIngredientsTabs from "../burger-ingredients-tabs/burger-ingredients-tabs";
import { TabValue } from "../../constants/ingredients-tabs";
import ingredientsStyles from "./burger-ingredients.module.css";
import { IngredientsType } from '../../constants/ingredients-type';
import { useMemo, useRef } from 'react';
import getSameIngredients from '../../utils/get-same-ingredients';
import { useAppSelector } from '../../services/store';

function BurgerIngredients() {
  const bunsRef = useRef<HTMLElement | null>(null);
  const sauceRef = useRef<HTMLElement | null>(null);
  const toppingRef = useRef<HTMLElement | null>(null);

  const ingredients = useAppSelector((store) => store.burgerIngredients.ingredients);

  const buns = useMemo(() => getSameIngredients(ingredients, IngredientsType.Bun), [ingredients]);
  const sauce = useMemo(() => getSameIngredients(ingredients, IngredientsType.Sauce), [ingredients]);
  const topping = useMemo(() => getSameIngredients(ingredients, IngredientsType.Main), [ingredients]);

  return (
    <div className={ingredientsStyles["burger-ingredients"]}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <BurgerIngredientsTabs bunsRef={bunsRef} sauceRef={sauceRef} toppingRef={toppingRef}/>
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
