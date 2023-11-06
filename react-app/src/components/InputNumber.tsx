interface Props {
  num: number;
  onChange: () => void;
}

export default function NumInput({ num, onChange }: Props) {
  return (
    <>
      <input
        type="number"
        className="form-control"
        name="numberOfCredits"
        id="numberOfCredits"
        min="1"
        max="50"
        value={num ?? 1}
        onChange={onChange}
      />
    </>
  );
}
