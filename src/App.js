// @ts-nocheck
import './App.css';
import { Routes, Route } from "react-router-dom";
import LogIn from './Components/LogIn/LogIn';
import SignUp from './Components/SignUp/SignUp';
import NavbarTop from './Components/NavbarTop/NavbarTop';
import NavbarBottom from './Components/NavbarBottom/NavbarBottom';
import Footer from './Components/Footer/Footer';
import FavPage from './Components/FavPage/FavPage';
import ForgetPass from "./Components/ForgPass/ForgPass"
import PasswordReset from "./Components/ForgPass/Restpass"


function App() {
  return (
    <div className='App'>
      <NavbarTop />
      <NavbarBottom />
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/favouriteList" element={<FavPage />} />
        <Route path="/forgot-password" element={<ForgetPass />} />
        <Route path="/reset-password" element={<PasswordReset />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

