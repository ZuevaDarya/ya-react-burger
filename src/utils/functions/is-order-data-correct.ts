const isOrderDataCorrect = (ingredients: unknown[]) => {
  let isCorrect = true;
  
  ingredients.forEach((ingredient) => {
    if (
      typeof ingredient !== "string" ||
      (typeof ingredient === "string" && ingredient.length === 0)
    ) {
      isCorrect = false;
    }
  });

  return isCorrect;
};

export default isOrderDataCorrect;
