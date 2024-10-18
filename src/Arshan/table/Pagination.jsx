const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (isNaN(currentPage) || isNaN(totalPages)) {
        return null; // Or handle the error in some other way
    }

    return (
        <div>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <span>{currentPage} of {totalPages}</span>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
