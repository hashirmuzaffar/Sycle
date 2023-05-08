import React from 'react'
import { Link } from "react-router-dom"
import './Product.css'


const ProductCard = ({ pItems }) => {
  const base64Encode = (data) => {
    return btoa(String.fromCharCode(...new Uint8Array(data)));
  };

  const imageData = base64Encode(pItems.image.img.data.data);

  return (
    <Link className="productcard" to={"/product"} state={{ pItems }} >
      <img src={`data:${pItems.image.img.contentType};base64,${imageData}`} width="300"/>
      <p>{pItems.name}</p>
      <span>{"Rs. " + pItems.price}</span>
    </Link>
  );
};


export default ProductCard