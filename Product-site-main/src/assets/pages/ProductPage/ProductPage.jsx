import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "../../components/Data/getProducts.css";

function ProductPage() {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const getData = async () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div>
      {products ? (
         <>
         <Card key={products.id} product={products} />
         {/* <button>
           <Link to="/">Back to Home</Link>
         </button> */}
       </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductPage;
