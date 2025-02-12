// import React, { useEffect, useState } from 'react';
// import Card from '../Card/Card'; // Import the Card component
// import './getProducts.css'; // Import the CSS file

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState(''); // State for search query

//   useEffect(() => {
//     // Fetch products from the API
//     fetch('https://ecommerce.routemisr.com/api/v1/products')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setProducts(data.data); // Assuming the API response has a "data" field
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value); // Update the search query
//   };

//   // Filter products based on the search query
//   const filteredProducts = products.filter((product) =>
//     product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase()) // Check if name exists
//   );

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="product-list-container">
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="navbar-left">
//           <span className="logo">Fresh Cart</span>
//           <ul className="nav-links">
//             <li>Home</li>
//             <li>Cart</li>
//             <li>Products</li>
//             <li>Categories</li>
//             <li>Brands</li>
//           </ul>
//         </div>
//         <div className="navbar-right">
//           <button className="logout-button">Logout</button>
//         </div>
//       </nav>

//       {/* Search Bar */}
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchQuery}
//           onChange={handleSearch}
//         />
//       </div>

//       {/* Product List */}
//       <div className="product-list">
//         {filteredProducts.map((product) => (
//           <Card key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;


import React, { useEffect, useState } from 'react';
import Card from '../Card/Card'; // Import the Card component
import './getProducts.css'; // Import the CSS file

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch products from the API
    fetch('https://ecommerce.routemisr.com/api/v1/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.data); // Assuming the API response has a "data" field
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value); 
  };

  
  // Filter products based on the search query
const filteredProducts = products.filter((product) =>
  product.name && typeof product.name === 'string' && product.name.toLowerCase().includes(searchQuery.toLowerCase())
);



  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="product-list-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <span className="logo">Fresh Cart</span>
          <ul className="nav-links">
            <li>Home</li>
            <li>Cart</li>
            <li>Products</li>
            <li>Categories</li>
            <li>Brands</li>
          </ul>
        </div>
        <div className="navbar-right">
          <button className="logout-button">Logout</button>
        </div>
      </nav>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Product List */}
      <div className="product-list">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;