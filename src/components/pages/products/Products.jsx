import { useDispatch, useSelector } from "react-redux";
import Saidebar from "./Saidebar";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";
import { allData } from "../../../redux/apiCall/productApiCall";
import Pagination from "./Pagintion";

const Broducts = () => {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("select");
  const [currentPage, setCurrentPage] = useState(4);

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(allData());
    window.scrollTo(0, 0);
  }, []);
  const filterData = products.filter((e) =>
    filter === "labtop"
      ? e.isLaptop == true
      : filter === "mobile"
      ? e.isLaptop === false
      : products
  );
  const sortData =sort==="low"? filterData.sort((a, b) => a.price - b.price):sort==="heigh"? filterData.sort((a, b) => b.price - a.price): filterData.sort((a, b) => (a.title > b.title?1:-1))
  const PRODUCT_PER_PAGE = 3;
  const pages = Math.ceil(sortData.length / PRODUCT_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCT_PER_PAGE;
  const finishIndex = currentPage * PRODUCT_PER_PAGE;

  const orderedProducts = sortData.slice(startIndex, finishIndex);


  return (
    <>
      <div className="px-5 grid grid-cols-12 items-center gap-4">
        <div className="grid lg:col-span-4 col-span-12  items-center p-4 ">
          <Saidebar filter={filter} setFilter={setFilter} setSort={setSort} sort={sort}/>
        </div>
        <div className="grid col-span-12 lg:col-span-8 ">
          <ProductList products={orderedProducts} />
        </div>
      </div>
      <div className="bg-amber-300 ">

        <div className=" flex justify-center m-auto w-5/6">

        <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
        </div>
      </div>


      
    </>
  );
};

export default Broducts;
