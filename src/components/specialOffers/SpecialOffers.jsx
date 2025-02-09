import { useState } from "react";
import Rating from "../rating/Rating";
import { Link } from "react-router";

const SpecialOffers = ({ offer }) => {
  const { firstImage, secondImage } = offer;
  const [imgTogole, setImgTogole] = useState(firstImage);

  console.log();

  return (
    <>

      <div
        key={offer.id}
        className="flex relative justify-center text-center flex-col rounded-2xl bg-white  dark:bg-neutral-700 md:max-w-xl lg:flex-row"
      >
        <img
          loading="lazy"
          onMouseEnter={() => setImgTogole(secondImage)}
          onMouseLeave={() => setImgTogole(firstImage)}
          className=" w-80 h-60 m-auto rounded-2xl object-cover md:h-auto md:w-48"
          src={imgTogole}
          alt=""
        />
        <p className="absolute top-0 right-0 bg-amber-400 p-1 rounded-full text-xl text-gray-200 mt-2">
          خصم {offer.discount} %
        </p>
        <div className="flex flex-col w-full justify-end items-center  p-6">
          <h3 className="mb-2 text-xl  font-medium text-neutral-800 dark:text-neutral-50">
            {offer.title}
          </h3>
          <p className="mb-4  text-base text-neutral-600 dark:text-neutral-200">
<Rating rating={offer.rating}/>          </p>
          <div className="text-neutral-500 dark:text-neutral-300">
            <span className="text-2xl text-amber-200">
              {" "}
              {offer.price - (offer.price * offer.discount) / 100} ${" "}
            </span>
            <span className="text-xl text-red-400 line-through">
              {" "}
              {offer.price} ${" "}
            </span>
          </div>

          <Link
          to={`/SpecialOffersPage/${offer.id}`}
          className="bg-red-500 text-xl  mt-5 mb-3 font-bold hover:bg-amber-400 text-white py-2  px-7 px-4 rounded-md">
            تفاصيل
          </Link>
        </div>
      </div> 
    </>
  );
};

export default SpecialOffers;
