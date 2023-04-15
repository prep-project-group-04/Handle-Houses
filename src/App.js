// @ts-nocheck
import './App.css';
import { Routes, Route } from "react-router-dom";
import LogIn from './Components/LogIn/LogIn';
import SignUp from './Components/SignUp/SignUp';

import StartPage from './Components/StartPage/StartPage';


function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="Login" element={<LogIn/>} />
      <Route path="/SignUp" element={<SignUp/>}/>
    </Routes>
    </div>
  );
}

export default App;

