import React from "react";
import Modal from "react-modal";
import "./modal.scss";
import Button from "../Button";
import { useMediaQuery } from "react-responsive";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "350px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const customStylesMobile = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "280px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface ParentCompProps {
  title?: any;
  childComp?: React.ReactNode;
  modalIsOpen?: any;
  openModal?: any;
  closeModal?: any;
  btnModalStyle?: string;
}
let subtitle: any;
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

/* export default function ModalWindow({ content }: any) */
const ModalWindow: React.FC<ParentCompProps> = (props) => {
  const {
    title,
    childComp,
    modalIsOpen,
    openModal,
    closeModal,
    btnModalStyle,
  } = props;
  const isMobileScreen = useMediaQuery({ query: "(max-width: 760px" });

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#ec720b";
  }

  return (
    <div>
      <Button
        children={title}
        color="warning"
        style={btnModalStyle}
        onClick={openModal}
      />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={!isMobileScreen ? customStyles : customStylesMobile}
        contentLabel="Example Modal"
      >
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={closeModal}
        ></button>
        <h2
          style={{ textAlign: "center" }}
          ref={(_subtitle) => (subtitle = _subtitle)}
        >
          {title}
        </h2>
        {childComp}
      </Modal>
    </div>
  );
};

export default ModalWindow;
