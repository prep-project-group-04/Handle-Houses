// @ts-nocheck
import './App.css';
import { Routes, Route } from "react-router-dom";
import LogIn from './Components/LogIn/LogIn';
import SignUp from './Components/SignUp/SignUp';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

