import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from './components/footer/Footer';
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import { useState } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import Men from "./pages/men_salon/Men";
import Women from "./pages/women_salon/Women";
import Booking from "./pages/booking/Booking";


function App() {
  const [login, setlogin] = useState(false)
  
  return (
    <>
      <Navbar fun={setlogin}/>
      <Login value={login} fun={setlogin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/salon_nearby/men_salon" element={<Men/>}/>
        <Route path="/salon_nearby/women_salon" element={<Women/>}/>
        <Route path="/booking" element={<Booking/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
