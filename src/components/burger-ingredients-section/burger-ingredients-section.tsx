import { forwardRef, memo } from "react";
import { TextCssType } from "../../constants/text-css-type";
import { TBurgerIngredientsSectionProps } from "../../types/types";
import IngredientCard from "../ingredient-card/ingredient-card";
import Subtitle from "../subtitle/subtitle";
import sectionStyles from "./burger-ingredients-section.module.css";

const BurgerIngredientsSection = forwardRef<HTMLElement, TBurgerIngredientsSectionProps>(
  ({ title, ingredients, hashTable }, ref) => {
    return (
      <section className="mb-10" ref={ref}>
        <Subtitle type={TextCssType.TextMedium}>{title}</Subtitle>
        <div className={`pt-6 pl-4 pr-4 ${sectionStyles["burger-ingredients-container"]}`}>
          {ingredients.map((ingredient, idx) => (
            <IngredientCard
              key={ingredient._id}
              ingredient={ingredient}
              count={hashTable[ingredient._id]}
              testId={`${ingredient.type}-${idx}`}
            />
          ))}
        </div>
      </section>
    );
  }
);

export default memo(BurgerIngredientsSection);
