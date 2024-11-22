import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import cardStyles from "./ingredient-card.module.css";
import Price from "../price/price";
import { IngredientCardPropsType } from "../../types/types";
import { useCallback, useEffect, useState } from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";

function IngredientCard({ ingredient }: IngredientCardPropsType) {
  const [count, setCount] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onClose = useCallback(() => setIsModalOpen(false), []);

  const handleKeydown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    }
  }, []); 

  const handleDoubleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setCount((prev) => prev + 1);
  };

  const hadleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsModalOpen(true);
  }

  return (
    <>
      {isModalOpen && <ModalOverlay isTitle={true} onClose={onClose} />}
      <div
        className={`pl-4 pr-4 ${cardStyles["ingredient-card"]}`}
        onDoubleClick={handleDoubleClick}
        onClick={hadleClick}
      >
        <img src={ingredient.image} alt={ingredient.name} />
        <Price price={ingredient.price} classes="text_type_digits-default" />
        <p
          className={`text text_type_main-small ${cardStyles["ingredient-card-title"]}`}
        >
          {ingredient.name}
        </p>
        {count !== 0 && (
          <Counter count={count} size="default" extraClass="m-1" />
        )}
      </div>
    </>
  );
}

export default IngredientCard;
