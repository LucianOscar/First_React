import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

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

  return (
    <section className="bg-[var(--color-main)] text-[var(--color-text-primary)] transition-colors duration-300">
      <div className="flex flex-col justify-center items-center min-h-screen w-full transition duration-200 delay-100">
        <main className="overflow-hidden relative w-full lg:w-[859px] md:w-[759px] sm:w-full h-[550px]
            bg-[var(--color-secondary)] rounded-[30px] shadow-2xl">
          <div
            id="containerLogin"
            className="z-[1] p-2 w-full h-full flex justify-center items-center text-[var(--color-text-primary)] text-center transition-all duration-300 delay-200"
          >
            <form className="w-full" onSubmit={handleSubmit} noValidate>
              <p className="text-3xl font-bold mx-0 my-12">Welcome back</p>
              
              <div className="relative mx-0 my-[30px]">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="text"
                  placeholder="you@example.com"
                  className="w-full p-[10px] pr-13 bg-[#eee] rounded-lg border-0 outline-0 text-lg text-[#333] font-semibold placeholder-gray-500 placeholder:font-light"
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
                  className="w-full p-[10px] pr-13 bg-[#eee] rounded-lg border-0 outline-0 text-lg text-[#333] font-semibold placeholder-gray-500 placeholder:font-light"
                />
                {errors.password && <small className="text-red-500">{errors.password}</small>}
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1 p-2 cursor-pointer">
                  <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} text-black`}></i>
                </button>
              </div>

              <div className="flex items-center justify-center mx-0 my-[30px] text-[var(--color-text-primary)]">
                <a href="#">Forgot your password?</a>
              </div>

              <div className="flex justify-between items-center mx-0 my-[30px]">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-[var(--color-text-primary)] px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
                >
                  Login
                </button>
              </div>

              <div className="flex items-center justify-center mx-0 my-[30px]">
                <p className="text-[var(--color-text-primary)]">Don't have an account?</p>
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
