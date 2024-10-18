import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function Pagination({
  totalRows,
  rowsPerPage,
  currentPage,
  setCurrentPage,
  setRowsPerPage,
}) {
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  console.log("totalPage", totalPages);

  const handlePrev = () => {
    console.log("Current Page Before Prev:", currentPage);
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    console.log("Current Page Before Next:", currentPage);
    console.log("Total Pages:", totalPages);
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };


  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to page 1 when changing rows per page
  };

  return (
    <div className="flex items-center gap-x-3 justify-end text-[#282F5A] text-[14px] py-4 px-1">
      <div className="flex items-center space-x-2">
        <p className="font-semibold">Results Per Page</p>
        <select
          className="border border-gray-300 rounded-md px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-[#282F5A]"
          onChange={handleRowsPerPageChange}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <p>{`${(currentPage - 1) * rowsPerPage + 1}-${Math.min(
          currentPage * rowsPerPage,
          totalRows
        )} of ${totalRows}`}</p>
        <button
          onClick={handlePrev}
          disabled={currentPage === 1} // Disable left arrow if on the first page
          className="cursor-pointer"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages} // Disable right arrow if on the last page
          className="cursor-pointer"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
