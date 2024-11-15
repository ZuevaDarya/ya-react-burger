import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerImg from "../../images/bun-01.svg";
import "./burger-ingredients-section.css";

type BurgerIngredientsSectionPropsType = {
  title: string;
};

function BurgerIngredientsSection({
  title,
}: BurgerIngredientsSectionPropsType) {
  return (
    <section>
      <h2 className="text text_type_main-medium">{title}</h2>
      <div className="pt-6 pl-4 pr-4 burger-ingredients-container">
        <div className="pl-4 pr-4 ingredient-card">
          <img src={burgerImg} alt="" />
          <div className="pt-1 pb-1 ingredient-card-price">
            <span className="text text_type_digits-default">20</span>
            <CurrencyIcon type="primary" />
          </div>
          <p className="text text_type_main-small ingredient-card-title">Краторная булка N-200i</p>
        </div>
      </div>
    </section>
  );
}

export default BurgerIngredientsSection;
