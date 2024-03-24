import Balance from "/public/balance.png";

export default function Underline() {
  return (
    <>
      <div className="title-underline-container">
        <div className="underline-sub-container">
          <div className="underline-top-blok"></div>
          <div className="underline-bottom-blok"></div>
        </div>
        <div className="underline-icon-container">
          <img src={Balance} className="underline_icon" alt="Picture balance" />
        </div>
        <div className="underline-sub-container">
          <div className="underline-top-blok"></div>
          <div className="underline-bottom-blok"></div>
        </div>
      </div>
    </>
  );
}
