import { useNavigate } from "react-router-dom";
import { ModalType } from "../../constants/modal-type";
import { useModal } from "../../hooks/use-modal";
import { removeCurrentIngredient } from "../../services/slices/ingredient-details-slice";
import { useAppDispatch } from "../../services/store";
import IngredientDetails from "../ingredient-details.tsx/ingredient-details";
import Modal from "../modal/modal";

function ModalIngredientDetails() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { closeModal } = useModal();

  const onClose = () => {
    closeModal();
    dispatch(removeCurrentIngredient());
    navigate(-1);
  };

  return (
    <Modal
      title="Детали ингредиента"
      onClose={onClose}
      type={ModalType.Ingredient}
    >
      <IngredientDetails />
    </Modal>
  );
}

export default ModalIngredientDetails;
