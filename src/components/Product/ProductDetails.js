import React from 'react'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Product.css'



function FullProductDetail() {
    const location = useLocation();
    const { pItems } = location.state;
let [product, setProducts] = useState([]);

    useEffect(() => {
      getProductbyID();
    }, []);
  
    const getProductbyID = async () => {
      let results = await fetch(`http://localhost:3004/product/`+pItems._id);
      results = await results.json();
      setProducts(results);
    };
  
    console.warn(product);

    const base64Encode = (data) => {
        return btoa(String.fromCharCode(...new Uint8Array(data)));
      };
    
      const imageData = base64Encode(pItems.image.img.data.data);

    return (
        <div className='division'>
        <img className='image' src={`data:${pItems.image.img.contentType};base64,${imageData}`} />
        <div className='details'>
        <div className='text-box'>
          <p className='para'>Name: {product.name}</p>
        </div>
        <div className='text-box'>
          <p className='para'>Price: Rs {product.price}</p>
          </div>
        <div className='text-box'>
          <p className='para'>Description: {product.description}</p>
          </div>
        <div className='text-box'>
          <p className='para'>Colour: {product.colour}</p>
          </div>
        <div className='text-box'>
          <p className='para'>Catrgory: {product.category}</p>
          </div>
        <div className='text-box'>
          <p className='para'>SubCategory: {product.subCategory}</p>
          </div>
        <div className='text-box'>
          <p className='para'>Condition: {product.condition}/10</p>
          </div>
        <div className='text-box'>
          <p className='para'>Size: {product.size}</p>
          </div>
        <div className='text-box'>
          <p className='para'>Brand: {product.brand}</p>
        </div>
            <button className='btn'>Make an Offer</button>
        </div>
        </div>   
      );
};

export default FullProductDetail;



