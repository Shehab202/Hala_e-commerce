import { brands } from "../../data/brands";

const Brands = () => {
  return (
    <>
      <div className=" colored2 py-7 ">
      <div className=" gap-10 w-5/6 m-auto  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4">

        {brands.map((brand) => (
          <div key={brand.id} className=" w-60  bg-white rounded-xl m-auto text-center ">

            <img className="rounded-2xl h-25 text-center m-auto" src={brand.image} alt="" />
            </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Brands;
