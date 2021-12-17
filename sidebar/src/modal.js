import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { GlobalContext } from "./context";

function Modal() {
  const { modal, closeModal } = GlobalContext();
  console.log(modal);
  return (
    <div className={`modal-overlay ${modal ? "show-modal" : null}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

export default Modal;
