interface Props {
  children: string;
  color: string;
  onClick: () => void;
}

const Button = ({ children, color, onClick }: Props) => {
  return (
    <>
      {children == "Sign out" ? (
        <button
          style={{ marginLeft: 25, marginTop: 10 }}
          type="button"
          className={"btn btn-" + color}
          onClick={onClick}
        >
          {children}
        </button>
      ) : (
        <button type="button" className={"btn btn-" + color} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
