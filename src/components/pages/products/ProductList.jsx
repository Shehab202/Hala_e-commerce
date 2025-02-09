import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <>
    
      <div className="grid  px-3 grid-cols-12 gap-3 p-10">
        {products.map((item) => (
          <>
           <Link to={`productss/${item.id}`}
              key={item.id}
              className="col-span-12 md:col-span-4 lg:col-span-4 items-center rounded-2xl bg-amber-200"
            >
              <div className="text-center">
                <div className="text-center mb-3 m-auto">
                  <img
                    className=" md:w-48  w-48 m-auto  rounded-2xl text-center"
                    loading="lazy"
                    src={item.image}
                    alt=""
                  />
                </div>

                <div className="py-3">
                  <p className="text-xl font-bold">{item.title}</p>
                  <div className="flex justify-center items-center">
                    <div className="flex justify-center my-3  w-16 text-center items-center bg-green-700 rounded-2xl">
                      <h3 className="px-1 text-amber-300">
                        <AiFillStar />
                      </h3>
                      <h3 className="px-1 font-bold">{item.rating}</h3>
                    </div>
                    <div className=" font-bold   px-5">
                      تقييمات {item.reviews}
                    </div>
                  </div>
                </div>
                <p className="text-xl pb-2 text-red-600">${item.price}</p>
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
};

export default ProductList;
