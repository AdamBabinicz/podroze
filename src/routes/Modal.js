import React from "react";
import { IoClose } from "react-icons/io5";
import "./ModalStyles.css";

function Modal({ title, text, text1, text2, text3, image, closeModal }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={closeModal}>
          <IoClose />
        </button>
        <h2>{title}</h2>
        <span>{text}</span>
        <span>{text1}</span>
        <span>{text2}</span>
        <span>{text3}</span>
        <img src={image} alt="Modal Content" className="modal-image" />
      </div>
    </div>
  );
}

export default Modal;
