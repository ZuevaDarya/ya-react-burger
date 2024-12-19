import IngredientDetails from '../../components/ingredient-details.tsx/ingredient-details';

function IngredientPage() {
  return (
    <main>
      <div className="page-container">
        <h1 className="text text_type_main-large">Детали ингредиента</h1>
        <IngredientDetails />
      </div>
    </main>
  );
}

export default IngredientPage;
