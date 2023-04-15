// @ts-nocheck
import './App.css';
import { Routes, Route } from "react-router-dom";
import LogIn from './Components/LogIn/LogIn';
import SignUp from './Components/SignUp/SignUp';
import StartPage from './Components/StartPage/StartPage';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import FavPage from './Components/FavPage/FavPage';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<StartPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/favouriteList" element={<FavPage />} />
        <Route path="/AboutUs" element={<AboutUs/>}/> 
      <Route path="/ContactUs" element={<ContactUs/>}/> 
      </Routes>
    </div>
  );
}

export default App;

