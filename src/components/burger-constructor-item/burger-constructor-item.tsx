import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  TBurgerConstructorItemProps,
  TConstructorElementDrag,
} from "../../types/types";
import constructorItemStyles from "./burger-constructor-item.module.css";
import { memo, useRef } from "react";
import { ConstructorElemType } from "../../constants/ingredients-type";
import { useAppDispatch } from "../../services/store";
import {
  removeIngredientFromConstructor,
  swapIngredients,
} from "../../services/slices/constructor-ingredients-slice";
import { useDrag, useDrop, XYCoord } from "react-dnd";

function BurgerConstructorItem({
  uuid,
  ingredient,
  isLocked,
  typePos,
  idx,
}: TBurgerConstructorItemProps) {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement | null>(null);

  const [{ handlerId, isDrag }, dragRef] = useDrag({
    type: isLocked ? "bun" : "constructor-ingredient",
    item: { uuid, ingredient, idx },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  });

  const [, dropRef] = useDrop<TConstructorElementDrag, void>({
    accept: "constructor-ingredient",
    hover: (item: TConstructorElementDrag, monitor) => {
      if (!ref.current) return;

      const dragIndex = item.idx;
      const hoverIndex = idx;

      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      dispatch(swapIngredients({ toIndex: dragIndex, fromIndex: hoverIndex }));
      item.idx = hoverIndex;
    },
  });

  const handleClose = () => {
    dispatch(removeIngredientFromConstructor(uuid as string));
  };

  dragRef(dropRef(ref));

  const opacity = isDrag ? 0 : 1;

  return (
    <div
      className={`
          ${constructorItemStyles["burger-constructor-item"]} 
          ${!isLocked && "pr-4"} 
          ${isLocked && "ml-8"}
        `}
      style={{ opacity }}
      ref={ref}
      data-handler-id={handlerId}
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
