import { TModalOverlayProps } from "../../types/types";
import modalOverlayStyles from "./modal-overlay.module.css";

function ModalOverlay({ onClose }: TModalOverlayProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();

    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div
      className={modalOverlayStyles["modal-overlay"]}
      onClick={handleClick}
      data-testid="modal-overlay"
    />
  );
}

export default ModalOverlay;
