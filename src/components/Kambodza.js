import React from "react";
import { useLocation } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./Fototeka.css";

import img1 from "../assets/kambodza/1.avif";
import img2 from "../assets/kambodza/2.avif";
import img3 from "../assets/kambodza/3.avif";
import img4 from "../assets/kambodza/4.avif";
import img5 from "../assets/kambodza/5.avif";
import img6 from "../assets/kambodza/6.avif";
import img7 from "../assets/kambodza/7.avif";
import img8 from "../assets/kambodza/8.avif";
import img9 from "../assets/kambodza/9.avif";
import img10 from "../assets/kambodza/10.avif";
import img11 from "../assets/kambodza/11.avif";
import img12 from "../assets/kambodza/12.avif";
import img13 from "../assets/kambodza/13.avif";
import img14 from "../assets/kambodza/14.avif";
import img15 from "../assets/kambodza/15.avif";
import img16 from "../assets/kambodza/16.avif";
import img17 from "../assets/kambodza/17.avif";
import img18 from "../assets/kambodza/18.avif";
import img19 from "../assets/kambodza/19.avif";
import img20 from "../assets/kambodza/20.avif";
import img21 from "../assets/kambodza/21.avif";
import img22 from "../assets/kambodza/22.avif";
import img23 from "../assets/kambodza/23.avif";
import img24 from "../assets/kambodza/24.avif";
import img25 from "../assets/kambodza/25.avif";
import img26 from "../assets/kambodza/26.avif";
import img27 from "../assets/kambodza/27.avif";
import img28 from "../assets/kambodza/28.avif";
import img29 from "../assets/kambodza/29.avif";
import img30 from "../assets/kambodza/30.avif";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Kambodza = () => {
  const location = useLocation();
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
  ];

  const currentSubmenuItem = MenuItems.find(
    (item) =>
      item.submenu && item.submenu.some((sub) => sub.url === location.pathname)
  )?.submenu.find((sub) => sub.url === location.pathname);

  const title = currentSubmenuItem
    ? currentSubmenuItem.title
    : "Galeria Podróży";

  return (
    <>
      <Navbar />
      <div className="fototeka-container">
        <h2 className="fototeka-title">{title}</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          className="fototeka-slider"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="fototeka-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </>
  );
};

export default Kambodza;
