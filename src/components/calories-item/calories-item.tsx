import { TColoriesItemProps } from "../../types/types";
import caloriesStyles from "./calories-item.module.css";

function ColoriesItem({ name, count }: TColoriesItemProps) {
  return (
    <p className={`${caloriesStyles["calories-item"]} text text_type_main-default text_color_inactive`}>
      {name}
      <span className="text_type_digits-default">{count}</span>
    </p>
  );
}

export default ColoriesItem;
