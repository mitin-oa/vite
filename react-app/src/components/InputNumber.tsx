interface Props {
  num: number;
  onChange: any;
}

export default function NumInput({ num, onChange }: any) {
  return (
    <>
      <input
        type="number"
        className="form-control"
        name="numberOfCredits"
        id="numberOfCredits"
        min="0"
        max="50"
        value={num ?? ""}
        onChange={onChange}
      />
    </>
  );
}
