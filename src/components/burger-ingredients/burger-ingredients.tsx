import BurgerIngredientsSection from "../burger-ingredients-section/burger-ingredients-section";
import BurgerIngredientsTabs from "../burger-ingredients-tabs/burger-ingredients-tabs";
import {
  INGREDIENT_BUNS,
  INGREDIENT_SAUCE,
  INGREDIENT_TOPPING,
} from "../../constants/ingredients-info";
import { TabValue } from "../../constants/ingredients-tabs";
import "./burger-ingredients.css";

function BurgerIngredients() {
  return (
    <div style={{ display: "grid" }}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <BurgerIngredientsTabs />
      <div className="ingredients-section-container">
        <BurgerIngredientsSection
          title={TabValue.Bun}
          ingredients={INGREDIENT_BUNS}
        />
        <BurgerIngredientsSection
          title={TabValue.Sauce}
          ingredients={INGREDIENT_SAUCE}
        />
        <BurgerIngredientsSection
          title={TabValue.Topping}
          ingredients={INGREDIENT_TOPPING}
        />
      </div>
    </div>
  );
}

export default BurgerIngredients;
