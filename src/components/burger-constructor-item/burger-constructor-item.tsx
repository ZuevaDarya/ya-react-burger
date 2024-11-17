import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerConstructorItemPropsType } from "../../types/types";
import "./burger-constructor-item.css";

function BurgerConstructorItem({ ingredient }: BurgerConstructorItemPropsType) {
  return (
    <li className="burger-constructor-item">
      {!ingredient.type && <DragIcon type="primary" />}
      <ConstructorElement
        type={ingredient.type}
        isLocked={ingredient.isLocked}
        text={ingredient.title}
        price={Number(ingredient.price)}
        thumbnail={ingredient.thumbnail}
      />
    </li>
  );
}

export default BurgerConstructorItem;
