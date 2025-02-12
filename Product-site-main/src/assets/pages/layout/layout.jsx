import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet, Link, useNavigate } from "react-router-dom";


const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if (!loggedInUser) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("loggedInUser"); // Clear session
    navigate("/"); // Redirect to login
  };

  return (
    <div>
      <Header />

        <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
          Logout
        </button>
      <main>
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
