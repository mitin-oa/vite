import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../homePage/startScreen.scss";
import Button from "../Button";
import { Link } from "react-router-dom";
import FearuredIn from "./FeaturedIn";
import Pic1 from "/public/forbes.png";
import Pic2 from "/public/above-the-low.png";
import Pic3 from "/public/bloomberg.png";
import Pic4 from "/public/legaltech.png";
import Pic5 from "/public/ic.png";
import Pic6 from "/public/daily-journal.png";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        width: "30px",
        height: "30px",
        //background: "black",
        right: "50px",
        zIndex: "2",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        //background: "black",
        left: "50px",
        zIndex: "2",
      }}
      onClick={onClick}
    />
  );
}
const featuredIn_pictures = [
  { image: Pic1 },
  { image: Pic2 },
  { image: Pic3 },
  { image: Pic4 },
  { image: Pic5 },
  { image: Pic6 },
];

console.log(featuredIn_pictures);

export default function SliderTop() {
  var settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    slickplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="start-screen">
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slider-top-card card1">
            <div className="slider-top-card-shadow">
              <div
                className="slider-top-content"
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  zIndex: "10",
                }}
              >
                <h1 className="slider-top-card__text">
                  24/7 on demand contract drafting, review, and negotiation
                  delivered on time and on budget
                </h1>
                <Link to="/Services">
                  <Button
                    children="GET STARTED"
                    color=""
                    style={"btn_get_started"}
                    onClick={() => null}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="slider-top-card card2">
            <div className="slider-top-card-shadow">
              <div
                className="slider-top-content"
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  zIndex: "10",
                }}
              >
                <h1 className="slider-top-card__text">
                  Seamless automation of your contracts, creation, approval and
                  signature processes and workflows
                </h1>
                <Link to="/Services">
                  <Button
                    children="GET STARTED"
                    color=""
                    style={"btn_get_started"}
                    onClick={() => null}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="slider-top-card card3">
            <div className="slider-top-card-shadow">
              <div
                className="slider-top-content"
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  zIndex: "10",
                }}
              >
                <h1 className="slider-top-card__text">
                  Smart contract lifecycle management solution SaaS-based or
                  deployed in your SharePoint environment
                </h1>
                <Link to="/Services">
                  <Button
                    children="GET STARTED"
                    color=""
                    style={"btn_get_started"}
                    onClick={() => null}
                  />
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <FearuredIn
        children={featuredIn_pictures}
        style="featuredIn-top-container"
      />
    </div>
  );
}
