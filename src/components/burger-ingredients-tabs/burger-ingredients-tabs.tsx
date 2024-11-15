import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { INGREDIENTS_TABS, IngredientsTabsValue } from "../../constants/ingredients-tabs";

function BurgerIngredientsTabs() {
  const [current, setCurrent] = useState<IngredientsTabsValue | string>(IngredientsTabsValue.One);

  return (
    <div className="mb-10" style={{ display: "flex" }}>
      {INGREDIENTS_TABS.map((ingredient, idx) => (
        <Tab value={ingredient.value} active={current === ingredient.value} onClick={setCurrent} key={idx}>
          {ingredient.title}
        </Tab>
      ))}
    </div>
  );
}

export default BurgerIngredientsTabs;
