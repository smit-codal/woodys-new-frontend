import Button from "../button";
import EmptyCartImage from "public/images/icons/empty-cart.svg";
import Image from "next/image";
import BestSellers from "./best-sellers";
import Hydroxocobalamin from "public/images/hydroxocobalamin.svg";
import TestosteroneCypionate from "public/images/testosterone-cypionate.svg";
import Enclomiphene from "public/images/enclomiphene.svg";
import Clomiphene from "public/images/clomiphene.svg";

const EmptyCart = () => {
  const bestSellers = [
    {
      title: "hydroxocobalamin",
      caption: "get your vitamin B12",
      image: Hydroxocobalamin,
    },
    {
      title: "testosterone cypionate",
      caption: "boost your testosterone",
      image: TestosteroneCypionate,
    },
    {
      title: "enclomiphene",
      caption: "improve your libido",
      image: Enclomiphene,
    },
    {
      title: "clomiphene",
      caption: "increase your sperm count",
      image: Clomiphene,
    },
  ];
  return (
    <>
      <div
        className={`px-4 pt-5 pb-10 mx-auto md:max-w-[712px] text-center md:pt-35 ${
          bestSellers.length > 0 ? "md:pb-20" : "md:pb-40"
        }`}
      >
        <div className="font-semibold md:text-3xl text-xl max-w-[255px] md:max-w-none mx-auto">
          You currently have no items in your bag
        </div>
        <div className=" text-xl md:text-2xl font-semibold text-rose-500 mb-5 md:mb-10">
          That’s a bummer...
        </div>
        <div className="image-align w-27 md:w-auto mx-auto mb-10 md:mb-15">
          <Image
            src={EmptyCartImage}
            width={140}
            height={158}
            className="mx-auto"
            alt="empty-cart-image"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <Button
            className="btn-quiz-cart btn btn-md md:btn-xl btn-secondary btn-outline btn-take-quiz-header btn-hover-icon-change"
            icon_suffix="fa-solid fa-fire text-rose-500"
            label="Take the quiz"
          />
          <Button
            className="btn btn-md md:btn-xl btn-secondary btn-outline"
            label="Log into your account"
          />
        </div>
      </div>
      {bestSellers.length > 0 ? (
        <BestSellers bestSellers={bestSellers} />
      ) : null}
    </>
  );
};

export default EmptyCart;
