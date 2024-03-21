import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default function SliderBottom() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slickplay: true,
    fade: true,
    speed: 1500,
    autoplaySpeed: 7000,
    cssEase: "linear",
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-bottom-card">
          <p className="slider-bottom-card__text">
            We are now able to win opportunities that we were losing in the past
            because of our workload. Our legal team hasn't expanded, but with
            ChronoLegal, we can scale as needed.
          </p>
          <p className="slider-bottom-card__name">JAMES K.</p>
          <p className="slider-bottom-card__title">General Counsel</p>
        </div>
        <div className="slider-bottom-card">
          <p className="slider-bottom-card__text">
            This kind of legal support is something every startup needs!
            ChronoLegal was instrumental in helping us close some of our biggest
            deals this year.
          </p>
          <p className="slider-bottom-card__name">OREN S.</p>
          <p className="slider-bottom-card__title">CEO, Founder</p>
        </div>
        <div className="slider-bottom-card">
          <p className="slider-bottom-card__text">
            We cannot recommend ChronoLegal highly enough. They are thorough,
            astute, and stay hands-on from start to finish. They care about
            every contract and deal as much as we do.
          </p>
          <p className="slider-bottom-card__name">MARY L.</p>
          <p className="slider-bottom-card__title">SVP, Procurement</p>
        </div>
        <div className="slider-bottom-card">
          <p className="slider-bottom-card__text">
            We started working with ChronoLegal because our business was scaling
            fast but we weren’t ready to increase our legal team’s headcount.
            With ChronoLegal’s help, we have been able to support our sales and
            procurement team adequately and keep our leadership happy.
          </p>
          <p className="slider-bottom-card__name">DIANA G.</p>
          <p className="slider-bottom-card__title">Chief Legal Officer</p>
        </div>
        <div className="slider-bottom-card">
          <p className="slider-bottom-card__text">
            My experience with ChronoLegal was excellent. Their people are
            knowledgeable, kind, and always open for calls and quick updates.
          </p>
          <p className="slider-bottom-card__name">MIKE M.</p>
          <p className="slider-bottom-card__title">VP of Sales</p>
        </div>
      </Slider>
    </div>
  );
}
