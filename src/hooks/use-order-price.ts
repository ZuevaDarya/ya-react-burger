import { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "../services/store";
import { TFeedOrder, TMapIngredient } from "../types/services-types";
import { fillOrderHashTable } from "../utils/functions/fill-hash-table";

const useOrderPrice = (order: TFeedOrder | null) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { ingredients, mapIngredients } = useAppSelector(
    (state) => state.burgerIngredients
  );

  const ingredientsInOrder = useMemo(() => {
    if (order) {
      return order.ingredients.map((ingredientId) => {
        return mapIngredients.get(ingredientId) as TMapIngredient;
      });
    }
  }, [order]);

  const ingredientsCountHashTable = useMemo(() => {
    if (order) {
      return fillOrderHashTable(ingredients, order.ingredients);
    }
  }, [order]);

  useEffect(() => {
    if (ingredientsInOrder) {
      const totalPrice = () => {
        return ingredientsInOrder.reduce((sum, ingredient) => {
          return (sum += ingredient.price);
        }, 0);
      };

      setTotalPrice(totalPrice);
    }
  }, [ingredientsInOrder]);

  return {
    totalPrice,
    ingredientsInOrder,
    ingredientsCountHashTable,
  };
};

export default useOrderPrice;
