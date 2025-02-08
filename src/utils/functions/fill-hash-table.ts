import { TFillHashTableFunc, THashTable, TIngredient } from '../../types/types';

const createHashTable = (arr: TIngredient[]): THashTable => {
  return arr.reduce((table, item) => ({ ...table, [item._id]: 0 }), {});
}

const fillHashTable: TFillHashTableFunc = (allIngredients, ingredientsInConstructor, bun) => {
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

export const fillOrderHashTable = (allIngredients: TIngredient[], orderIngredientIds: string[]) => {
  const hashTable = createHashTable(allIngredients);

  const result = orderIngredientIds.reduce((hashTable, id) =>
    ({
      ...hashTable,
      [id]: hashTable[id] += 1
    }), hashTable);

    return result;
}

export default fillHashTable;

