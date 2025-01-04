import { IngredientsType } from '../../constants/ingredients-type';
import { TIngredient } from '../../types/types';

const getSameIngredients = (ingredients: TIngredient[], type: IngredientsType) => {
  return ingredients.filter(ingredient => ingredient.type === type);
};

export default getSameIngredients;
