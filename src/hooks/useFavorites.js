"use client"

import { useState, useEffect } from "react"

const FAVORITES_KEY = "product-favorites"

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(new Set())

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_KEY)
      if (saved) {
        const favoriteIds = JSON.parse(saved)
        setFavorites(new Set(favoriteIds))
      }
    } catch (error) {
      console.error("Failed to load favorites:", error)
    }
  }, [])

  // Save to localStorage whenever favorites change
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]))
    } catch (error) {
      console.error("Failed to save favorites:", error)
    }
  }, [favorites])

  const toggleFavorite = (productId) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId)
      } else {
        newFavorites.add(productId)
      }
      return newFavorites
    })
  }

  const isFavorite = (productId) => favorites.has(productId)

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    favoriteCount: favorites.size,
  }
}
