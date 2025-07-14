"use client"

import React, { useState } from "react"

const Select = ({ children, value, onValueChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isOpen,
          setIsOpen,
          value,
          onValueChange,
        }),
      )}
    </div>
  )
}

const SelectTrigger = ({ children, isOpen, setIsOpen, value }) => {
  return (
    <button
      className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
}

const SelectValue = ({ value }) => {
  const displayValues = {
    name: "Name",
    "price-asc": "Price: Low to High",
    "price-desc": "Price: High to Low",
    rating: "Rating",
  }

  return <span>{displayValues[value] || "Select..."}</span>
}

const SelectContent = ({ children, isOpen, onValueChange, setIsOpen }) => {
  if (!isOpen) return null

  return (
    <div className="absolute top-full left-0 right-0 z-50 mt-1 rounded-md border border-gray-300 bg-white shadow-lg">
      {React.Children.map(children, (child) => React.cloneElement(child, { onValueChange, setIsOpen }))}
    </div>
  )
}

const SelectItem = ({ children, value, onValueChange, setIsOpen }) => {
  const handleClick = () => {
    onValueChange(value)
    setIsOpen(false)
  }

  return (
    <div className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer" onClick={handleClick}>
      {children}
    </div>
  )
}

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
