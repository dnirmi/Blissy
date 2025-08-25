import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/dresses'  element={<ShopCategory banner={men_banner} category="dresses"/>} />
        <Route path='/tops'  element={<ShopCategory banner={women_banner} category="tops" />} />
        <Route path='/denims'  element={<ShopCategory banner={kids_banner} category="denims" />} />
        <Route path='/heels'  element={<ShopCategory banner={women_banner} category="heels" />} />
        <Route path='/shoes'  element={<ShopCategory banner={men_banner} category="shoes"/>} />
        <Route path='/product'  element={<Product />} />
           <Route path=':productId'  element={<Product />} />
         <Route path='/cart'  element={<Cart />} /> 
          <Route path='/login'  element={<LoginSignUp />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
