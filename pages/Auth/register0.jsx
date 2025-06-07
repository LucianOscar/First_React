import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.includes("@")) newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters long";
    if (!formData.termsAccepted) newErrors.terms = "You must accept the terms";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      sessionStorage.setItem("registeredUser", JSON.stringify(formData));
      sessionStorage.setItem("isLoggedIn", true);
      setFormData({
        username: '',
        email: '',
        password: '',
        termsAccepted: false,
      });
      setErrors({});
      // Show success message
      Swal.fire({
        icon: "success",
        title: "Registered Successfully",
        text: "please login to continue",
      }).then(() => {
        window.location.href = "/login";
      });
    } else {
      setErrors(validationErrors);
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please correct the highlighted fields.",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <section className="bg-[var(--color-main)] text-[var(--color-text-primary)] transition-colors duration-300">
      <div className="flex flex-col justify-center items-center min-h-screen w-full transition duration-200 delay-100">
        <main className="overflow-hidden relative w-full lg:w-[859px] md:w-[759px] sm:w-full h-[550px] bg-[var(--color-secondary)] rounded-[30px] shadow-2xl">
          <div
            id="containerLogin"
            className="z-[1] p-2 w-full h-full flex justify-center items-center text-[var(--color-text-primary)] text-center transition-all duration-300 delay-200"
          >
            <form className="w-full" onSubmit={handleSubmit}>
              <p className="text-3xl font-bold mx-0 my-12">Hello Welcome</p>

              <div className="relative mx-0 my-[30px]">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="@Username"
                  className="w-full p-[10px] pr-13 bg-[#eee] rounded-lg border-0 outline-0 text-lg text-[#333] font-semibold placeholder-gray-500 placeholder:font-light"
                />
                {errors.username && <small className="text-red-500 text-[10px]">{errors.username}</small>}
              </div>

              <div className="relative mx-0 my-[30px]">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full p-[10px] pr-13 bg-[#eee] rounded-lg border-0 outline-0 text-lg text-[#333] font-semibold placeholder-gray-500 placeholder:font-light"
                />
                {errors.email && <small className="text-red-500 text-[10px]">{errors.email}</small>}
              </div>

              <div className="relative mx-0 my-[30px]">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="password"
                  className="w-full p-[10px] pr-13 bg-[#eee] rounded-lg border-0 outline-0 text-lg text-[#333] font-semibold placeholder-gray-500 placeholder:font-light"
                />
                {errors.password && <small className="text-red-500 text-[10px]">{errors.password}</small>}
                <button type="button" className="absolute right-2 top-1 p-2 cursor-pointer">
                  <i className="fa-solid fa-eye text-black"></i>
                </button>
              </div>

              <div className="flex gap-2 items-center justify-start my-[30px] text-[var(--color-text-primary)]">
                <input
                  type="checkbox"
                  id="terms"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="accent-blue-500"
                />
                <label htmlFor="terms" className="text-sm cursor-pointer">
                  I've accepted the{" "}
                  <a href="#" className="underline text-blue-500 hover:text-blue-600">
                    Terms and Conditions
                  </a>{" "}
                  of Keno.
                </label>
              </div>
              {errors.terms && <small className="text-red-500 text-[10px]">{errors.terms}</small>}

              <div className="flex justify-between items-center mx-0 my-[30px]">
                <button
                  type="submit"
                  id="registerBtn"
                  className="w-full bg-blue-500 text-[var(--color-text-primary)] px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
                >
                  Register
                </button>
              </div>

              <div className="flex items-center justify-center mx-0 my-[30px]">
                <p className="text-[var(--color-text-primary)]">Already have an account?</p>
                <Link to="/login" className="ml-2 text-blue-500 hover:text-blue-600">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Register;
