"use client"

const Checkbox = ({ id, checked, onCheckedChange, className = "", ...props }) => {
  const handleChange = (e) => {
    onCheckedChange(e.target.checked)
  }

  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={handleChange}
      className={`h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 ${className}`}
      {...props}
    />
  )
}

export { Checkbox }
