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
      sessionStorage.setItem("isLoggedIn", false);
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


  // VIEW PASSWORD
    const [showPassword, setShowPassword] = useState(false);
  const text = "Hello, Welcome to Keno!";

  return (
    <section className="bg-[var(--color-main)] text-[var(--color-text-primary)] transition-colors duration-300">
      <div className="flex flex-col justify-center items-center min-h-screen w-full transition duration-200 delay-100">
        <main  className="
          relative 
          w-full 
          lg:w-[859px] 
          md:w-[759px] 
          sm:w-full 
          h-[550px]
          bg-[#d1d9e6] 
          rounded-[30px] 
          shadow-[6px_6px_16px_#b8c0cc,-6px_-6px_16px_#eaf1f8]
          transition-all">
          <div
            id="containerLogin"
            className="z-[1] p-2 w-full h-full flex justify-center items-center text-[var(--color-text-primary)] text-center transition-all duration-300 delay-200"
          >
            <form className="w-full" onSubmit={handleSubmit}>
              <p className="text-3xl font-bold mx-0 my-12 text-center font-mono text-gray-500">
                {text.split("").map((char, index) => (
                  <span
                    key={index}
                    className="typing-letter"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </p>

              <div className="relative mx-0 my-[30px]">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="@Username"
                  className="
                    w-full
                    p-4
                    rounded-full
                    bg-[#d1d9e6]
                    shadow-[inset_6px_6px_10px_#b8c0cc,inset_-6px_-6px_10px_#eaf1f8]
                    border-none
                    outline-none
                    text-lg
                    text-gray-700
                    placeholder-gray-500  
                  "
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
                  className="
                    w-full
                    p-4
                    rounded-full
                    bg-[#d1d9e6]
                    shadow-[inset_6px_6px_10px_#b8c0cc,inset_-6px_-6px_10px_#eaf1f8]
                    border-none
                    outline-none
                    text-lg
                    text-gray-700
                    placeholder-gray-500  
                  "
                />
                {errors.email && <small className="text-red-500 text-[10px]">{errors.email}</small>}
              </div>

              <div className="relative mx-0 my-[30px]">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="password"
                  className="
                    w-full
                    p-4
                    rounded-full
                    bg-[#d1d9e6]
                    shadow-[inset_6px_6px_10px_#b8c0cc,inset_-6px_-6px_10px_#eaf1f8]
                    border-none
                    outline-none
                    text-lg
                    text-gray-700
                    placeholder-gray-500  
                  "
                />
                {errors.password && <small className="text-red-500 text-[10px]">{errors.password}</small>}
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 cursor-pointer"
                >
                  <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} text-[#555]`}></i>
                </button>
              </div>

              <div  className="flex gap-2 items-center justify-start my-[30px] text-[var(--color-text-primary)]">
                <input
                  type="checkbox"
                  id="terms"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="accent-blue-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-500 cursor-pointer">
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
                  className="
                    cursor-pointer
                    w-full
                    py-4
                    rounded-full
                    bg-[#d1d9e6]
                    text-gray-700
                    font-semibold
                    text-lg
                    shadow-[6px_6px_16px_#b8c0cc,-6px_-6px_16px_#eaf1f8]
                    transition-all
                    duration-300
                    ease-in-out
                    hover:shadow-[inset_4px_4px_10px_#b8c0cc,inset_-4px_-4px_10px_#eaf1f8]
                    active:scale-95
                    active:shadow-[inset_2px_2px_6px_#b8c0cc,inset_-2px_-2px_6px_#eaf1f8]
                "
                >
                  Register
                </button>
              </div>

              <div className="flex items-center justify-center mx-0 my-[30px]">
                <p className="text-gray-700">Already have an account?</p>
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
