// import "./pagination.css";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const generatedPages = [];
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }

  return (
    <div className="pagination flex ">
      <button
        onClick={() => setCurrentPage((prev) => prev - 1)}
        className="p-3  hover:text-amber-100 cursor-pointer font-bold text-xl"
        disabled={currentPage === 1}

      >
        <i className="bi bi-arrow-right"></i>
        السابق
      </button>
      {generatedPages.map((page) => (
        <div 
          onClick={() => setCurrentPage(page)} 
          className="p-3  hover:text-amber-100 cursor-pointer text-xl"
          key={page}
          >
          {page}
        </div>
      ))}
      <button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        className="p-3  hover:text-amber-100 cursor-pointer font-bold text-xl"
        disabled={currentPage === pages}
      >
        التالی
        <i className="bi  hover:text-amber-100 bi-arrow-left"></i>
      </button>
    </div>
  );
};

export default Pagination;
