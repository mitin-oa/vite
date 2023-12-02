import { useState } from "react";

interface Props {
  children: string;
  color: string;
  style?: string;
  disable?: boolean;
  onClick: () => void;
}

const Button = ({ children, color, style, disable, onClick }: Props) => {
  const [display, setDisplay] = useState("");

  return (
    <>
      {disable ? (
        <button
          type="button"
          className={"btn btn-" + color + " " + style + " " + display}
          onClick={() => {
            onClick();
            setDisplay("btn-no-display");
          }}
        >
          {children}
        </button>
      ) : (
        <button
          type="button"
          className={"btn btn-" + color + " " + style}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
