import { ConstructorElemType } from "../../constants/ingredients-info";
import BurgerConstructorItem from "../burger-constructor-item/burger-constructor-item";
import Price from "../price/price";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorStyles from "./burger-constructor.module.css";
import { BurgerConstructorPropsType } from "../../types/types";
import { IngredientsType } from "../../constants/ingredients-type";
import getSameIngredients from "../../utils/get-same-ingredients";
import { useState } from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import OrderDetails from "../order-details/order-details";

function BurgerConstructor({ ingredients }: BurgerConstructorPropsType) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const bun = getSameIngredients(ingredients, IngredientsType.Bun)[0];
  const buns = [
    { ...bun, isLocked: true, typePos: ConstructorElemType.Top },
    { ...bun, isLocked: true, typePos: ConstructorElemType.Bottom },
  ];
  const otherIngredients = ingredients.filter(
    (ingredients) => ingredients.type !== IngredientsType.Bun
  );

  const onClose = () => setIsModalOpen(false);

  const hadleClick = (e: React.SyntheticEvent<Element, Event>) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && (
        <ModalOverlay isTitle={false} onClose={onClose}>
          <OrderDetails orderId='034536' />
        </ModalOverlay>
      )}

      <div className={`pt-25 pl-4 ${burgerConstructorStyles["burger-constructor"]}`}>
        <div className={`${burgerConstructorStyles["burger-constructor-list"]}`}>
          {buns && <BurgerConstructorItem ingredient={buns[0]} />}
          <div className={`${burgerConstructorStyles["burger-constructor-list"]}`}>
            {otherIngredients.map((ingredient) => (
              <BurgerConstructorItem key={ingredient._id} ingredient={ingredient} />
            ))}
          </div>
          {buns && <BurgerConstructorItem ingredient={buns[1]} />}
        </div>
        <div className={burgerConstructorStyles["constructor-price-container"]}>
          <Price price={610} classes="text_type_digits-medium" />
          <Button htmlType="button" type="primary" size="large" onClick={hadleClick}>
            Оформить заказ
          </Button>
        </div>
      </div>
    </>
  );
}

export default BurgerConstructor;
