import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
//import "normalize.css/normalize.css";
import "./slider-animations.scss";
import "./styles.scss";
import { Link } from "react-router-dom";
import Button from "./Button";

const content = [
  {
    title: "24/7 on demand contract",
    description:
      "drafting, review, and negotiation delivered on time and on budget!",
    button: "GET STARTED",
    image: "/home-pic.jpg",
    user: "",
    userProfile: "",
  },
  {
    title: "Seamless automation",
    description:
      "of your contracts creation, approval and signature processes and workflows!",
    button: "GET STARTED",
    image: "/slider-top-pic-2.png",
    user: "",
    userProfile: "",
  },
  {
    title: "Smart contract lifecycle",
    description:
      "management solution SaaS-based or deployed in your SharePoint environment!",
    button: "GET STARTED",
    image: "/slider-top-pic-3.png",
    user: "",
    userProfile: "",
  },
];

var settings = {
  autoplay: 5000,
  duration: 2000,
};

const SliderAnimated = () => (
  <div className="top-slider">
    <div className="wrapper-shadow"></div>
    <Slider {...settings} className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{
            background: `url('${item.image}') no-repeat center center`,
          }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <div className="slider-top-card__button">
              <Link to="/ContractDrafting">
                <Button
                  children={item.button}
                  color=""
                  style={"btn_get_started"}
                  onClick={() => null}
                />
              </Link>
            </div>
          </div>
          {/* <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
              Posted by <strong>{item.user}</strong>
            </span>
          </section> */}
        </div>
      ))}
    </Slider>
  </div>
);

export default SliderAnimated;
