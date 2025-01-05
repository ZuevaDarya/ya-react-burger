import modalOverlayStyles from "./modal-overlay.module.css";
import { TModalOverlayProps } from "../../types/types";

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
    />
  );
}

export default ModalOverlay;
