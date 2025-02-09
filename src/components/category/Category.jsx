import { categories } from "../../data/category";
// import k from  '../../assets/andras-vas-Bd7gNnWJBkU-unsplash.jpg'
const Category = () => {
  return (
    <>
      
        <div className="grid grid-cols-1 sm:w-full w-5/6 m-auto hover  mt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {categories.map((category) => (
            <>
              
              <div key={category.id}  className="rounded-lg  transition-all overflow-hidden bg-white hover:bg-gray-700 dark:bg-gray-800">
            
                <img
                loading="lazy"
                  className="rounded-t-lg max-h-60 w-full "
                  src= {category.image}
                  alt=""
                />

                <div className="p-6">
                  <h5 className="mb-2 colored5  text-xl text-center font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {category.title}
                  </h5>
                </div>
              </div>
              
            </>
          ))}
        </div>
   
    </>
  );
};

export default Category;
