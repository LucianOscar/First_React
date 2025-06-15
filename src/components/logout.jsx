import React from "react";
import Swal from "sweetalert2";

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
export default Logout;