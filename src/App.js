import LoginForm from './components/Login/LoginForm';
import NavigationBar from './components/Navigation/Nav';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Home from './components/Home/home';
import ProductForm from './components/Product/ProductForm';
import SignUpForm from './components/Signup/SignUpForm';
import Product from './components/Product/Products';
import FullProductDetail from './components/Product/ProductDetails';

function App() {
  return (
    <div>
    
    <BrowserRouter>
    <NavigationBar/>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/Login' element={<LoginForm />} />
        <Route path='/Signup' element={<SignUpForm />} />
        <Route path='/customer/addnewproduct' element={<ProductForm />} />
        <Route path='/products' element={<Product />} />
        <Route path='/product' element={<FullProductDetail />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;
