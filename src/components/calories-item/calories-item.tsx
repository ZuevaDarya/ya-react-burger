import { ColoriesItemPropsType } from "../../types/types";
import caloriesStyles from "./calories-item.module.css";

function ColoriesItem({
  nameCalories,
  numCalories,
}: ColoriesItemPropsType) {
  return (
    <p className={`${caloriesStyles["calories-item"]} text text_type_main-default text_color_inactive`}>
      {nameCalories}
      <span className="text_type_digits-default">{numCalories}</span>
    </p>
  );
}

export default ColoriesItem;
