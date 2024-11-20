import { BurgerIngredientsSectionPropsType } from "../../types/types";
import IngredientCard from '../ingredient-card/ingredient-card';
import sectionStyles from "./burger-ingredients-section.module.css";

function BurgerIngredientsSection({
  title,
  ingredients
}: BurgerIngredientsSectionPropsType) {
  return (
    <section className="mb-10">
      <h2 className="text text_type_main-medium">{title}</h2>
      <div className={`pt-6 pl-4 pr-4 ${sectionStyles["burger-ingredients-container"]}`}>
        {
          ingredients.map((ingredient, idx) => (
            <IngredientCard key={idx} ingredient={ingredient} />
          ))
        }
      </div>
    </section>
  );
}

export default BurgerIngredientsSection;
