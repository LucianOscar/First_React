import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link for SPA-friendly navigation
import Logout from "./logout";
// Swal was imported but not used, so it has been removed.

function ProfileModal({ isOpen, onClose }) {
  // State for user data and login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  
  const navigate = useNavigate();
  const modalContentRef = useRef(null);
  
  // Effect to check login status and fetch user data safely
  useEffect(() => {
    // Check login status from session storage
    const loggedInStatus = sessionStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);

    // If logged in, safely parse user data from session storage
    if (loggedInStatus) {
      try {
        const storedUser = JSON.parse(sessionStorage.getItem("registeredUser"));
        setUserData(storedUser);
      } catch (error) {
        console.error("Failed to parse user data from session storage:", error);
        setUserData(null); // Reset data on error
      }
    }
  }, [isOpen]); // Re-check when the modal is opened

  // State and effect for controlling modal animation
  const [shouldAnimateIn, setShouldAnimateIn] = useState(false);
  useEffect(() => {
    let timeoutId;
    if (isOpen) {
      timeoutId = setTimeout(() => setShouldAnimateIn(true), 50);
    } else {
      setShouldAnimateIn(false);
    }
    return () => clearTimeout(timeoutId);
  }, [isOpen]);
  
  if (!isOpen) {
    return null;
  }

  // Handle clicks on the overlay to close the modal
  const handleOverlayClick = (e) => {
    if (modalContentRef.current && !modalContentRef.current.contains(e.target)) {
      onClose();
    }
  };

  const handleLogout = () => {
    onClose(); 
    Logout(navigate);
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
          <img
            src={`https://placehold.co/96x96/60A5FA/FFFFFF?text=${
              isLoggedIn && userData?.username ? userData.username[0].toUpperCase() : '?'
            }`}
            alt="Profile Avatar"
            className="w-24 h-24 rounded-full border-4 border-indigo-200 object-cover shadow-lg"
          />
          {/* CORRECTED: Display user data when logged in, otherwise show placeholder text */}
          <h2 className="text-3xl font-bold text-gray-800 mt-4">
            {isLoggedIn && userData?.username ? userData.username : "Guest User"}
          </h2>
          <p className="text-gray-600 text-lg">
            {isLoggedIn && userData?.email ? userData.email : "guest@example.com"}
          </p>
        </div>

        {/* Profile Menu/Links navigation */}
        <section className="flex-grow">
          <ul className="space-y-3">
            {isLoggedIn ?  (
              <>
                <li>
                  {/* CORRECTED: Changed <a> to <Link> for client-side routing */}
                  <Link
                    to="/profile" 
                    onClick={onClose}
                    className="flex items-center p-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition duration-200 ease-in-out"
                  >
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
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settings"
                    onClick={onClose}
                    className="flex items-center p-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition duration-200 ease-in-out"
                  >
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
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full flex items-center p-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition duration-200 ease-in-out"
                  >
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
              </>
            ) : (
                <>
                   <Link
                    to="/login"
                    className="relative w-full block text-center px-6 py-3 text-blue-200 text-lg font-bold uppercase tracking-wide rounded-full border-2 border-blue-500 hover:border-blue-600 bg-black/80
                        shadow-[0_0_10px_#3b82f6,0_0_20px_#3b82f6,0_0_40px_#3b82f6]
                        hover:shadow-[0_0_20px_#60a5fa,0_0_40px_#60a5fa,0_0_60px_#60a5fa]
                        hover:scale-[1.02]
                        transition-all duration-300 ease-in-out"
                    >
                    Login
                    </Link>
                </>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default ProfileModal;