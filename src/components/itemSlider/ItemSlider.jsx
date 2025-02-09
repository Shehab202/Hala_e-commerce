import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";
import Spinner from "../spinner/Spinner";
import { useSelector } from "react-redux";

function ItemSlider({ data }) {
  const {isLoading} = useSelector((state) => state.product);

  let settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  useEffect(()=>{
    window.scrollTo(0,0)

  },[])
  if(isLoading) return <Spinner/>

  return (
    <>
      <div className=" colored4 py-14 ">
        <div className="flex ItemSlider m-auto px-4 ">
          <Slider {...settings} className=" w-full pr-0 pl-3">
            {data.map((item) => (
              <>
                <div
                  key={item.id}
                  className="p-4 ml-8 w-5/6  text-center  h-80 rounded-2xl mb-10 shadow2 my-2  bg-white"
                >
                  <Link to={`productss/${item.id}`}>
                    <img
                      loading="lazy"
                      className="w-4/6 m-auto rounded-2xl"
                      src={item.image}
                      alt={item.alt}
                    />
                    <h4 className="font-bold text-xl">{item.title}</h4>
                    <div className="flex flex-col md:flex-row justify-center items-center m-auto text-center">
                      <div className="flex  justify-center my-3  w-16 text-center items-center bg-green-700 rounded-2xl">
                        <h3 className="px-1 text-amber-300">
                          <FaStar />
                        </h3>
                        <h3 className="px-1 font-bold">{item.rating}</h3>
                      </div>
                      <div className="text-blue-800 font-bold   px-5">
                        تقييمات {item.reviews}
                      </div>
                    </div>

                    <p className="font-bold text-xl text-red-600">
                      $ {item.price}
                    </p>
                  </Link>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ItemSlider;
