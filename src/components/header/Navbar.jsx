// import { Link } from "react-router-dom";
// import { Collapse, initTWE } from "tw-elements";

// initTWE({ Collapse });
// const Navbar = () => {
//   return (
//     <>
//       <nav
//         className="relative flex w-full flex-nowrap items-center justify-between bg-gray-700 py-2 text-neutral-500 shadow-dark-mild hover:text-neutral-700  focus:text-neutral-700 dark:bg-gray-700 lg:flex-wrap lg:justify-start lg:py-4"
//         data-twe-navbar-ref
//       >
//         <div className="flex w-full flex-wrap items-center justify-between px-3">
//           <button
//             className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
//             type="button"
//             data-twe-collapse-init
//             data-twe-target="#navbarSupportedContent3"
//             aria-controls="navbarSupportedContent3"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
//                   clip-rule="evenodd"
//                 />
//               </svg>
//             </span>
//           </button>

//           <div
//             className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
//             id="navbarSupportedContent3"
//             data-twe-collapse-item
//           >
//             <div
//               className="list-style-none lg:text-2xl me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
//               data-twe-navbar-nav-ref
//             >
//               <div
//                 className="my-4  ps-2 lg:my-0 lg:pe-1 lg:ps-2"
//                 data-twe-nav-item-ref
//               >
//                 <Link
//                 to="/"
//                   className="text-black hover:text- hover:text-amber-300 dark:text-white lg:px-2"
//                   aria-current="page"

//                   data-twe-nav-link-ref
//                 >
//                   الصفحه الرئيسيه
//                 </Link>
//               </div>
//               <div
//                 className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
//                 data-twe-nav-item-ref
//               >
//               <Link to={`/products`}
//                   className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-amber-300 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
//                   href="#"
//                   data-twe-nav-link-ref
//                 >
//                   الالكترونيات والموبايلات
//                 </Link>
//               </div>
//               <div
//                 className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
//                 data-twe-nav-item-ref
//               >
//                 <a
//                   className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-amber-300 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
//                   href="#"
//                   data-twe-nav-link-ref
//                 >
//                   المنزل والمطبخ
//                 </a>
//               </div>
//               <div
//                 className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
//                 data-twe-nav-item-ref
//               >
//                 <a
//                   className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-amber-300 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
//                   href="#"
//                   data-twe-nav-link-ref
//                 >
//                   رجاليه{" "}
//                 </a>
//               </div>
//               <div
//                 className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
//                 data-twe-nav-item-ref
//               >
//                 <a
//                   className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-amber-300 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
//                   href="#"
//                   data-twe-nav-link-ref
//                 >
//                   نسائيه{" "}
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//       </nav>
//     </>
//   );
// };

// export default Navbar;

// {
//   /* <nav

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Collapse, initTWE } from "tw-elements";

const Navbar = () => {
  useEffect(() => {
    initTWE({ Collapse });
  }, []);

  return (
    <>
      <nav
        className="relative py-2 flex w-full flex-nowrap items-center justify-between bg-zinc-50  text-neutral-500 shadow-dark-mild hover:text-neutral-700 focus:text-neutral-700 dark:bg-gray-800 lg:flex-wrap lg:justify-start lg:py-4"
        data-twe-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          
          <button
            className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-twe-collapse-init
            data-twe-target="#navbarSupportedContent2"
            aria-controls="navbarSupportedContent2"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7 cursor-pointer [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>

          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent2"
            data-twe-collapse-item
          >
            <ul
              className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
              data-twe-navbar-nav-ref
            >
              <li
                className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
                data-twe-nav-item-ref
              >
                <Link
                to="/"
                  className="p-0 text-xl text-black/60 transition duration-200 hover:text-amber-300 hover:ease-in-out focus:text-black/80 active:text-amber-200 motion-reduce:transition-none dark:text-white/60 dark:hover:text-amber-200 dark:focus:text-amber-200 dark:active:text-white/80 lg:px-2"
                  aria-current="page"
                  href="#"
                  data-twe-nav-link-ref
                >
                  الصفحه الرئيسيه
                </Link>
              </li>
              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-item-ref
              >
               <Link to={`/products`}
                  className="p-0 text-xl text-black/60 transition duration-200 hover:text-amber-300 hover:ease-in-out focus:text-black/80 active:text-amber-200 motion-reduce:transition-none dark:text-white/60 dark:hover:text-amber-200 dark:focus:text-amber-200 dark:active:text-white/80 lg:px-2"
                  href="#"
                  data-twe-nav-link-ref
                >
                  الالكترونيات والموبايلات
                </Link>
              </li>
              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-item-ref
              >
                <a
                  className="p-0 text-xl text-black/60 transition duration-200 hover:text-amber-300 hover:ease-in-out focus:text-black/80 active:text-amber-200 motion-reduce:transition-none dark:text-white/60 dark:hover:text-amber-200 dark:focus:text-amber-200 dark:active:text-white/80 lg:px-2"
                  href="#"
                  data-twe-nav-link-ref
                >
                  المنزل والمطبخ
                </a>
              </li>
              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-item-ref
              >
                <a
                  className="p-0 text-xl text-black/60 transition duration-200 hover:text-amber-300 hover:ease-in-out focus:text-black/80 active:text-amber-200 motion-reduce:transition-none dark:text-white/60 dark:hover:text-amber-200 dark:focus:text-amber-200 dark:active:text-white/80 lg:px-2"
                  href="#"
                  data-twe-nav-link-ref
                >
                رجاليه
                </a>
              </li>
              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-item-ref
              >
                <a
                  className="p-0 text-xl text-black/60 transition duration-200 hover:text-amber-300 hover:ease-in-out focus:text-black/80 active:text-amber-200 motion-reduce:transition-none dark:text-white/60 dark:hover:text-amber-200 dark:focus:text-amber-200 dark:active:text-white/80 lg:px-2"
                  href="#"
                  data-twe-nav-link-ref
                >
             نسائيه
                </a>
              </li>
              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-link-ref
              >
                <a className="pointer-events-none text-black/30 dark:text-white/30 lg:px-2"></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
