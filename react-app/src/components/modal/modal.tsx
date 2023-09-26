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
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

export default function SignIn() {
  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Button children="Sign In" color="warning" onClick={openModal} />
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
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Sign In</h2>
        <form className="form">
          <p>User name:</p>
          <input />
          <p>Email:</p>
          <input />
          <p>Phone number:</p>
          <input />
          <p>Password:</p>
          <input />
          <button>submit</button>
        </form>
      </Modal>
    </div>
  );
}
