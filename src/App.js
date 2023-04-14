import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import NavbarTop from './components/NavbarTop/NavbarTop';
import NavbarBottom from './components/NavbarBottom/NavbarBottom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <NavbarTop />
      <NavbarBottom />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;