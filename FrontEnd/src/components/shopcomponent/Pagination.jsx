import { ChevronLeft, ChevronRight } from "lucide-react"; // Install lucide-react if you haven't

const Pagination = ({ currentPage = 1, totalPages = 10, onPageChange }) => {
  
  // Helper to generate the exact page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    
    // Always show first page, last page, current page, and 1 sibling around current page
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || 
        i === totalPages || 
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push("...");
      }
    }
    
    // Remove consecutive duplicates of "..."
    return pages.filter((item, index) => pages.indexOf(item) === index);
  };

  const pages = getPageNumbers();

  return (
    <nav className="flex items-center justify-center gap-1 mt-2 select-none" aria-label="Pagination">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {/* Page Numbers */}
      {pages.map((page, index) => {
        if (page === "...") {
          return (
            <span key={`ellipsis-${index}`} className="px-2 text-sm text-gray-400">
              ...
            </span>
          );
        }

        const isActive = page === currentPage;

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            aria-current={isActive ? "page" : undefined}
            className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
              isActive
                ? "bg-black text-white"
                : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
};

export default Pagination;
