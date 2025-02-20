import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalType } from "../../constants/modal-type";
import { TextCssType } from "../../constants/text-css-type";
import { TModalProps } from "../../types/types";
import ModalOverlay from "../modal-overlay/modal-overlay";
import Title from "../title/title";
import modalStyles from "./modal.module.css";

const modalRoot = document.getElementById("modals") as HTMLElement;

function Modal({ title, onClose, children, type }: TModalProps) {
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

  const modalHeaderStyle = title ? { justifyContent: "space-between" } : { justifyContent: "end" };

  const modalPaddingClasses =
    type === ModalType.Ingredient
      ? "pt-10 pb-15 pl-10 pr-10"
      : type === ModalType.CreateOrder
      ? "pt-10 pb-30 pl-10 pr-10"
      : "pt-10 pb-10 pl-10 pr-10";

  return createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div data-testid="modal" className={`${modalStyles.modal} ${modalPaddingClasses}`}>
        <div className={modalStyles["modal-header"]} style={modalHeaderStyle}>
          {title && <Title type={TextCssType.TextLarge}>{title}</Title>}
          <span data-testid="close-modal-btn">
            <CloseIcon type="primary" className={modalStyles["close-icon"]} onClick={onClose} />
          </span>
        </div>
        {children}
      </div>
    </>,
    modalRoot
  );
}

export default Modal;
