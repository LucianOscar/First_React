import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="bg-[var(--color-main)] text-[var(--color-text-primary)] transition-colors duration-300">
      <div className="flex flex-col justify-center items-center min-h-screen w-full transition duration-200 delay-100">

        <main className="overflow-hidden relative w-full lg:w-[859px] md:w-[759px] sm:w-full h-[550px]
            bg-[var(--color-secondary)] rounded-[30px] shadow-2xl">
          <div
            id="containerLogin"
            className="z-[1] p-2 w-full h-full flex justify-center items-center text-[var(--color-text-primary)] text-center transition-all duration-300 delay-200"
          >
            <form id="loginForm" className="w-full">
              <p className="text-3xl font-bold mx-0 my-12">Welcome back</p>
              <div className="relative mx-0 my-[30px]">
                <input
                  type="text"
                  id="loginId"
                  placeholder="@Username or Email"
                  className="w-full p-[10px] pr-13 bg-[#eee] rounded-lg border-0 outline-0 text-lg text-[#333] font-semibold placeholder-gray-500 placeholder:font-light"
                />
                <small className="text-red-500 text-[10px]" id="loginIdError"></small>
              </div>
              <div className="relative mx-0 my-[30px]">
                <input
                  type="password"
                  id="loginPassword"
                  placeholder="password"
                  className="w-full p-[10px] pr-13 bg-[#eee] rounded-lg border-0 outline-0 text-lg text-[#333] font-semibold placeholder-gray-500 placeholder:font-light"
                />
                <small className="text-red-500 text-[10px]" id="loginPasswordError"></small>
                <button type="button"
                  className="absolute right-2 top-1 p-2 cursor-pointer">
                    <i className="fa-solid fa-eye text-black"></i>
                </button>
              </div>
              <div className="flex items-center justify-center mx-0 my-[30px] text-[var(--color-text-primary)]">
                <a href="#">Forgot your password?</a>
              </div>
              <div className="flex justify-between items-center mx-0 my-[30px]">
                <button
                  type="submit"
                  id="loginBtn"
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
