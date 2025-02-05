import BurgerConstructorItem from "../burger-constructor-item/burger-constructor-item";
import Price from "../price/price";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorStyles from "./burger-constructor.module.css";
import { ConstructorElemType, IngredientsType } from "../../constants/ingredients-type";
import { useModal } from "../../hooks/useModal";
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import { useAppDispatch, useAppSelector } from "../../services/store";
import BurgerTemplate from "../burger-template/burger-template";
import { useDrop } from "react-dnd";
import { addBunInConstrucor, addIngredientInConstructor, clearConstructor} from "../../services/slices/constructor-ingredients-slice";
import { TIngredient } from "../../types/types";
import { useMemo } from 'react';
import { createOrder } from '../../services/thunks';
import { clearOrder } from '../../services/slices/order-details-slice';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route';
import { ModalType } from '../../constants/modal-type';
import { TEXT_CSS, TextCssType } from "../../constants/text-css-type";

function BurgerConstructor() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { ingredients, bun } = useAppSelector(store => store.constructorIngredients);
  const user = useAppSelector(store => store.userInfo.user);

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    drop(ingredient: TIngredient) {
      if (ingredient.type === IngredientsType.Bun) {
        dispatch(addBunInConstrucor(ingredient));
      } else {
        dispatch(addIngredientInConstructor(ingredient));
      }
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const onClose = () => {
    closeModal();
    dispatch(clearConstructor());
    dispatch(clearOrder());
  }

  const ingredientsIds = useMemo(() => {
    if (bun) {
      return [
        bun._id,
        ...ingredients.map(({ ingredient }) => ingredient._id),
        bun._id
      ];
    } else {
      return ingredients.map(({ ingredient }) => ingredient._id);
    }
  }, [ingredients, bun]);

  const hadleClick = (e: React.SyntheticEvent<Element, Event>) => {
    e.stopPropagation();

    if (!user) {
      navigate(AppRoute.Login);
    }
    dispatch(createOrder(ingredientsIds));
    openModal();
  };

  const totalPrice = useMemo(() => {
    let sum = 0;

    if (bun) {
      sum = bun.price * 2;
    }

    return ingredients.reduce((sum, { ingredient }) => sum += ingredient.price, sum);
  }, [ingredients, bun]);

  return (
    <>
      {isModalOpen && (
        <Modal onClose={onClose} type={ModalType.CreateOrder}>
          <OrderDetails />
        </Modal>
      )}

      <div
        ref={dropTarget}
        className={`pt-25 pl-4 ${burgerConstructorStyles["burger-constructor"]}`}
      >
        <div className={`${burgerConstructorStyles["burger-constructor-list"]}`}>
          {!bun && <BurgerTemplate text="булку" type={ConstructorElemType.Top} isHover={isHover} />}
          {bun && <BurgerConstructorItem ingredient={bun} isLocked={true}  typePos={ConstructorElemType.Top} idx={-1} />}

          <div className={`${burgerConstructorStyles["burger-constructor-list"]}`}>
            {ingredients.length === 0 && <BurgerTemplate text="начинку" isHover={isHover} />}
            {ingredients.length !== 0 &&
              ingredients.map(({ uuid, ingredient }, idx) => (
                <BurgerConstructorItem
                  key={uuid}
                  uuid={uuid}
                  ingredient={ingredient}
                  idx={idx}
                />
              ))}
          </div>
          {!bun && <BurgerTemplate text="булку" type={ConstructorElemType.Bottom} isHover={isHover} /> }
          {bun && <BurgerConstructorItem ingredient={bun} isLocked={true} typePos={ConstructorElemType.Bottom} idx={-2} />}
        </div>

        <div className={burgerConstructorStyles["constructor-price-container"]}>
          <Price price={totalPrice} classes={`${TEXT_CSS[TextCssType.DigitsMedium]}`} />
          <Button
            htmlType="button"
            type="primary"
            size="large"
            onClick={hadleClick}
            disabled={ingredients.length === 0 && !bun ? true : false}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </>
  );
}

export default BurgerConstructor;
