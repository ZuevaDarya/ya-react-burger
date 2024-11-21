import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerConstructorItemPropsType } from "../../types/types";
import constructorItemStyles from "./burger-constructor-item.module.css";
import { ConstructorElemType } from "../../constants/ingredients-info";

function BurgerConstructorItem({ ingredient }: BurgerConstructorItemPropsType) {
  return (
    <div
      className={`${constructorItemStyles["burger-constructor-item"]} ${
        ingredient.type && "pr-4"
      }`}
    >
      {!ingredient.typePos && <DragIcon type="primary" />}
      <ConstructorElement
        type={ingredient.typePos}
        isLocked={ingredient.isLocked}
        text={
          ingredient.typePos === ConstructorElemType.Bottom
            ? ingredient.name + " (низ)"
            : ingredient.typePos === ConstructorElemType.Top
            ? ingredient.name + " (верх)"
            : ingredient.name
        }
        price={ingredient.price}
        thumbnail={ingredient.image}
      />
    </div>
  );
}

export default BurgerConstructorItem;
