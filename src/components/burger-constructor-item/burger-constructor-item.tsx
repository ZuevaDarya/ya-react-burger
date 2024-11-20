import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerConstructorItemPropsType } from "../../types/types";
import constructorItemStyles from "./burger-constructor-item.module.css";

function BurgerConstructorItem({ ingredient }: BurgerConstructorItemPropsType) {
  return (
    <div className={`${constructorItemStyles["burger-constructor-item"]} ${ingredient.type && "pr-4"}`}>
      {!ingredient.type && <DragIcon type="primary" />}
      <ConstructorElement
        type={ingredient.type}
        isLocked={ingredient.isLocked}
        text={ingredient.title}
        price={Number(ingredient.price)}
        thumbnail={ingredient.thumbnail}
      />
    </div>
  );
}

export default BurgerConstructorItem;
