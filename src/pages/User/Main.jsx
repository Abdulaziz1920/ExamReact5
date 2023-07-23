import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import blogs from "../../assets/image/blogs.png";
import Button from "../../components/Button/Button";
import VerticalCards from "../../components/Cards/VerticalCards";
import request from "../../server/request";
import "../../css/main.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Main() {
  const [data, setData] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  // const categoriesItems = [
  //   {
  //     id: 1,
  //     photo: "/src/assets/icons/Icon.svg",
  //     name: "Business",
  //     description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
  //   },
  //   {
  //     id: 2,
  //     photo: "/src/assets/icons/cyborg.svg",
  //     name: "Startup",
  //     description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
  //   },
  //   {
  //     id: 3,
  //     photo: "/src/assets/icons/shuttle.svg",
  //     name: "Economy",
  //     description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
  //   },
  //   {
  //     id: 4,
  //     photo: "/src/assets/icons/economy.svg",
  //     name: "Technology",
  //     description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
  //   },
  //   {
  //     id: 5,
  //     photo: "/src/assets/icons/Icon.svg",
  //     name: "Business",
  //     description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
  //   },
  //   {
  //     id: 6,
  //     photo: "/src/assets/icons/cyborg.svg",
  //     name: "Startup",
  //     description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
  //   },
  //   {
  //     id: 7,
  //     photo: "/src/assets/icons/shuttle.svg",
  //     name: "Economy",
  //     description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
  //   },
  //   {
  //     id: 8,
  //     photo: "/src/assets/icons/economy.svg",
  //     name: "Technology",
  //     description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
  //   },
  // ];

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await request.get("category");
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  };
  console.log(data);
  return (
    <>
      <section id="main_news">
        <div className="container">
          <div className="main">
            <div className="main-news">
              <div className="author">
                <p>
                  Posted on <span>startup</span>
                </p>
              </div>
              <div className="title">
                <h1>Step-by-step guide to choosing great font pairs</h1>
              </div>
              <div className="date__printed">
                <p>
                  By <span>James West</span> | May 23, 2022
                </p>
              </div>
              <div className="description">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>
              <div className="read__more">
                <Link to="/id">
                  <Button
                    title="Read more"
                    icons={<ion-icon name="chevron-forward-outline"></ion-icon>}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="popular__blogs">
            <div className="blogs__title">
              <h1>Popular blogs</h1>
            </div>
          </div>
          <div className="popular__blogs__slider">
            <div className="slider">
              <Slider centerPadding="32px" {...settings}>
                <VerticalCards
                  img={blogs}
                  date="By John Doe   l   Aug 23, 2021"
                  postTitle="A UX Case Study Creating a Studious Environment for Students:"
                  postText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
                />
                <VerticalCards
                  img={blogs}
                  date="By John Doe   l   Aug 23, 2021"
                  postTitle="A UX Case Study Creating a Studious Environment for Students:"
                  postText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
                />
                <VerticalCards
                  img={blogs}
                  date="By John Doe   l   Aug 23, 2021"
                  postTitle="A UX Case Study Creating a Studious Environment for Students:"
                  postText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
                />
                <VerticalCards
                  img={blogs}
                  date="By John Doe   l   Aug 23, 2021"
                  postTitle="A UX Case Study Creating a Studious Environment for Students:"
                  postText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
                />
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="select__categories">
            <div className="categories__title">
              <h1>Choose A Catagory</h1>
            </div>
            <div className="categories__items">
              <Swiper
                className="mySwiper"
                spaceBetween={50}
                breakpoints={breakpoints}
                pagination={{ clickable: true }}
                autoplay={true}
              >
                {data.map((el, index) => (
                  <SwiperSlide key={index} className="items">
                    <div className="categories__icons">
                      <img src={el.photo} alt={el.name} />
                    </div>
                    <div className="categories__item__title">
                      <h4>{el.name}</h4>
                    </div>
                    <div className="categories__item__subtitle">
                      <p>{el.description}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Button.propTypes = {
  title: PropTypes.string,
};

export default Main;
