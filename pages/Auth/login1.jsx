import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import '../../src/welcomeAni.css'

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(sessionStorage.getItem("registeredUser"));

    // No user registered yet
    if (!storedData) {
      Swal.fire({
        icon: "error",
        title: "No Account Found",
        text: "Please register first.",
      });
      navigate("/register0");
      return;
    }

    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (
      formData.email === storedData.email &&
      formData.password === storedData.password
    ) {
      sessionStorage.setItem("isLoggedIn", "true");

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate("/"); 
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Incorrect email or password.",
      });
    }
  };

// VIEW PASSWORD
  const [showPassword, setShowPassword] = useState(false);
  // WELCOME BACK TEXT
  const text = "Welcome Back!";

  return (
    <section className="bg-[var(--color-main)] text-[var(--color-text-primary)] transition-colors duration-300">
      <div className="flex flex-col justify-center items-center min-h-screen w-full transition duration-200 delay-100">
        <main className="
          relative 
          w-full 
          lg:w-[859px] 
          md:w-[759px] 
          sm:w-full 
          h-[550px]
          bg-[#d1d9e6] 
          rounded-[30px] 
          shadow-[6px_6px_16px_#b8c0cc,-6px_-6px_16px_#eaf1f8]
          transition-all
        ">
          <div
            id="containerLogin"
            className="z-[1] p-2 w-full h-full flex justify-center items-center text-[var(--color-text-primary)] text-center transition-all duration-300 delay-200"
          >
            <form className="w-full" onSubmit={handleSubmit} noValidate>
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="text"
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
                {errors.email && <small className="text-red-500">{errors.email}</small>}
              </div>

              <div className="relative mx-0 my-[30px]">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
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
                {errors.password && <small className="text-red-500">{errors.password}</small>}
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 cursor-pointer"
                >
                  <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} text-[#555]`}></i>
                </button>
              </div>

              <div className="flex items-center justify-center mx-0 my-[30px] text-gray-600
              hover:-translate-y-1 hover:scale-[1.01] hover:text-blue-500 transition-all duration-300 ease-in-out">
                <a href="#">Forgot your password?</a>
              </div>

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
                Login
              </button>

              </div>

              <div className="flex items-center justify-center mx-0 my-[30px]">
                <p className="text-gray-700">Don't have an account?</p>
                <Link to="/register0" className="ml-2 text-blue-500 hover:text-blue-600">
                  Register
                </Link>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Login;
