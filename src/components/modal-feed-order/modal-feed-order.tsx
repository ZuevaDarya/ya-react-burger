import { useNavigate } from "react-router-dom";
import { ModalType } from "../../constants/modal-type";
import { useModal } from "../../hooks/use-modal";
import FeedOrderDetails from "../feed-order-details/feed-order-details";
import Modal from "../modal/modal";

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
