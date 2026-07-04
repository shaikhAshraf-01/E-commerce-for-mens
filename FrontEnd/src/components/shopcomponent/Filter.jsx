const Filter = ({
  products, // full product array — pass this in from the parent (e.g. Shop.jsx)
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  selectedColor,
  setSelectedColor,
  selectedBrands,
  setSelectedBrands
}) => {
  const categories = ["All Categories", "Jackets", "T-shirt", "Shirt", "Pants", "Hoodies", "Sport Shoes", "Accessories"];
  const colors = ["#000000", "#808080", "#2563EB", "#22C55E", "#EF4444", "#EC4899", "#FACC15"];
  const brands = ["Nike", "Adidas", "Puma", "Reebok", "Levi's", "Zara", "H&M"];

  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  // Generic matcher: checks a product against every filter EXCEPT
  // whichever one we pass an override for. That's what makes each
  // option's count reflect "if I picked this, how many results?"
  const matchesFilters = (product, overrides = {}) => {
    const category = overrides.category ?? selectedCategory;
    const color = overrides.color !== undefined ? overrides.color : selectedColor;
    const brandsToCheck = overrides.brands ?? selectedBrands;

    const matchCategory = category === "All Categories" || product.category === category;
    const matchPrice = product.price <= priceRange;
    const matchColor = !color || (product.colors && product.colors.includes(color));
    const matchBrand = brandsToCheck.length === 0 || brandsToCheck.includes(product.brand);

    return matchCategory && matchPrice && matchColor && matchBrand;
  };

  const getCategoryCount = (category) =>
    products.filter((p) => matchesFilters(p, { category })).length;

  const getColorCount = (color) =>
    products.filter((p) => matchesFilters(p, { color })).length;

  const getBrandCount = (brand) =>
    products.filter((p) =>
      matchesFilters(p, {
        brands: selectedBrands.includes(brand)
          ? selectedBrands.filter((b) => b !== brand) // would stay checked
          : [...selectedBrands, brand], // simulate adding it
      })
    ).length;

  const totalMatchingAll = products.filter((p) => matchesFilters(p)).length;

  return (
    <aside className="p-5 md:p-6 bg-white">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Filters</h2>
        <button
          onClick={() => {
            setSelectedCategory("All Categories");
            setSelectedBrands([]);
            setSelectedColor(null);
            setPriceRange(5000);
          }}
          className="text-xs font-medium text-gray-500 hover:text-black underline cursor-pointer"
        >
          Reset All
        </button>
      </div>

      {/* Categories */}
      <div className="mb-6 md:mb-8">
        <h3 className="mb-3 font-semibold text-sm md:text-base text-gray-800">Categories</h3>
        <div className="space-y-2.5">
          {categories.map((category) => {
            const count = category === "All Categories" ? totalMatchingAll : getCategoryCount(category);
            return (
              <label
                key={category}
                className="flex items-center justify-between gap-2.5 cursor-pointer text-sm md:text-base text-gray-600 hover:text-black"
              >
                <span className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded accent-black cursor-pointer"
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                  />
                  <span className={selectedCategory === category ? "font-semibold text-black" : ""}>
                    {category}
                  </span>
                </span>
                <span className="text-xs text-gray-400">({count})</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6 md:mb-8">
        <h3 className="mb-3 font-semibold text-sm md:text-base text-gray-800">Price Range</h3>
        <input
          type="range"
          min="10"
          max="5000"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
        />
        <p className="mt-2 text-xs md:text-sm font-medium text-gray-600">₹10 - ₹{priceRange}</p>
      </div>

      {/* Colors */}
      <div className="mb-6 md:mb-8">
        <h3 className="mb-3 font-semibold text-sm md:text-base text-gray-800">Colors</h3>
        <div className="flex flex-wrap gap-2.5">
          <button
            onClick={() => setSelectedColor(null)}
            className={`h-6 px-2 text-xs rounded-full border font-medium transition-transform ${
              selectedColor === null
                ? "border-black bg-black text-white"
                : "border-gray-200 bg-white text-gray-600"
            }`}
          >
            All ({totalMatchingAll})
          </button>
          {colors.map((color) => {
            const count = getColorCount(color);
            return (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                title={`${count} product${count === 1 ? "" : "s"}`}
                style={{ backgroundColor: color }}
                className={`relative h-6 w-6 md:h-7 md:w-7 rounded-full border transition-transform hover:scale-105 active:scale-95 ${
                  selectedColor === color ? "ring-2 ring-black ring-offset-2 border-transparent" : "border-gray-200"
                }`}
              >
                <span className="absolute -top-1.5 -right-1.5 bg-white text-[9px] leading-none text-gray-500 rounded-full px-1 border border-gray-200">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Brands */}
      <div className="mb-2">
        <h3 className="mb-3 font-semibold text-sm md:text-base text-gray-800">Brands</h3>
        <div className="space-y-2.5">
          {brands.map((brand) => {
            const count = getBrandCount(brand);
            return (
              <label
                key={brand}
                className="flex items-center justify-between gap-2.5 cursor-pointer text-sm md:text-base text-gray-600 hover:text-black"
              >
                <span className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded accent-black cursor-pointer"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                  />
                  <span className={selectedBrands.includes(brand) ? "font-semibold text-black" : ""}>
                    {brand}
                  </span>
                </span>
                <span className="text-xs text-gray-400">({count})</span>
              </label>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Filter;