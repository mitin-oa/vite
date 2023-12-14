import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
        style={{ textAlign: "center" }}
      >
        <strong>{children}</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
          style={{ width: "30px", padding: 0, margin: "12px" }}
        ></button>
      </div>
    </>
  );
};

export default Alert;
