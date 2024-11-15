import './app.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

function App() {
  return (
    <>
      <AppHeader />
      <main className="main">
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </>
  );
}

export default App
