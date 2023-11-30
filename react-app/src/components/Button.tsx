interface Props {
  children: string;
  color: string;
  style?: string;
  onClick: () => void;
}

const Button = ({ children, color, style, onClick }: Props) => {
  return (
    <>
      {children == "Sign out" ? (
        <button
          style={{ marginLeft: 25, marginTop: 10 }}
          type="button"
          className={"btn btn-" + color + " " + style}
          onClick={onClick}
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
