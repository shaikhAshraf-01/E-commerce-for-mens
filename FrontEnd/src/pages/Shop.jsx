import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ProductGrid from "../components/shopcomponent/ProductGrid";
import Filter from "../components/shopcomponent/Filter";
import Pagination from "../components/shopcomponent/Pagination"; 
import { product as allProducts } from "../../src/assets/data/product";

function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Search term comes from the URL (?search=...), set by the Navbar
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  // 1. Lifted States: Define filter values here
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [priceRange, setPriceRange] = useState(5000); // Adjusted max value context if needed
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);

  // 2. Filter Logic Processing Matrix
  const filteredProducts = useMemo(() => {
    return allProducts.filter((prod) => {
      // Category Match
      const matchesCategory = 
        selectedCategory === "All Categories" || 
        prod.category.toLowerCase() === selectedCategory.toLowerCase();

      // Price Match (Assuming items use absolute numeric data)
      const matchesPrice = prod.price <= priceRange;

      // Color Match — colors is stored as an array on each product
      const matchesColor = !selectedColor || (prod.colors && prod.colors.includes(selectedColor));

      // Brands Match
      const matchesBrand = 
        selectedBrands.length === 0 || 
        selectedBrands.includes(prod.brand);

      // Search Match — checks product name (and brand, so "nike" also works)
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        prod.name.toLowerCase().includes(query) ||
        (prod.brand && prod.brand.toLowerCase().includes(query)) ||
        (prod.category && prod.category.toLowerCase().includes(query));

      return matchesCategory && matchesPrice && matchesColor && matchesBrand && matchesSearch;
    });
  }, [selectedCategory, priceRange, selectedColor, selectedBrands, searchQuery]);

  // 3. Pagination calculation runs on the FILTERED array, not the raw array
  const itemsPerPage = 12; 
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset page helper when options switch
  const handleFilterChange = (updaterFn) => {
    updaterFn();
    setCurrentPage(1); // Crucial step: Reset to page 1 on active filter selection
  };

  return (
    <main className="w-full h-screen p-2 md:p-4 flex gap-6 overflow-hidden bg-gray-50 relative">
      
      {isFilterOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
          onClick={() => setIsFilterOpen(false)}
        />
      )}

      {/* Side drawer panel updates */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-72 h-full bg-white p-4 shadow-xl transform transition-transform duration-300 ease-in-out
        md:relative md:transform-none md:z-0 md:p-0 md:shadow-none md:flex md:shrink-0 md:bg-transparent
        ${isFilterOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}>
        <div className="w-full h-full overflow-y-auto bg-white rounded-xl border border-gray-200 relative">
          <button 
            onClick={() => setIsFilterOpen(false)}
            className="absolute top-4 right-4 p-1 rounded-lg text-gray-500 hover:bg-gray-100 md:hidden"
          >
            <X className="h-6 w-6" />
          </button>
          
          {/* 4. Pass states and updaters into Filter component */}
          <Filter 
            products={allProducts}
            selectedCategory={selectedCategory}
            setSelectedCategory={(val) => handleFilterChange(() => setSelectedCategory(val))}
            priceRange={priceRange}
            setPriceRange={(val) => handleFilterChange(() => setPriceRange(val))}
            selectedColor={selectedColor}
            setSelectedColor={(val) => handleFilterChange(() => setSelectedColor(val))}
            selectedBrands={selectedBrands}
            setSelectedBrands={(val) => handleFilterChange(() => setSelectedBrands(val))}
          />
        </div>
      </div>

      <div className="flex-1 h-full flex flex-col justify-between overflow-hidden">
        
        <div className="flex items-center justify-between pb-3 md:hidden border-b border-gray-200 mb-2 shrink-0">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 px-3 py-2 border border-gray-200 bg-white rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <Menu className="h-5 w-5" />
            Filters ({filteredProducts.length})
          </button>
          <span className="text-xs text-gray-500 font-medium">
            Page {currentPage} of {totalPages}
          </span>
        </div>

        {searchQuery && (
          <p className="text-sm text-gray-500 mb-2 shrink-0">
            Showing results for <span className="font-semibold text-gray-800">"{searchQuery}"</span> ({filteredProducts.length} found)
          </p>
        )}

        <div className="flex-1 overflow-y-auto pb-4">
          <ProductGrid products={displayedProducts} />
        </div>

        <div className="py-4 bg-gray-50 border-t border-gray-200 shrink-0">
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={(page) => setCurrentPage(page)} 
          />
        </div>

      </div>
    </main>
  );
}

export default Shop;