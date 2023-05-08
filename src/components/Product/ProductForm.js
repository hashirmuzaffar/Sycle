import React, { useState, useEffect } from 'react';
//import jwt from 'jsonwebtoken'; // dependecy issue so i have run the save my product with authenication 
import './ProductForm.css'

const ProductForm = () => {

    useEffect(() => {
        window.scroll(0,0)
    },[])

    const [name, setname] = useState('');
    const [sellerId, setSellerId] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Mens');
    const [subCategory, setSubCategory] = useState('Dress');
    const [price, setPrice] = useState('');
    const [condition, setCondition] = useState('');
    const [size, setSize] = useState('Small');
    const [brand, setBrand] = useState('');
    const [colour, setColour] = useState('');
    const [image, setImage] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setname(value);
                break;
            case 'sellerId':
                setSellerId(value);
                break;
            case 'streetAddress':
                setStreetAddress(value);
                break;
            case 'city':
                setCity(value);
                break;
            case 'province':
                setProvince(value);
                break;
            case 'country':
                setCountry(value);
                break;
            case 'postalCode':
                setPostalCode(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'category':
                setCategory(value);
                break;
            case 'subCategory':
                setSubCategory(value);
                break;
            case 'price':
                setPrice(value);
                break;
            case 'condition':
                setCondition(value);
                break;
            case 'size':
                setSize(value);
                break;
            case 'brand':
                setBrand(value);
                break;
            case 'colour':
                setColour(value);
                break;
            default:
                break;
        }
    };

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        setImage(imageFile);
    };
/* 
    const handleSubmit = async (event) => {
        event.preventDefault();
        fetch("http://localhost:3004/customer/addnewproduct",{
            method: "POST",
            headers : {'Content-type':'application/json'},//, 'Authorization': `Bearer ${jwt}`},
            body: JSON.stringify({
                name,
                sellerId,
                address: {
                    streetAddress,
                    city,
                    province,
                    country,
                    postalCode,
                },
                    description,
                    category,
                    subCategory,
                    price,
                    condition,
                    size,
                    brand,
                    colour,
                    image,
            })
        })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
      } */

      const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('sellerId', sellerId);
        formData.append('address[street_address]', streetAddress);
        formData.append('address[city]', city);
        formData.append('address[province]', province);
        formData.append('address[country]', country);
        formData.append('address[postal_code]', postalCode);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('subCategory', subCategory);
        formData.append('price', price);
        formData.append('condition', condition);
        formData.append('size', size);
        formData.append('brand', brand);
        formData.append('colour', colour);
        formData.append('image', image);
      
        fetch("http://localhost:3004/customer/addnewproduct",{
          method: "POST",
          //headers : {'Authorization': `Bearer ${jwt}`}, // issue i tried installing it 
          body: formData
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      }
      

    return (
        <div className='form-container-2'>
        <h1>New Product</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={name} onChange={handleInputChange} required />
            </div>
            <div>
                <label htmlFor="sellerId">Seller ID</label>
                <input type="text" name="sellerId" value={sellerId} onChange={handleInputChange} required />
            </div>
            <div>
                <label htmlFor="street_address">Street Address</label>
                <input type="text" name="streetAddress" value={streetAddress} onChange={handleInputChange} required />
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input type="text" name="city" value={city} onChange={handleInputChange} required />
            </div>
            <div>
                <label htmlFor="province">Province</label>
                <input type="text" name="province" value={province} onChange={handleInputChange} required />
            </div>
            <div>
                <label htmlFor="country">Country</label>
                <input type="text" name="country" value={country} onChange={handleInputChange} required />
            </div>
            <div>
                <label htmlFor="postal_code">Postal Code</label>
                <input type="text" name="postalCode" value={postalCode} onChange={handleInputChange} required />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea name="description" value={description} onChange={handleInputChange}></textarea>
            </div>
            <div>
                <label>Category:</label>
                <label>
                    <input
                        type="radio"
                        name="category"
                        value="Mens"
                        checked={category === "Mens"}
                        onChange={handleInputChange}
                    />
                    Mens
                </label>
                <label>
                    <input
                        type="radio"
                        name="category"
                        value="Women"
                        checked={category === "Women"}
                        onChange={handleInputChange}
                    />
                    Women
                </label>
            </div>

            <div>
                <label htmlFor="subCategory">Sub Category</label>
                <select name="subCategory" value={subCategory} onChange={handleInputChange}>
                    <option value="Dress">Dress</option>
                        <option value="Shirt">Shirt</option>
                        <option value="Jeans">Jeans</option>
                        <option value="Ethnic">Ethnic</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Shoes">Shoes</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" value={price} onChange={handleInputChange} required />
                </div>
                <div>
                    <label htmlFor="condition">Condition</label>
                    <select name="condition" value={condition} onChange={handleInputChange} required>
                        <option value="">Select Condition</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Average</option>
                        <option value="4">4 - Satisfactory</option>
                        <option value="5">5 - Good </option>
                        <option value="6">6 - Very Good</option>
                        <option value="7">7 - Excellent</option>
                        <option value="8">8 - Hardly Worn</option>
                        <option value="9">9 - Like New</option>
                        <option value="10">10 - New</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="size">Size</label>
                    <div>
                        <input type="radio" name="size" id="small" value="Small" checked={size === "Small"} onChange={handleInputChange} style={{ display: "inline-block" }} />
                        <label htmlFor="small" style={{ display: "inline-block", marginLeft: "5px" }}>Small</label>
                    </div>
                    <div>
                        <input type="radio" name="size" id="medium" value="Medium" checked={size === "Medium"} onChange={handleInputChange} style={{ display: "inline-block" }} />
                        <label htmlFor="medium" style={{ display: "inline-block", marginLeft: "5px" }}>Medium</label>
                    </div>
                    <div>
                        <input type="radio" name="size" id="large" value="Large" checked={size === "Large"} onChange={handleInputChange} style={{ display: "inline-block" }} />
                        <label htmlFor="large" style={{ display: "inline-block", marginLeft: "5px" }}>Large</label>
                    </div>
                </div>


                <div>
                    <label htmlFor="brand">Brand</label>
                    <input type="text" name="brand" value={brand} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="colour">Colour</label>
                    <input type="text" name="colour" value={colour} onChange={handleInputChange} required />
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input type="file" name="image" onChange={handleImageChange} required />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;
