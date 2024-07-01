import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import jwt from 'jwt-decode';
import LayOut from './Components/LayOut/LayOut.jsx';
import Home from './Components/Screens/HomeScreens/Home/Home.jsx';
import BackgroundImagePage from './Components/Screens/BackgroundScreens/BackgroundImagePage/BackgroundImagePage.jsx';
import Categories from './Components/Screens/CategoriesScreen/Categories.jsx';
import About from './Components/Screens/About/About.jsx';
import Employees from './Components/Screens/Employees/Employees.jsx';
import ProfileScreen from './Components/Screens/ProfileScreen/ProfileScreen.jsx';
import ContactScreen from './Components/Screens/ContactScreen/ContactScreen.jsx';
import ProductsScreen from './Components/Screens/ProductsScreen/ProductsScreen.jsx';
import ProductsDetails from './Components/Screens/ProductsDetails/ProductsDetails.jsx';
import ShoppingCart from './Components/Screens/ShoppingCart/ShoppingCart.jsx';
import Favourites from './Components/Screens/FavouritesScreen/Favourites.jsx';
import Login from './Components/Screens/LogsScreen/LoginScreen/Login.jsx';
import SignUp from './Components/Screens/LogsScreen/SignUpScreen/SignUp.jsx';
import ForgetPassword from './Components/Screens/LogsScreen/ForgetPassword/ForgetPassword.jsx';
import ResetPassword from './Components/Screens/LogsScreen/ResetPassword/ResetPassword.jsx';
import Bestseller from './Components/Screens/BestsellerScreen/Bestseller.jsx';
import FAQ from './Components/Screens/FAQScreen/FAQ.jsx';
import SuggestedDecorations from './Components/Screens/BackgroundScreens/SuggestedDecorations/SuggestedDecorations.jsx';

export default function App() {
  const [user, setUser] = useState(null);

  function saveCurrentUser() {
    let token = localStorage.getItem('UserToken');
    let decoded = jwt(token);
    return decoded;
  }

  return (
      <Router>
        <Routes>
          <Route path="" element={<LayOut user={user} setUser={setUser} />}>
            <Route index element={<Home />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/About" element={<About />} />
            <Route path="/Employees" element={<Employees />} />
            <Route path="/BackgroundImagePage" element={<BackgroundImagePage />} />
            <Route path="/ProfileScreen" element={<ProfileScreen />} />
            <Route path="/ContactScreen" element={<ContactScreen />} />
            <Route path="/ProductsScreen" element={<ProductsScreen />} />
            <Route path="/ProductsScreen/:id" element={<ProductsScreen />} />
            <Route path="/ProductsDetails/:id" element={<ProductsDetails />} />    
            <Route path="/ShoppingCart" element={<ShoppingCart />} />
            <Route path="/Favourites" element={<Favourites />} />
            <Route path="/Login" element={<Login info={saveCurrentUser} />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/ForgetPassword" element={<ForgetPassword />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/Bestseller" element={<Bestseller />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/SuggestedDecorations" element={<SuggestedDecorations />} />
          </Route>
        </Routes>
      </Router>
  );
}
