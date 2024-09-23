import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Scrollbar } from "swiper/modules";
import { ProductContext } from "../product-context";
import { useContext, useRef } from "react";
import { ProductImage } from "../product/styled";
import { StyledSlider } from "./styled";
import Button from "../../ui/button/Button";
import { useSwiper } from "swiper/react";

function SliderNextButton({ children }) {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slideNext()}>{children}</button>;
}

function SliderPrevButton({ children }) {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slidePrev()}>{children}</button>;
}

export default function Slider() {
  const products = useContext(ProductContext);
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);
  return (
    <div>
      <StyledSlider
        modules={[Navigation, Scrollbar]}
        // onBeforeInit={(swiper) => {
        //   swiper.params.navigation.prevEl = navPrevRef.current;
        //   swiper.params.navigation.nextEl = navNextRef.current;
        // }}
        // navigation={{ prevEl: navPrevRef.current, nextEl: navNextRef.current }}
        scrollbar={{ draggable: true }}
        freeMode
        watchSlidesProgress
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
      >
        {/* <button ref={navPrevRef} onClick={() => swiper.slidePrev()}>
          Назад
        </button>{" "}
        <br />
        <button ref={navNextRef} onClick={() => swiper.slideNext()}>
          Вперед
        </button> */}
        <SliderPrevButton>Назад</SliderPrevButton>
        <SliderNextButton>Вперед</SliderNextButton>
        {products &&
          products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductImage
                src={product.image}
                width="248"
                height="248"
                alt={product.title}
              />
            </SwiperSlide>
          ))}
      </StyledSlider>
    </div>
  );
}
