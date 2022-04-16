// import './App.css';

import { Route, Routes } from "react-router-dom";
import { GetRes } from "./components/GetRes";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { SingUp } from "./components/SignUp";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signUp" element={<SingUp/>}></Route>
      <Route path="/getResturant" element={<GetRes/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
