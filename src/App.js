import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import { useState } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import Men from "./pages/men_salon/Men";
import Women from "./pages/women_salon/Women";
import Booking from "./pages/booking/Booking";
import Team from "./pages/team/Team";
import Blog from "./pages/blog/Blog";
import Profile from "./pages/profile/Profile";
import Offer from "./pages/offer/Offer";
import Category from "./pages/category/Category";
import Nearmen from "./pages/near_men/Nearmen";
import Nearwomen from "./pages/near_women/Nearwomen";
import Addcard from "./pages/addCard/Addcard";
import Addcard2 from "./pages/addCard2/Addcard2";
import Schedule from "./pages/schedule/Schedule";


function App() {
  const [login, setlogin] = useState(false)
  
  return (
    <>
      <Navbar fun={setlogin}/>
      <Login value={login} fun={setlogin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/category/men_salon" element={<Men/>}/>
        <Route path="/category/women_salon" element={<Women/>}/>
        <Route path="/salon_nearby/men_salon" element={<Nearmen/>}/>
        <Route path="/salon_nearby/women_salon" element={<Nearwomen/>}/>
        <Route path="/addcard" element={<Addcard/>}/>
        <Route path="/addcard2" element={<Addcard2/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/salons" element={<Category/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/offer" element={<Offer/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </>
  );
}

export default App;
