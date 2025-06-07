import React from "react";
import Swal from "sweetalert2";

const Logout = (navigate) => {
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
      Swal.fire("Logged out!", "You have been logged out.", "success");
      sessionStorage.removeItem("isLoggedIn");
      sessionStorage.removeItem("registeredUser");
      navigate("/");
    }
  });
};

export default Logout;
