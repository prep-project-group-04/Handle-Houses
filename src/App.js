// @ts-nocheck
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import SignUp from './Components/SignUp/SignUp';
import StartPage from './Components/StartPage/StartPage';
import AboutUs from './Components/AboutUs/AboutUs';
import Contactus from './Components/ContactUs/ContactUs';
import FavPage from './Components/FavPage/FavPage';
import Profile from './Components/Profile/Profile';
import Whatsapp from './Components/Footer/Whatsapp';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/favouriteList" element={<FavPage />} />
        <Route path="/contactUs" element={<Contactus />} />
        <Route path="/AboutUs" element={<AboutUs/>}/> 
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/Whatsapp" element={<Whatsapp/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

