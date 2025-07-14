"use client"

import { useState } from "react"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MOCK_PRODUCTS, getUniqueCategories } from "@/data/products"
import { useFavorites } from "@/hooks/useFavorites"
import { useProductFilters } from "@/hooks/useProductFilters"
import FilterSidebar from "@/components/FilterSidebar"
import ProductGrid from "@/components/ProductGrid"

const ITEMS_PER_PAGE = 8

function ProductListingPage() {
  // State management
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedRatings, setSelectedRatings] = useState([])
  const [sortBy, setSortBy] = useState("name")
  const [currentPage, setCurrentPage] = useState(1)
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Custom hooks
  const { favorites, toggleFavorite, favoriteCount } = useFavorites()

  const filteredProducts = useProductFilters({
    products: MOCK_PRODUCTS,
    selectedCategories,
    selectedRatings,
    sortBy,
  })

  // Pagination logic
  const paginatedProducts = filteredProducts.slice(0, currentPage * ITEMS_PER_PAGE)
  const hasMoreProducts = paginatedProducts.length < filteredProducts.length

  // Event handlers
  const handleCategoryChange = (category, checked) => {
    setSelectedCategories((prev) => (checked ? [...prev, category] : prev.filter((c) => c !== category)))
    setCurrentPage(1) // Reset pagination when filters change
  }

  const handleRatingChange = (rating, checked) => {
    setSelectedRatings((prev) => (checked ? [...prev, rating] : prev.filter((r) => r !== rating)))
    setCurrentPage(1)
  }

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy)
    setCurrentPage(1)
  }

  const handleClearFilters = () => {
    setSelectedCategories([])
    setSelectedRatings([])
    setCurrentPage(1)
  }

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1)
  }

  const categories = getUniqueCategories(MOCK_PRODUCTS)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-gray-900">Product Store</h1>
            <div className="flex items-center gap-4">
              {/* Mobile filter toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="lg:hidden"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Badge variant="secondary">{favoriteCount} favorites</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className={`lg:w-64 space-y-6 ${showMobileFilters ? "block" : "hidden lg:block"}`}>
            <FilterSidebar
              categories={categories}
              selectedCategories={selectedCategories}
              selectedRatings={selectedRatings}
              sortBy={sortBy}
              onCategoryChange={handleCategoryChange}
              onRatingChange={handleRatingChange}
              onSortChange={handleSortChange}
              onClearFilters={handleClearFilters}
            />
          </aside>

          {/* Main content */}
          <main className="flex-1">
            {/* Results summary */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing {paginatedProducts.length} of {filteredProducts.length} products
              </p>
            </div>

            {/* Product grid */}
            <ProductGrid products={paginatedProducts} favorites={favorites} onToggleFavorite={toggleFavorite} />

            {/* Load more button */}
            {hasMoreProducts && (
              <div className="flex justify-center mt-8">
                <Button onClick={handleLoadMore} size="lg">
                  Load More Products
                </Button>
              </div>
            )}

            {/* No results state */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No products found matching your filters.</p>
                <Button onClick={handleClearFilters}>Clear Filters</Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default ProductListingPage