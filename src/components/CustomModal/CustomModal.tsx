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
          {/* <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 1L1 13"
              stroke="#121417"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1L13 13"
              stroke="#121417"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}

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
