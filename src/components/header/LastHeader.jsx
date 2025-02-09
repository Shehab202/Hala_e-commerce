import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
// Initialization for ES Users
import { Ripple, Input, initTWE } from "tw-elements";
initTWE({ Ripple, Input });
import {  useSelector } from "react-redux";

const Test = () => {
 const {cartItems}= useSelector((state)=>state.cart)
  return (
    <>
      <div className="middle-header   bg-gray-900 h-16 ">
        <div className="flex  justify-between items-center w-5/6 m-auto">
          <div
            dir="ltr"
            className="relative flex mt-3 w-3/6"
            data-twe-input-wrapper-init
            data-twe-input-group-ref
          >
            <input
              type="search"
              className="peer block min-h-[auto] w-full border-gray-800 rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Search"
              aria-label="Search"
              id="exampleFormControlInput"
              aria-describedby="basic-addon1"
            />
            <label
              for="exampleFormControlInput"
              className="pointer-events-none  bg-gray-900  px-4 z-10  absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >
              بحث
            </label>
            <button
              className="relative z-[2] cursor-pointer bg-amber-300 -ms-0.5 flex items-center rounded-e bg-primary px-5  text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              type="button"
              id="button-addon1"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </span>
            </button>
          </div>
          <Link 
          to="/cart"
          className="flex  mt-5 align-center relative">
            <div className="text-amber-300 text-4xl cursor-pointer ">
              <GiShoppingCart />
            </div>
            {cartItems.length<1?"": <span className="w-5 h-5 absolute bottom-7 font-bold left-4 text-center text-balance bg-amber-300 rounded-full">
              {cartItems.length}
            </span>}
           
          </Link>
        </div>
      </div>
    </>
  );
};

export default Test;
