import React from "react";
import SliderItem from "./sliderItem/SliderItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

// Import Swiper styles
import "swiper/css";

function BackgroundHome(props) {
  const dataSlider = useSelector((state) => state.book.sliderBook);

  return (
    <section className="background__home">
      <div className="container">
        <Swiper>
          {dataSlider.map((item, idx) => (
            <SwiperSlide key={idx}>
              <SliderItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default BackgroundHome;
