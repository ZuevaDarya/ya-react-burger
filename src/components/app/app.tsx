import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import appStyles from "./app.module.css";
import { useEffect } from "react";
import { getIngredients } from "../../services/burger-ingredients-slice";
import { useAppDispatch } from "../../services/store";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <>
      <AppHeader />
      <main className={appStyles.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </>
  );
}

export default App;
