import BurgerIngredientsSection from '../burger-ingredients-section/burger-ingredients-section';
import BurgerIngredientsTabs from '../burger-ingredients-tabs/burger-ingredients-tabs';

function BurgerIngredients() {
  return (
    <div>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <BurgerIngredientsTabs />
      <div className="">
        <BurgerIngredientsSection title='Булки'/>
      </div>
    </div>
  );
}

export default BurgerIngredients;
