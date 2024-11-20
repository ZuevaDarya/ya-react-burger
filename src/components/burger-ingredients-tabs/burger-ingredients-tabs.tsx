import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import {
  INGREDIENTS_TABS,
  IngredientsTabsValue,
} from "../../constants/ingredients-tabs";
import { BurgerIngredientsTabsPropsType } from "../../types/types";

function BurgerIngredientsTabs({
  bunsRef,
  sauceRef,
  toppingRef,
}: BurgerIngredientsTabsPropsType) {
  const [current, setCurrent] = useState<IngredientsTabsValue | string>(
    IngredientsTabsValue.One
  );

  const handleClick = (value: IngredientsTabsValue | string) => {
    setCurrent(value);

    switch (value) {
      case IngredientsTabsValue.One:
        bunsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case IngredientsTabsValue.Two:
        sauceRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case IngredientsTabsValue.Three:
        toppingRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        bunsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  return (
    <div className="mb-10" style={{ display: "flex" }}>
      {INGREDIENTS_TABS.map((ingredient, idx) => (
        <Tab
          value={ingredient.value}
          active={current === ingredient.value}
          onClick={() => handleClick(ingredient.value)}
          key={idx}
        >
          {ingredient.title}
        </Tab>
      ))}
    </div>
  );
}

export default BurgerIngredientsTabs;
