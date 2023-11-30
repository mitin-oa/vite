import React from "react";
import Modal from "react-modal";
import "./modal.scss";
import Button from "../Button";

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
  /* const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  } */

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#ec720b";
  }

  /* function closeModal() {
    setIsOpen(false);
  }
 */
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
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={closeModal}
        ></button>
        <h2
          style={{ marginLeft: 25 }}
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
