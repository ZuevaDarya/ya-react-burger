import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerConstructorItemPropsType } from "../../types/types";
import constructorItemStyles from "./burger-constructor-item.module.css";
import { memo } from "react";
import { ConstructorElemType } from "../../constants/ingredients-type";
import { useAppDispatch } from "../../services/store";
import { removeIngredientFromConstructor } from "../../services/slices/constructor-ingredients-slice";

function BurgerConstructorItem({
  uuid,
  ingredient,
  isLocked,
  typePos,
}: BurgerConstructorItemPropsType) {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(removeIngredientFromConstructor(uuid as string));
  };

  return (
    <div
      className={`
        ${constructorItemStyles["burger-constructor-item"]} 
        ${!isLocked && "pr-4"} 
        ${isLocked && "ml-8"}
      `}
    >
      {!typePos && (
        <DragIcon type="primary" className={constructorItemStyles.icon} />
      )}
      <ConstructorElement
        type={typePos}
        isLocked={isLocked}
        text={
          typePos === ConstructorElemType.Bottom
            ? ingredient.name + " (низ)"
            : typePos === ConstructorElemType.Top
            ? ingredient.name + " (верх)"
            : ingredient.name
        }
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={handleClose}
      />
    </div>
  );
}

export default memo(BurgerConstructorItem);
