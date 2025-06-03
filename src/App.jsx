import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MyNavbar from "./components/navbarr";
import Home from "./components/pages/home";
import About from "./components/pages/About";
import Contact from "./components/pages/contact";
import Login from "./components/pages/Auth/login";
import Register from "./components/pages/Auth/register0";

function App() {
  return (
    <>
    <Router>
      <>
        <MyNavbar />
      </>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register0" element={<Register />} />
      </Routes>
    </Router>
    {/* <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--color-main)] text-[var(--color-text-primary)]">
        <h1 className="text-center text-2xl font-bold my-4">Welcome to KEno</h1>
        <p className="text-center text-lg">Your one-stop solution for all your needs.</p>
      </div>
      <footer className="bg-[var(--color-secondary)] text-[var(--color-text-primary)] py-4 text-center">
        <p>&copy; {new Date().getFullYear()} KEno. All rights reserved.</p>
      </footer>
    </div> */}
    </>
  );
}

export default App;