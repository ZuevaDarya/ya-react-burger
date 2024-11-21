import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import appStyles from "./app.module.css";
import { useEffect, useState } from "react";
import { API_PATHS, BASE_URL } from "../../constants/api-constants";

function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getIngredients = async () => {
      try {
        const response = await fetch(`${BASE_URL}${API_PATHS.ingredients}`, {
          signal,
        });

        if (!response.ok) {
          throw new Error(
            `Ошибка: ${response.status} | ${response.statusText}`
          );
        }

        const result = await response.json();
        setIngredients(result.data);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          console.log((error as Error).message);
        }
      }
    };

    getIngredients();

    return () => controller.abort();
  }, []);

  return (
    <>
      <AppHeader />
      <main className={appStyles.main}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor ingredients={ingredients} />
      </main>
    </>
  );
}

export default App;
