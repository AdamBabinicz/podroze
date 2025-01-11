import React from "react";
import { useLocation } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./Fototeka.css";

import img1 from "../assets/wietnam/1.avif";
import img2 from "../assets/wietnam/2.avif";
import img3 from "../assets/wietnam/3.avif";
import img4 from "../assets/wietnam/4.avif";
import img5 from "../assets/wietnam/5.avif";
import img6 from "../assets/wietnam/6.avif";
import img7 from "../assets/wietnam/7.avif";
import img8 from "../assets/wietnam/8.avif";
import img9 from "../assets/wietnam/9.avif";
import img10 from "../assets/wietnam/10.avif";
import img11 from "../assets/wietnam/11.avif";
import img12 from "../assets/wietnam/12.avif";
import img13 from "../assets/wietnam/13.avif";
import img14 from "../assets/wietnam/14.avif";
import img15 from "../assets/wietnam/15.avif";
import img16 from "../assets/wietnam/16.avif";
import img17 from "../assets/wietnam/17.avif";
import img18 from "../assets/wietnam/18.avif";
import img19 from "../assets/wietnam/19.avif";
import img20 from "../assets/wietnam/20.avif";
import img21 from "../assets/wietnam/21.avif";
import img22 from "../assets/wietnam/22.avif";
import img23 from "../assets/wietnam/23.avif";
import img24 from "../assets/wietnam/24.avif";
import img25 from "../assets/wietnam/25.avif";
import img26 from "../assets/wietnam/26.avif";
import img27 from "../assets/wietnam/27.avif";
import img28 from "../assets/wietnam/28.avif";
import img29 from "../assets/wietnam/29.avif";
import img30 from "../assets/wietnam/30.avif";
import img31 from "../assets/wietnam/31.avif";
import img32 from "../assets/wietnam/32.avif";
import img33 from "../assets/wietnam/33.avif";
import img34 from "../assets/wietnam/34.avif";
import img35 from "../assets/wietnam/35.avif";
import img36 from "../assets/wietnam/36.avif";
import img37 from "../assets/wietnam/37.avif";
import img38 from "../assets/wietnam/38.avif";
import img39 from "../assets/wietnam/39.avif";
import img40 from "../assets/wietnam/40.avif";
import img41 from "../assets/wietnam/41.avif";
import img42 from "../assets/wietnam/42.avif";
import img43 from "../assets/wietnam/43.avif";
import img44 from "../assets/wietnam/44.avif";
import img45 from "../assets/wietnam/45.avif";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Wietnam = () => {
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
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
    img41,
    img42,
    img43,
    img44,
    img45,
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

export default Wietnam;
