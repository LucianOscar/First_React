import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";  
import ProfileModal from "../../src/components/profileModal";
import Swal from "sweetalert2";


const AuthButtons = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // Check if user is logged in from session storage
    const status = sessionStorage.getItem("isLoggedIn");
    setIsLoggedIn(status === "false");
  }, []);

  // State to control the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {!isLoggedIn ? (
        // If not logged in, show Login or Register button
        pathname === "/login" ? (
          <button
           className="
           relative 
            px-4 py-1
            text-white 
            text-lg 
            font-semibold 
            rounded-2xl 
            overflow-hidden 
            
            bg-white/10  /* Semi-transparent white background */
            backdrop-blur-lg /* The key ingredient: blurs the background */
            border-white/20 /* Subtle border to catch the light */
            /* Soft shadow for depth */
            
            transition-all 
            duration-300 
            ease-in-out
            hover:shadow-2xl
            hover:bg-white/20
            hover:-translate-y-1
            
            focus:outline-none 
            focus:ring-4 
            focus:ring-white/50
          ">
            <Link to="/register0" className="text-[var(--color-text-primary)] transition">Register</Link>
          </button>
        ) : (
          <button 
          className="
            relative 
            px-4 py-1
            text-white 
            text-lg 
            font-semibold 
            rounded-2xl 
            overflow-hidden 
            
            bg-white/10  /* Semi-transparent white background */
            backdrop-blur-lg /* The key ingredient: blurs the background */
            border-white/20 /* Subtle border to catch the light */
            /* Soft shadow for depth */
            
            transition-all 
            duration-300 
            ease-in-out
            hover:shadow-2xl
            hover:bg-white/20
            hover:-translate-y-1
            
            focus:outline-none 
            focus:ring-4 
            focus:ring-white/50
          ">
            <Link to="/login" className="text-[var(--color-text-primary)] transition">Login</Link>
          </button>
        )
      ) : (
        // If logged in, show Profile button to open the modal
        <button
          onClick={openModal}
          className="px-3 py-1 text-[var(--color-text-primary)] rounded transition hover:translate-y-[-2px] hover:scale-[1.1]"
        >
          <i className="fa-regular fa-circle-user text-xl"></i>
        </button>
      )}

      {/* Render the ProfileModal component */}
      <ProfileModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

// Profile
<ProfileModal />



export default AuthButtons;
