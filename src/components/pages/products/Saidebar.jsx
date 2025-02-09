import FilterBox from "./FilterBox";
import SortBox from "./SortBox";

const Saidebar = ({setFilter,filter,sort,setSort}) => {
  return (
    <>
      <div className="border-2  items-center  justify-around flex lg:block h-fit p-8 w-full rounded-2xl  colored2">
        <div>

        <p className="text-xl  md:text-2xl pb-2 font-bold">فلتر حسب المنتج</p>
        <FilterBox setFilter={setFilter }  filter={filter}/>
        </div>
<div>
  
        <p  className="text-xl md:text-2xl font-bold pb-4"> ترتيب حسب المنتج</p>
        <SortBox sort={sort} setSort={setSort}/>
</div>
      </div>
    </>
  );
};

export default Saidebar;
