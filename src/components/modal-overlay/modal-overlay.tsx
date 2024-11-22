import { createPortal } from "react-dom";
import Modal from "../modal/modal";
import modalOverlayStyles from "./modal-overlay.module.css";
import { ModalOverlayPropsType } from "../../types/types";
import { useEffect } from 'react';

const modalRoot = document.getElementById("modals") as HTMLElement;

function ModalOverlay(props: ModalOverlayPropsType) {
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      props.onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);
  
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();

    if (e.currentTarget === e.target) {
      props.onClose();
    }
  };
  
  return createPortal(
    <div className={modalOverlayStyles["modal-overlay"]} onClick={handleClick}>
      <Modal {...props} />
    </div>,
    modalRoot
  );
}

export default ModalOverlay;
