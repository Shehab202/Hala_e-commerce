import Offere from "../../specialOffers/Offere";
// import { products } from "../../../data/products";
import ItemSlider from "../../itemSlider/ItemSlider";
import HeadingTitle from "../../headingTitle/HeadingTitle";
import Brands from "../../brands/Brands";
import Category from "../../category/Category";
import CarouselCrossfade from "../../slider/Slider";

import { Outlet } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allData } from "../../../redux/apiCall/productApiCall";
import Spinner from "../../spinner/Spinner";
const Home = () => {
  const {products,isLoading} = useSelector((state) => state.product);
  const dispatch = useDispatch();
   useEffect(() => {
    dispatch(allData());
window.scrollTo(0,0)

  }, []);
  const Laptop = products.filter((item) => item.isLaptop === true);
  const mobails = products.filter((mobail) => mobail.isLaptop === false);
  // if(isLoading) return <Spinner/>

  return (
    <>
      <CarouselCrossfade />
      <Category />
      <Offere />
      <HeadingTitle title="قسم اللابتوب" />
      <ItemSlider data={Laptop} />
      <HeadingTitle title="قسم الموبايل" />
      <ItemSlider data={mobails} />
      <HeadingTitle title="تسوق حسب الماركه" />
      <Brands />
      <Outlet></Outlet>{" "}
    </>
  );
};

export default Home;
