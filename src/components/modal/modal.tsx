import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyles from "./modal.module.css";
import { ModalPropsType } from "../../types/types";

function Modal({ isTitle, onClose, children }: ModalPropsType) {
  const modalHeaderStyle = isTitle
    ? { justifyContent: "space-between" }
    : { justifyContent: "end" };
    
  return (
    <div className={`${modalStyles.modal} pt-10 pl-10 pr-10 pb-15`}>
      <div className={modalStyles["modal-header"]} style={modalHeaderStyle}>
        {isTitle && <h1 className="text text_type_main-large">Детали ингредиента</h1>}
        <CloseIcon type="primary" className={modalStyles["close-icon"]} onClick={onClose}/>
      </div>
      { children }
    </div>
  );
}

export default Modal;
