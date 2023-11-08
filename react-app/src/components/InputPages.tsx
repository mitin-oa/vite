import { ChangeEvent, useState } from "react";

interface Props {
  pages: any[];
  setPages: any;
}

export default function InputPages({ pages, setPages }: Props) {
  const [numOfPages, setNumOfPages] = useState<number>(0);

  const onPagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    // In general, use Number.isNaN over global isNaN as isNaN will coerce the value to a number first
    // which likely isn't desired
    const numOfPages = !Number.isNaN(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : 0;
    setNumOfPages(numOfPages);
    /* setPages(pages, numOfPages); */
  };

  console.log(numOfPages);
  return (
    <>
      <input
        type="number"
        className="form-control"
        name="numberOfCredits"
        id="numberOfCredits"
        min="1"
        max="50"
        value={numOfPages ?? ""}
        onChange={onPagesChange}
      />
    </>
  );
}
