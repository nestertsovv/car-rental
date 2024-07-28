import React from "react";
import Modal from "react-modal";

import { Icon } from "../Icon/Icon";

import s from "./CustomModal.module.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "none",
    padding: "0",
  },
  overlay: {
    backgroundColor: "rgba(34, 13, 91, 0.23)",
    backdropFilter: "blur(10px)",
    zIndex: "50",
  },
};

Modal.setAppElement("#root");

const CustomModal = ({ children, isOpen, onClose }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className={s.bgModal}>
        <button onClick={onClose} className={s.btnClose}>
          <Icon name="close" size={14} stroke="var(--black-color)" />
        </button>
        <div className={s.bgWrapper}>{children}</div>
        <div className="w-[100%] mt-[24px]">
          <a href="tel:+380730000000" className="animated-button aqua">
            <span className="relative z-10">Rental car</span>
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
