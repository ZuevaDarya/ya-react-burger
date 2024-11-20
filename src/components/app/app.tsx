import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import appStyles from "./app.module.css";
import DATA from "../../utils/data";

function App() {
  const data = JSON.stringify(DATA);

  return (
    <>
      <AppHeader />
      <main className={appStyles.main}>
        <BurgerIngredients ingredients={JSON.parse(data)} />
        <BurgerConstructor />
      </main>
    </>
  );
}

export default App;
