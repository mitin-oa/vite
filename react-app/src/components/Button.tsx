interface Props {
  children: string;
  color: string;
  style?: string;
  onClick: () => void;
}

const Button = ({ children, color, style, onClick }: Props) => {
  return (
    <>
      <button
        type="button"
        className={"btn btn-" + color + " " + style}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
