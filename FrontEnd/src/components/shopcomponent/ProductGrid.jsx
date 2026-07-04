import ProductCard from "./ProductCard";

function ProductGrid({ products = [] }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-gray-500 font-medium text-sm md:text-base">No products found matching filters.</p>
      </div>
    );
  }

  return (
    // Changed grid-cols-1 to grid-cols-2 for compact mobile layouts, and specified grid-cols-4 for larger screen viewports
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 p-0.5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
