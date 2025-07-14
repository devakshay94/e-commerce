export interface Product {
  id: number
  name: string
  price: number
  category: string
  rating: number
  image: string
  description: string
}

export type SortOption = "price-asc" | "price-desc" | "rating" | "name"

export interface FilterState {
  categories: string[]
  ratings: number[]
  sortBy: SortOption
}
