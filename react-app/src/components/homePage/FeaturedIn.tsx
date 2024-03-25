import "../homePage/startScreen.scss";

interface Props {
  children: any[];
  style?: string;
}

export default function FeaturedIn({ children, style }: Props) {
  return (
    <>
      <div className={style}>
        <p style={{ textAlign: "center", margin: "10px 0 10px" }}>
          Fearured In
        </p>
        <div className="featuredIn">
          {children.map((e: { image: string | undefined }) => {
            return (
              <img
                src={e.image}
                className="featuredIn__pic"
                alt="Picture of media"
              ></img>
            );
          })}
        </div>
      </div>
    </>
  );
}
