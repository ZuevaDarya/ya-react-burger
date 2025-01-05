import { forwardRef, memo } from "react";
import { TBurgerIngredientsSectionProps } from "../../types/types";
import IngredientCard from "../ingredient-card/ingredient-card";
import sectionStyles from "./burger-ingredients-section.module.css";

const BurgerIngredientsSection = forwardRef<HTMLElement, TBurgerIngredientsSectionProps>(
  ({ title, ingredients, hashTable }, ref) => {
    return (
      <section className="mb-10" ref={ref}>
        <h2 className="text text_type_main-medium">{title}</h2>
        <div className={`pt-6 pl-4 pr-4 ${sectionStyles["burger-ingredients-container"]}`}>
          {ingredients.map((ingredient) => (
            <IngredientCard
              key={ingredient._id}
              ingredient={ingredient}
              count={hashTable[ingredient._id]}
            />
          ))}
        </div>
      </section>
    );
});

export default memo(BurgerIngredientsSection);
