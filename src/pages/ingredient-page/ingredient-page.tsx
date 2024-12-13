import IngredientDetails from '../../components/ingredient-details.tsx/ingredient-details';
import { INGREDIENTS_IN_CONSTRUCTOR } from '../../utils/data/ingredients-info';

function IngredientPage() {
  return (
    <main>
      <div className="page-container">
        <h1 className="text text_type_main-large">Детали ингредиента</h1>
        <IngredientDetails ingredient={INGREDIENTS_IN_CONSTRUCTOR[0]}/>
      </div>
      
    </main>
  );
}

export default IngredientPage;
