import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation, Link } from "react-router-dom";   
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

function ProfileModal({ isOpen, onClose}) {
    const navigate = useNavigate();
  // Retrieve user data from session storage
  const storedData = JSON.parse(sessionStorage.getItem("registeredUser"));

  const [shouldAnimateIn, setShouldAnimateIn] = useState(false);
  const modalContentRef = useRef(null);

  // Effect for controlling modal animation
  useEffect(() => {
    let timeoutId;
    if (isOpen) {
      // Set a small delay for animation-in to allow CSS transitions to work
      timeoutId = setTimeout(() => setShouldAnimateIn(true), 50);
    } else {
      // Immediately set animation state for animation-out
      setShouldAnimateIn(false);
    }
    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  // Don't render the modal until it's open or animating out
  if (!isOpen && !shouldAnimateIn) {
    return null;
  }

  // Handle clicks on the overlay to close the modal
  const handleOverlayClick = (e) => {
    if (modalContentRef.current && !modalContentRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 transition-opacity duration-300 ease-in-out z-50 ${
        shouldAnimateIn ? 'bg-opacity-50' : 'bg-opacity-0 pointer-events-none'
      }`}
      onClick={handleOverlayClick}
    >
      <div
        ref={modalContentRef}
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white rounded-l-xl shadow-2xl p-6 sm:p-8 flex flex-col transform transition-transform duration-300 ease-in-out ${
          shouldAnimateIn ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button for the modal */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label="Close profile view"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {/* Profile Header section */}
        <div className="flex flex-col items-center mb-8 mt-6">
          {/* Placeholder for Profile Picture based on username initial */}
          <img
            src={`https://placehold.co/96x96/60A5FA/FFFFFF?text=${
              storedData?.username ? storedData.username[0].toUpperCase() : '?'
            }`}
            alt="Profile Avatar"
            className="w-24 h-24 rounded-full border-4 border-indigo-200 object-cover shadow-lg"
          />
          <h2 className="text-3xl font-bold text-gray-800 mt-4">{storedData?.username}</h2>
          <p className="text-gray-600 text-lg">{storedData?.email}</p>
        </div>

        {/* Profile Menu/Links navigation */}
        <nav className="flex-grow">
          <ul className="space-y-3">
            <li>
              <a
                href="#" // Consider replacing with <Link> to appropriate profile page
                className="flex items-center p-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition duration-200 ease-in-out"
              >
                {/* SVG for 'User' icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user mr-3"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="font-medium">My Profile</span>
              </a>
            </li>
            <li>
              <a
                href="#" // Consider replacing with <Link> to appropriate settings page
                className="flex items-center p-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition duration-200 ease-in-out"
              >
                {/* SVG for 'Settings' icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-settings mr-3"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.08.15a2 2 0 0 1 0 2.73l-.08.15a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.08-.15a2 2 0 0 1 0-2.73l.08-.15a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <span className="font-medium">Account Settings</span>
              </a>
            </li>
            <li>
              {/* CORRECTED: Changed <link> to <Link> for React Router navigation */}
              <button
                type="button"
                onClick={() => Logout(navigate)}
                className="flex items-center p-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition duration-200 ease-in-out"
              >
                {/* SVG for 'Log Out' icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-log-out mr-3"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" x2="9" y1="12" y2="12" />
                </svg>
                <span className="font-medium">Log Out</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}


// Logout function to handle user logout
const Logout = (navigate) => {
  // Show confirmation dialog
  Swal.fire({
    title: "Are you sure?",
    text: "You will be logged out.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Logout",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      // Show success message
      Swal.fire("Logged out!", "You have been logged out.", "success");
      // Clear session storage
      sessionStorage.setItem("isLoggedIn", "false");
      // Navigate to home page
      navigate("/");
    }
  });
};

export default AuthButtons;
