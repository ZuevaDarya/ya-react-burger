import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyles from "./modal.module.css";
import { ModalPropsType } from "../../types/types";

function Modal({ isTitle, onClose, children }: ModalPropsType) {
  const modalHeaderStyle = isTitle
    ? { justifyContent: "space-between" }
    : { justifyContent: "end" };
  
  const modalPaddingClasses = isTitle 
    ? "pt-10 pb-15 pl-10 pr-10" 
    : "pt-10 pb-30 pl-10 pr-10";

  return (
    <div className={`${modalStyles.modal} ${modalPaddingClasses}`}>
      <div className={modalStyles["modal-header"]} style={modalHeaderStyle}>
        {isTitle && <h1 className="text text_type_main-large">Детали ингредиента</h1>}
        <CloseIcon type="primary" className={modalStyles["close-icon"]} onClick={onClose}/>
      </div>
      { children }
    </div>
  );
}

export default Modal;
