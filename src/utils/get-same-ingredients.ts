import { IngredientsType } from '../constants/ingredients-type';
import { BurgerConstructorItemType } from '../types/types';

const getSameIngredients = (ingredients: BurgerConstructorItemType[], type: IngredientsType) => {
  return ingredients.filter(ingredient => ingredient.type === type);
};

export default getSameIngredients;
