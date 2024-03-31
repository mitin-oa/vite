import "../homePage/startScreen.scss";

interface Props {
  children: any[];
  style?: string;
}

export default function FeaturedIn({ children, style }: Props) {
  return (
    <>
      <div className={style}>
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
