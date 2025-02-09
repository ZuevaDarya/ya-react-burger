import { Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route';
import { TextCssType } from '../../constants/text-css-type';
import { useAppSelector } from '../../services/store';
import ColoriesItem from '../calories-item/calories-item';
import Text from '../text/text';
import detailStyles from "./ingredient-details.module.css";

function IngredientDetails() {
  const { id } = useParams();
  const { ingredients, isSuccess } = useAppSelector(store => store.burgerIngredients);
  const currentIngredient = ingredients.find(ingredient => ingredient._id === id);

  return (
    <>
      {isSuccess && !currentIngredient && <Navigate to={AppRoute.Error} replace />}
      {isSuccess && currentIngredient &&
        <div className={detailStyles["ingredient-details"]}>
          <img className={`${detailStyles["ingredient-img"]} mb-4`} src={currentIngredient.image_large} alt={currentIngredient.name} />
          <Text type={TextCssType.TextMedium} classes="mb-8">{currentIngredient.name}</Text>

          <div className={detailStyles["calories-info"]}>
            <ColoriesItem name="Калории,ккал" count={currentIngredient.calories} />
            <ColoriesItem name="Белки,г" count={currentIngredient.proteins} />
            <ColoriesItem name="Жиры,г" count={currentIngredient.fat} />
            <ColoriesItem name="Углеводы,г" count={currentIngredient.carbohydrates} />
          </div>
        </div>
      }
    </>
  );
}

export default IngredientDetails;
