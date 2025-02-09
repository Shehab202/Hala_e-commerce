import { TECarousel, TECarouselItem } from "tw-elements-react";
 import img2 from "../../../public/images/products/category/109576.jpg";
import img1 from "../../../public/images/products/category/ew.webp";
 import img3 from "../../../public/images/products/category/freestocks-yqBKaF1KecM-unsplash (1).webp";

export default function CarouselSlidesOnly() {
  return (
    <>
      <TECarousel ride="carousel ">
        <div className="relative x   w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={img1}
              className="block  w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative   float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
             src={img2}
              className="block  w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left  -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
             src={img3}
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}

// import { TECarousel, TECarouselItem } from "tw-elements-react";
// import img1 from "../../../public/images/products/category/freestocks-yqBKaF1KecM-unsplash (1).webp";
// import img2 from "../../../public/images/products/category/clay-banks-XvS-uKUoUao-unsplash.webp";
// import img3 from "../../../public/images/products/category/109576.jpg";



// import "./slider.css";
// export default function CarouselCrossfade() {
//   return (
//     <>
//       <div className="carousel">
//         <TECarousel showControls showIndicators crossfade ride="carousel ">
//           <div
//             className="relative  w-full overflow-hidden after:clear-both after:block after:content-[''] "
//             data-te-carousel-init
//             data-te-carousel-crossfade
//           >
//             <TECarouselItem
//               itemID={1}
//               className="relative float-left imgSlider -mr-[100%] hidden w-full  !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
//             >
//               <img
//                 src={img1}
//                 loading="lazy"
//                 className="block w-full"
//                 alt="..."
//               />
//             </TECarouselItem>
//             <TECarouselItem
//               itemID={2}
//               className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
//             >
//               <img
//                 src={img2}
//                 loading="lazy"
//                 className="block w-full"
//                 alt="..."
//               />
//             </TECarouselItem>
//             <TECarouselItem
//               itemID={3}
//               className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
//             >
//               <img
//                 src={img3}
//                 loading="lazy"
//                 className="block w-full"
//                 alt="..."
//               />
//             </TECarouselItem>
            
//           </div>
//         </TECarousel>
//       </div>
//     </>
//   );
// }
