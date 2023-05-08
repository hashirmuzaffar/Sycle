import React, { useEffect, useState } from 'react';
import './SignUpForm.css'



const SignUpForm = () => {

    useEffect(() => {
        window.scroll(0,0)
    },[])

    const [username, setusername] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [phone, setPhone] = useState('');


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'username':
                setusername(value);
                break;
            case 'email':
                    setEmail(value);
                    break;
            case 'password':
                    setPass(value);
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
            case 'phone':
                setPhone(value);
                break;
            default:
                break;
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

            fetch("http://localhost:3004/SignUp",{
                method: "POST",
                headers : {'Content-type':'application/json'},
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    address: {
                        streetAddress,
                        city,
                        province,
                        country,
                        postalCode
                    },
                    phone
                })
            })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
          }

    return (
        <div className='form-container-3'>
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" value={username} onChange={handleInputChange} required />
            </div>
            <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" value={email} onChange={handleInputChange} required/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={handleInputChange} required/>
        </div>
            <div>
                <label htmlFor="street_address">Street Address:</label>
                <input type="text" name="streetAddress" value={streetAddress} onChange={handleInputChange} required />
            </div>
            <div>
                <label htmlFor="city">City:</label>
                <input type="text" name="city" value={city} onChange={handleInputChange} required />
            </div>
            <div>
                <label htmlFor="province">Province:</label>
                <input type="text" name="province" value={province} onChange={handleInputChange} required />
            </div>
            <div>
                <label htmlFor="country">Country:</label>
                <input type="text" name="country" value={country} onChange={handleInputChange} required />
            </div>
            <div>
                <label htmlFor="postal_code">Postal Code:</label>
                <input type="text" name="postalCode" value={postalCode} onChange={handleInputChange} required />
            </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" name="phone" onChange={handleInputChange} required />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
                <div>
                     <button type="Cancel">Cancel</button>
                </div>
            </form>
        </div>
    );
};


export default SignUpForm;
