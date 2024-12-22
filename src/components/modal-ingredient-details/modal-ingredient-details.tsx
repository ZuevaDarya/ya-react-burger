import { useNavigate } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import { removeCurrentIngredient } from '../../services/slices/ingredient-details-slice';
import { useAppDispatch } from '../../services/store';
import IngredientDetails from '../ingredient-details.tsx/ingredient-details';
import Modal from '../modal/modal';

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
    <Modal isTitle={true} onClose={onClose}>
      <IngredientDetails />
    </Modal>
  );
}

export default ModalIngredientDetails;
