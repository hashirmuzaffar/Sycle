import React, { Fragment, useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";


//this is temporary
// const product={
//     name:"product 11233",
//     images:[{url:"https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"}],
//     price:1250.3,
//     _id:"thisisid"
//   }


export const Product = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    getProductbyCategory();
  }, []);

  const getProductbyCategory = async () => {
    let results = await fetch(`http://localhost:3004/products`);
    results = await results.json();
    setProducts(results);
  };

  console.warn(products);

  return (
    <Fragment>
      <div className="AllProducts">
        <div className="cards" id="cards">
          {Array.isArray(products) && products.length > 0
            ? products.map((product) => (
                <ProductCard key={product._id} pItems={product} />
              ))
            : "No products found"}
        </div>
      </div>
    </Fragment>
  );
};


export default Product;