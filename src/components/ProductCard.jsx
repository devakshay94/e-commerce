"use client"
import { Heart, Star } from "./icons/Icons"
import { Button } from "./ui/Button"
import { Card, CardContent } from "./ui/Card"
import { Badge } from "./ui/Badge"

const ProductCard = ({ product, isFavorite, onToggleFavorite }) => {
  const handleFavoriteClick = () => {
    onToggleFavorite(product.id)
  }

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/300x300?text=No+Image"
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`w-4 h-4 ${index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg"
            onError={handleImageError}
            loading="lazy"
          />

          {/* Favorite button */}
          <Button
            variant="ghost"
            size="sm"
            className={`absolute top-2 right-2 p-2 rounded-full ${
              isFavorite ? "bg-red-100 text-red-600 hover:bg-red-200" : "bg-white/80 text-gray-600 hover:bg-white"
            }`}
            onClick={handleFavoriteClick}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
          </Button>

          {/* Favorite badge */}
          {isFavorite && <Badge className="absolute top-2 left-2 bg-red-600 text-white">Favorite</Badge>}
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center">{renderStars(product.rating)}</div>
            <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
          </div>

          {/* Price and category */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
            <Badge variant="outline">{product.category}</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
