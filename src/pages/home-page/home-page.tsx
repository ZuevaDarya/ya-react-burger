import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import { useEffect } from "react";
import { useAppDispatch } from "../../services/store";
import { getIngredients } from "../../services/thunks";

function HomePage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <main>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </DndProvider>
  );
}

export default HomePage;
