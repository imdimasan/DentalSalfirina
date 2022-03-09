import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import classes from "../../styles/slider.module.scss";

SwiperCore.use([Pagination]);

interface ISlides {
  slides: {
    image: string;
    title: string;
    link: string;
    color: string;
    alt: string;
  }[];
  perView: number;
}

const Slider = ({ slides, perView }: ISlides) => {
  return (
    <Swiper
      slidesPerView={perView}
      spaceBetween={20}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      className={classes.slider}
    >
      {slides.map(({ image, color, title, link, alt }, index) => (
        <SwiperSlide key={index}>
          <div
            className={classes.image}
            style={color ? { background: `${color}` } : null}
          >
            <Link href={link}>
              <a>
                <Image
                  src={image}
                  width={1200}
                  height={477}
                  layout="responsive"
                  quality={80}
                  alt={alt}
                />
              </a>
            </Link>
          </div>
          {title ? (
            <div className={classes.title}>
              <span>{title}</span>
            </div>
          ) : null}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
