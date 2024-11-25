import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import {
  INGREDIENTS_TABS,
  IngredientsTabsValue,
} from "../../constants/ingredients-tabs";
import { BurgerIngredientsTabsPropsType } from "../../types/types";
import tabsStyles from "./burger-ingredients-tabs.module.css";

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
    <div className={`${tabsStyles["tabs-container"]} mb-10`}>
      {INGREDIENTS_TABS.map((tab, idx) => (
        <Tab
          value={tab.value}
          active={current === tab.value}
          onClick={() => handleClick(tab.value)}
          key={idx}
        >
          {tab.title}
        </Tab>
      ))}
    </div>
  );
}

export default BurgerIngredientsTabs;
