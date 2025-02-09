const FilterBox = ({ filter, setFilter }) => {
  return (
    <div>
      <div className="pb-2">
        <input
          onChange={(e) => setFilter(e.target.id)}
          className="ml-2"
          type="radio"
          name="filter"
          id="all"
        />
        <label className="md:text-xl" htmlFor="all">
          بدون فلتر
        </label> 
      </div>

      <div className="pb-2">
        {" "}
        <input
          onChange={(e) => setFilter(e.target.id)}
          className="ml-2"
          type="radio"
          name="filter"
          id="mobile"
        />
        <label className="md:text-xl" htmlFor="mobile">
          هاتف{" "}
        </label>
      </div>
      <div className="pb-2">
        {" "}
        <input
          onChange={(e) => setFilter(e.target.id)}
          className="ml-2"
          type="radio"
          name="filter"
          id="labtop"
        />
        <label className="md:text-xl" htmlFor="labtop">
          {" "}
          لابتوب
        </label>
      </div>
    </div>
  );
};
export default FilterBox;
