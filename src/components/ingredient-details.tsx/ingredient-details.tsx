import { IngredientDetailsPropsType } from "../../types/types";
import ColoriesItem from '../calories-item/calories-item';
import detailStyles from "./ingredient-details.module.css";

function IngredientDetails({ ingredient }: IngredientDetailsPropsType) {
  return (
    <div className={detailStyles["ingredient-details"]}>
      <img className={`${detailStyles["ingredient-img"]} mb-4`} src={ingredient.image_large} alt={ingredient.name} />
      <p className="text text_type_main-medium mb-8">{ingredient.name}</p>

      <div className={detailStyles["calories-info"]}>
        <ColoriesItem nameCalories="Калории,ккал" numCalories={ingredient.calories} />
        <ColoriesItem nameCalories="Белки,г" numCalories={ingredient.proteins} />
        <ColoriesItem nameCalories="Жиры,г" numCalories={ingredient.fat} />
        <ColoriesItem nameCalories="Углеводы,г" numCalories={ingredient.carbohydrates} />
      </div>
    </div>
  );
}

export default IngredientDetails;
