# E-Commerce Product Listing

A modern, responsive e-commerce product listing page built with React 18 and vanilla CSS.

## Features

- **Product Display**: Grid layout with product images, names, prices, categories, and ratings
- **Filtering**: Filter by category and rating with real-time updates
- **Sorting**: Sort by price (ascending/descending), rating, or name
- **Favorites**: Add/remove products from favorites with localStorage persistence
- **Responsive Design**: Mobile-first approach with collapsible filters
- **Infinite Scroll**: Load more products with pagination
- **Performance**: Optimized with lazy loading and React hooks

## Tech Stack

- **Framework**: React 18
- **Language**: JavaScript (ES6+)
- **Styling**: Vanilla CSS with utility classes
- **State Management**: React hooks with custom hooks
- **Storage**: localStorage for favorites persistence
- **Build Tool**: Create React App

## Project Structure

\`\`\`
src/
├── components/
│   ├── ui/                   # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Badge.jsx
│   │   ├── Select.jsx
│   │   ├── Checkbox.jsx
│   │   └── Label.jsx
│   ├── icons/
│   │   └── Icons.jsx         # SVG icon components
│   ├── ProductCard.jsx       # Individual product card
│   ├── ProductGrid.jsx       # Product grid container
│   └── FilterSidebar.jsx     # Filters and sorting
├── hooks/
│   ├── useFavorites.js       # Favorites management
│   └── useProductFilters.js  # Product filtering logic
├── data/
│   └── products.js           # Mock product data
├── App.jsx                   # Main application component
├── App.css                   # Application styles
└── index.js                  # Application entry point
\`\`\`

## Getting Started

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd ecommerce-product-listing
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start development server**
   \`\`\`bash
   npm start
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- \`npm start\` - Runs the app in development mode
- \`npm build\` - Builds the app for production
- \`npm test\` - Launches the test runner
- \`npm eject\` - Ejects from Create React App (one-way operation)

## Development Notes

- **Pure React**: No framework dependencies, uses Create React App
- **Custom UI Components**: Built from scratch without external UI libraries
- **Vanilla CSS**: Custom utility classes for styling
- **Performance Optimized**: Uses React.memo, useMemo, and useCallback where appropriate
- **Responsive Design**: Mobile-first approach with CSS media queries
- **Accessibility**: Proper ARIA labels and semantic HTML

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features used throughout
- No external dependencies beyond React

## Customization

### Adding New Products
Edit \`src/data/products.js\` to add or modify product data.

### Styling
Modify \`src/App.css\` to customize the appearance. The CSS uses utility classes similar to Tailwind CSS.

### Components
All UI components are in \`src/components/ui/\` and can be customized as needed.

## Future Enhancements

- [ ] Connect to real product API
- [ ] Add shopping cart functionality
- [ ] Implement product search
- [ ] Add price range filter
- [ ] Product detail modal/page
- [ ] Add unit tests with Jest and React Testing Library
- [ ] Implement React Router for navigation
- [ ] Add state management with Context API or Redux

## Performance Considerations

- Images are lazy-loaded for better performance
- Product filtering uses memoization to prevent unnecessary re-renders
- Component re-renders are optimized with proper dependency arrays
- localStorage operations are wrapped in try-catch blocks

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
