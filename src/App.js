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
import Salon from "./pages/salon/Salon";
import { useAuthContext } from "./hooks/useAuthContext";
import BookSlot from "./pages/bookSlot/BookSlot";
import AddDetails from "./pages/addDetails/AddDetails";
import { useUser } from "./hooks/useUser";
import Nearmen from "./pages/near_men/Nearmen";
import Nearwomen from "./pages/near_women/Nearwomen";
import Addcard from "./pages/soloServiceCard/SoloServiceCard";
import cartCheckout from "./pages/cartCheckout/CartCheckout";
import Schedule from "./pages/schedule/Schedule";
import SalonHome from "./pages/salonhome/SalonHome";
import Terms from "./pages/terms/Terms";
import Privacy from "./pages/privacy/Privacy";
import Cancellation from "./pages/cancellation/Cancellation";
import SalonsNearby from "./pages/salonsNearby/SalonsNearby";
import Auth from "./pages/auth/Auth";
import UserFlow from "./pages/userFlow/UserFlow";

import "./App.css";
import AddBuisnessDetails from "./pages/addBuisnessDetails/AddBuisnessDetails";
import AddSalonServices from "./pages/addSalonServices/AddSalonServices";
import AddSalonSpecialists from "./pages/addSalonSpecialists/AddSalonSpecialists";
import AddSalonTimings from "./pages/addSalonTimings/AddSalonTimings";
import AddPaymentDetails from "./pages/addPaymentDetails/AddPaymentDetails";
import { CartContextProvider } from "./context/CartContext";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BookingSpecialists from "./pages/bookingSpecialists/BookingSpecialists";

function App() {
    const { user, authIsReady } = useAuthContext();
    const { user: userFromDB } = useUser(user ? user.uid : null);
    const [login, setlogin] = useState(false);

    // if(userFromDB){
    // 	console.log(userFromDB)
    // }

    return (
        <>
            <CartContextProvider>
                <div className="app-wrapper">
                    {authIsReady && (
                        <>
                            <Navbar user={user} fun={setlogin} />
                            <Login value={login} fun={setlogin} />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                {user && userFromDB && (
                                    <Route
                                        path="/dashboard"
                                        element={
                                            <Dashboard
                                                userFromContext={user}
                                                userFromDB={userFromDB}
                                            />
                                        }
                                    />
                                )}
                                <Route
                                    path="/user-flow"
                                    element={<UserFlow />}
                                />
                                <Route
                                    path="/addBuisnessDetails"
                                    element={<AddBuisnessDetails />}
                                />
                                <Route
                                    path="/addSalonServices"
                                    element={<AddSalonServices />}
                                />
                                <Route
                                    path="/addSalonSpecialists"
                                    element={<AddSalonSpecialists />}
                                />
                                <Route
                                    path="/addSalonTimings"
                                    element={<AddSalonTimings />}
                                />
                                <Route
                                    path="/addPaymentDetails"
                                    element={<AddPaymentDetails />}
                                />

                                <Route
                                    path="/salonsNearby"
                                    element={<SalonsNearby />}
                                />
                                <Route
                                    path={`/salon/:salonId`}
                                    element={<SalonHome />}
                                />

                                {user && (
                                    <Route
                                        path="/salon/:salonId/booking"
                                        element={<Booking userId={user.uid} />}
                                    />
                                )}
								{user && (
                                    <Route
                                        path="booking"
                                        element={<Booking userId={user.uid} />}
                                    />
                                )}
                                <Route
                                    path={`/salon/:salonId/booking/bookSlot`}
                                    element={<BookSlot />}
                                />
								<Route
                                    path={`/salon/:salonId/booking/specialists`}
                                    element={<BookingSpecialists />}
                                />
                                {user && (
                                    <Route
                                        path={`/salon/:salonId/addDetails`}
                                        element={
                                            <AddDetails userId={user.uid} />
                                        }
                                    />
                                )}

                                {user && (
                                    <Route
                                        path="/profile/:userId"
                                        element={
                                            <Profile userFromRoute={user} />
                                        }
                                    />
                                )}

                                <Route
                                    path="/privacy-policy"
                                    element={<Privacy />}
                                />
                                <Route
                                    path="/cancellation-policy"
                                    element={<Cancellation />}
                                />
                                <Route path="/terms" element={<Terms />} />

                                <Route path="/auth" element={<Auth />} />

                                <Route path="/team" element={<Team />} />

                                <Route path="/offer" element={<Offer />} />
                                {/* <Route path="/blog" element={<Blog />} /> */}
                            </Routes>
                        </>
                    )}
                </div>
            </CartContextProvider>
        </>
    );
}

export default App;
