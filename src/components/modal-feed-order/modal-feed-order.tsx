import { useNavigate } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import Modal from "../modal/modal";
import FeedOrderDetails from '../feed-order-details/feed-order-details';
import { ModalType } from '../../constants/modal-type';

function ModalFeedOrder() {
  const { closeModal } = useModal();
  const navigate = useNavigate();

  const onClose = () => {
    closeModal();
    navigate(-1);
  };

  return (
    <Modal onClose={onClose} type={ModalType.FeedOrder}>
      <FeedOrderDetails />
    </Modal>
  );
}

export default ModalFeedOrder;
