import IngredientDetails from "../../components/ingredient-details.tsx/ingredient-details";
import Title from "../../components/title/title";
import { TextCssType } from "../../constants/text-css-type";

function IngredientPage() {
  return (
    <main>
      <div className="page-container">
        <Title type={TextCssType.TextLarge}>Детали ингредиента</Title>
        <IngredientDetails />
      </div>
    </main>
  );
}

export default IngredientPage;
