import Image from "next/image";
import Button from "../button";
import Slider, { Settings } from "react-slick";

type bestSellersProps = {
  image: { width: number; height: number; src: string };
  title: string;
  caption: string;
}[];

const BestSellers = ({ bestSellers }: { bestSellers: bestSellersProps }) => {
  const settings: Settings = {
    prevArrow: (
      <button className="slick-prev " aria-label="Previous" type="button">
        <i className="fa-solid fa-chevron-left text-rose-500 text-xl"></i>
      </button>
    ),
    nextArrow: (
      <button className="slick-next " aria-label="Previous" type="button">
        <i className="fa-solid fa-chevron-right text-rose-500 text-xl"></i>
      </button>
    ),
    infinite: false,
    slidesToShow: 4,
    speed: 500,
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          speed: 500,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023.98,
        settings: {
          speed: 500,
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 767.98,
        settings: {
          speed: 500,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-zinc-50/50 md:py-20 pt-5 pb-7 h-[610px]">
      <div className="container">
        <h1 className="text-xl xl:text-3xl font-semibold mb-2.5 text-center xl:text-left">
          Check out our best sellers
        </h1>
        <Slider className="best-seller-slide" {...settings}>
          {bestSellers.map((item, index) => (
            <div key={index}>
              <div className="seller-card">
                <div className="h-[208px] flex items-end justify-center mb-5">
                  <Image
                    src={item.image.src}
                    width={item.image.width}
                    height={item.image.height}
                    alt="seller-card-image"
                  />
                </div>
                <h4 className="text-xl xl:text-2xl font-bold text-center font-serif">
                  {item.title}
                  <span className="text-rose-500">.</span>
                </h4>
                <p className="text-rose-500 font-semibold xl:text-lg text-center">
                  {item.caption}
                </p>
                <div className="md:seller-btn">
                  <Button
                    className="max-w-[265px] w-full btn btn-lg btn-secondary btn-outline mx-auto mt-5 "
                    icon_suffix="fa-solid fa-circle-chevron-right"
                    label="Learn More"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BestSellers;
