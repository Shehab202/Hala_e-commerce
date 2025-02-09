const SortBox = ({ sort, setSort }) => {
  return (
    <div>
      <div className="pb-2">
        {" "}
        <input
          onChange={(e) => setSort(e.target.id)}
          className="ml-2"
          type="radio"
          name="filter"
          id="select"
        />
        <label className="md:text-xl" htmlFor="select">
          بدون ترتيب
        </label>
      </div>
      <div className="pb-2">
        {" "}
        <input
          onChange={(e) => setSort(e.target.id)}
          className="ml-2"
          type="radio"
          name="filter"
          id="heigh"
        />
        <label className="md:text-xl" htmlFor="heigh">
          {" "}
          من الاقل الي الاعلي
        </label>
      </div>
      <div className="pb-2">
        {" "}
        <input
          onChange={(e) => setSort(e.target.id)}
          className="ml-2"
          type="radio"
          name="filter"
          id="low"
        />
        <label className="md:text-xl" htmlFor="low">
          من الاعلي الي الاقل{" "}
        </label>
      </div>
    </div>
  );
};

export default SortBox;
