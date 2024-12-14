import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";

// Import components
import Navbar from "./Components/Navbar.jsx";
import Herosection from "./Components/Herosection";
import NotYourAverageRealtor from "./Components/NotYourAverageRealtor.jsx";
import WhyChooseUs from "./Components/WhyChooseUs.jsx";
import OurProject from "./Components/OurProject.jsx";
import Testimonal from "./Components/Testimonal.jsx";
import Header from "./Components/Header.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import HeaderSection from "./Components/HeaderSection.jsx";
import Nav from "./Components/Nav.jsx";
import Footer from "./Components/Footer.jsx";
import AdminLogin from "./Components/AdminLogin.jsx";
import AdminDashboard from "./Components/AdminDashboard.jsx";

// ProtectedRoute Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Check for token in localStorage
  if (!token) {
    return <Navigate to="/admin-login" />; // Redirect to login if no token
  }
  return children;
};

const App = () => {
  const location = useLocation(); // Get the current route

  // Check if the current route is either AdminLogin or AdminDashboard
  const isAdminPage = location.pathname === "/admin-login" || location.pathname === "/dashboard";

  return (
    <>
      {/* Navbar is always visible */}
      <Routes>
        {/* Public Route for Admin Login */}
        <Route path="/admin-login" element={<AdminLogin />} />
        
        {/* Protected Route for Admin Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Show these sections only if we are not on admin login or dashboard */}
      {!isAdminPage && (
        <>
          <Navbar />
          <Herosection />
          <NotYourAverageRealtor />
          <WhyChooseUs />
          <Header />
          <AboutUs />
          <OurProject />
          <Testimonal />
          <HeaderSection />
          <Nav />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
