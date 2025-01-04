import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyles from "./modal.module.css";
import { TModalProps } from "../../types/types";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modals") as HTMLElement;

function Modal({ isTitle, onClose, children }: TModalProps) {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const modalHeaderStyle = isTitle
    ? { justifyContent: "space-between" }
    : { justifyContent: "end" };

  const modalPaddingClasses = isTitle
    ? "pt-10 pb-15 pl-10 pr-10"
    : "pt-10 pb-30 pl-10 pr-10";

  return createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div className={`${modalStyles.modal} ${modalPaddingClasses}`}>
        <div className={modalStyles["modal-header"]} style={modalHeaderStyle}>
          {isTitle && (
            <h1 className="text text_type_main-large">Детали ингредиента</h1>
          )}
          <CloseIcon
            type="primary"
            className={modalStyles["close-icon"]}
            onClick={onClose}
          />
        </div>
        {children}
      </div>
    </>,
    modalRoot
  );
}

export default Modal;
