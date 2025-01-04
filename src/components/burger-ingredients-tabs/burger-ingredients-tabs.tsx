import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { forwardRef } from "react";
import {
  INGREDIENTS_TABS,
  IngredientsTabsValue,
} from "../../constants/ingredients-tabs";
import { TBurgerIngredientsTabsProps } from "../../types/types";
import tabsStyles from "./burger-ingredients-tabs.module.css";

const BurgerIngredientsTabs = forwardRef<HTMLDivElement, TBurgerIngredientsTabsProps>(({ 
  bunsRef,
  sauceRef,
  toppingRef,
  current,
  setCurrent
}, ref) => {
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
    <div ref={ref} className={`${tabsStyles["tabs-container"]} mb-10`}>
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
});

export default BurgerIngredientsTabs;
