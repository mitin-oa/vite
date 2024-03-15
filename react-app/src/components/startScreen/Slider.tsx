import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
          <p className="slider-bottom-card__text">James K., General Counsel</p>
        </div>
        <div className="slider-bottom-card">
          <p className="slider-bottom-card__text">
            This kind of legal support is something every startup needs!
            ChronoLegal was instrumental in helping us close some of our biggest
            deals this year.
          </p>
          <p className="slider-bottom-card__text">Oren S., CEO, Founder</p>
        </div>
        <div className="slider-bottom-card">
          <p className="slider-bottom-card__text">
            We cannot recommend ChronoLegal highly enough. They are thorough,
            astute, and stay hands-on from start to finish. They care about
            every contract and deal as much as we do.
          </p>
          <p className="slider-bottom-card__text">Mary L., SVP, Procurement</p>
        </div>
        <div className="slider-bottom-card">
          <p className="slider-bottom-card__text">
            We started working with ChronoLegal because our business was scaling
            fast but we weren’t ready to increase our legal team’s headcount.
            With ChronoLegal’s help, we have been able to support our sales and
            procurement team adequately and keep our leadership happy.
          </p>
          <p className="slider-bottom-card__text">
            Diana G., Chief Legal Officer
          </p>
        </div>
        <div className="slider-bottom-card">
          <p className="slider-bottom-card__text">
            My experience with ChronoLegal was excellent. Their people are
            knowledgeable, kind, and always open for calls and quick updates.
          </p>
          <p className="slider-bottom-card__text">Mike M., VP of Sales</p>
        </div>
      </Slider>
    </div>
  );
}
