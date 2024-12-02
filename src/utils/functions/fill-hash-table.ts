import { IngredientConstructorSliceType } from '../../types/services-types';
import { HashTableType, IngredientType } from '../../types/types';

const createHashTable = (arr: IngredientType[]): HashTableType => {
  return arr.reduce((table, item) => ({ ...table, [item._id]: 0 }), {});
}

export const fillHashTable = (allIngredients: IngredientType[], ingredientsInConstructor: IngredientConstructorSliceType[], bun?: IngredientType | null) => {
  const hashTable = createHashTable(allIngredients);

  const result = ingredientsInConstructor.reduce((hashTable, item) =>
    ({
      ...hashTable,
      [item.ingredient._id]: hashTable[item.ingredient._id] += 1
    }), hashTable);

    if (bun) {
      return {
        ...result,
        [bun._id]: 2
      }
    }

    return result;
};

