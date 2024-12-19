import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-bg-100 ">
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="main" element={<Main />} />
      </Routes>
    </div>
  );
}
