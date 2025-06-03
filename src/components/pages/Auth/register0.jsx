import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./login";

const Register = () => {
  return (
    <section className="bg-[var(--color-main)] text-[var(--color-text-primary)] transition-colors duration-300">
      <div className="flex flex-col justify-center items-center min-h-screen w-full transition duration-200 delay-100">

        <main className="overflow-hidden relative w-full lg:w-[859px] md:w-[759px] sm:w-full h-[550px]
            bg-[var(--color-secondary)] rounded-[30px] shadow-2xl">
          {/* Login Form */}
          <div
            id="containerLogin"
            className="z-[1] p-2 w-full h-full
                flex justify-center items-center text-[var(--color-text-primary)] text-center
                transition-all duration-300 delay-200"
          >
            <form id="loginForm" className="w-full">
              <p className="text-3xl font-bold mx-0 my-12">Hello Welcome</p>
              <div className="relative mx-0 my-[30px]">
                <input
                  type="text"
                  id="regUsername"
                  placeholder="@Username"
                  className="w-full p-[10px] pr-13 bg-[#eee] rounded-lg 
                            border-0 outline-0 text-lg text-[#333] font-semibold
                            placeholder-gray-500 placeholder:font-light"
                />
                <small className="text-red-500 text-[10px]" id="loginUserNameError"></small>
              </div>
              <div className="relative mx-0 my-[30px]">
                <input
                  type="email"
                  id="regEmail"
                  placeholder="you@example.com"
                  className="w-full p-[10px] pr-13 bg-[#eee] rounded-lg 
                            border-0 outline-0 text-lg text-[#333] font-semibold
                            placeholder-gray-500 placeholder:font-light"
                />
                <small className="text-red-500 text-[10px]" id="regEmailError"></small>
              </div>
              <div className="relative mx-0 my-[30px]">
                <input
                  type="password"
                  id="regPassword"
                  placeholder="password"
                  className="w-full p-[10px] pr-13 bg-[#eee] rounded-lg 
                            border-0 outline-0 text-lg text-[#333] font-semibold
                            placeholder-gray-500 placeholder:font-light"
                />
                <small className="text-red-500 text-[10px]" id="regPasswordError"></small>
                <button type="button"
                  className="absolute right-2 top-1 p-2 cursor-pointer">
                    <i className="fa-solid fa-eye text-black"></i>
                </button>
              </div>
              <div className="flex gap-2 items-center justify-start my-[30px] text-[var(--color-text-primary)]">
                <input type="checkbox" id="terms" className="accent-blue-500" />
                <label htmlFor="terms" className="text-sm cursor-pointer">
                  I've accepted the <a href="#" className="underline text-blue-500 hover:text-blue-600">Terms and Conditions</a> of Keno.
                </label>
              </div>

              <div className="flex justify-between items-center mx-0 my-[30px]">
                <button
                  type="submit"
                  id="loginBtn"
                  className="w-full bg-blue-500 text-[var(--color-text-primary)] 
                            px-4 py-2 rounded-lg font-semibold hover:bg-blue-600
                            transition duration-200"
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
