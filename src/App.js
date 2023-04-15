// @ts-nocheck
import './App.css';
import { Routes, Route } from "react-router-dom";
import LogIn from './Components/LogIn/LogIn';
import SignUp from './Components/SignUp/SignUp';
import NavbarTop from './Components/NavbarTop/NavbarTop';
import NavbarBottom from './Components/NavbarBottom/NavbarBottom';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import FavPage from './Components/FavPage/FavPage';


function App() {
  return (
    <div className='App'>
      <NavbarTop />
      <NavbarBottom />
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/favouriteList" element={<FavPage />} />
        <Route path="/AboutUs" element={<AboutUs/>}/> 
      <Route path="/ContactUs" element={<ContactUs/>}/> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

