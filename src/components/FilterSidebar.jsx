"use client"
import { Star } from "./icons/Icons"
import { Button } from "./ui/Button"
import { Card, CardContent } from "./ui/Card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/Select"
import { Checkbox } from "./ui/Checkbox"
import { Label } from "./ui/Label"

const FilterSidebar = ({
  categories,
  selectedCategories,
  selectedRatings,
  sortBy,
  onCategoryChange,
  onRatingChange,
  onSortChange,
  onClearFilters,
}) => {
  const ratings = [5, 4, 3, 2, 1]

  const renderRatingStars = (rating) => {
    return (
      <div className="flex items-center">
        {Array.from({ length: rating }, (_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400" />
        ))}
        {Array.from({ length: 5 - rating }, (_, i) => (
          <Star key={i} className="w-4 h-4 text-gray-300" />
        ))}
        <span className="ml-2">{rating}+ stars</span>
      </div>
    )
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Filters</h2>
          <Button variant="ghost" size="sm" onClick={onClearFilters}>
            Clear all
          </Button>
        </div>

        {/* Sort Section */}
        <div className="space-y-3 mb-6">
          <Label className="text-sm font-medium">Sort by</Label>
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger>
              <SelectValue value={sortBy} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Categories Section */}
        <div className="space-y-3 mb-6">
          <Label className="text-sm font-medium">Categories</Label>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category}`}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={(checked) => onCategoryChange(category, checked)}
                />
                <Label htmlFor={`category-${category}`} className="text-sm font-normal cursor-pointer">
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Ratings Section */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Rating</Label>
          <div className="space-y-2">
            {ratings.map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox
                  id={`rating-${rating}`}
                  checked={selectedRatings.includes(rating)}
                  onCheckedChange={(checked) => onRatingChange(rating, checked)}
                />
                <Label htmlFor={`rating-${rating}`} className="text-sm font-normal cursor-pointer flex items-center">
                  {renderRatingStars(rating)}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default FilterSidebar
