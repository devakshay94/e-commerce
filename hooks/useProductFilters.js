"use client"

import { useMemo } from "react"

export const useProductFilters = ({ products, selectedCategories, selectedRatings, sortBy }) => {
  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      // Category filter
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category)

      // Rating filter - check if product rating falls within selected ranges
      const ratingMatch =
        selectedRatings.length === 0 ||
        selectedRatings.some((rating) => product.rating >= rating && product.rating < rating + 1)

      return categoryMatch && ratingMatch
    })

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "name":
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [products, selectedCategories, selectedRatings, sortBy])

  return filteredProducts
}
