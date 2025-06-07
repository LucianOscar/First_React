import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthButtons from "../../pages/Auth/authButtons";
import "../index.css";

const Navbar = () => {
  const menuRef = useRef(null);
  const menuBtnRef = useRef(null);
  const removeMenuBtnRef = useRef(null);

  const { pathname } = useLocation();

  useEffect(() => {
    const menu = menuRef.current;
    const menuBtn = menuBtnRef.current;
    const removeMenuBtn = removeMenuBtnRef.current;

    const openMenu = () => {
      menu.classList.toggle("right-[-100%]");
      menu.classList.toggle("right-0");
    };

    const closeMenu = () => {
      menu.classList.replace("right-0", "right-[-100%]");
    };

    menuBtn?.addEventListener("click", openMenu);
    removeMenuBtn?.addEventListener("click", closeMenu);

    return () => {
      menuBtn?.removeEventListener("click", openMenu);
      removeMenuBtn?.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <nav className="bg-[var(--color-primary)] text-white px-6 py-4 flex justify-between items-center w-full z-50 shadow-md sticky top-0 transition-all duration-200">
      <div className="text-xl font-bold text-[var(--color-text-primary)]">KEno</div>

 

      {/* Menu */}
      <ul
        ref={menuRef}
        className="z-40 p-5 pt-15 md:p-0.5 fixed h-full top-0 right-[-100%]
        md:static w-[200px] md:w-auto flex flex-col md:flex-row items-center gap-2
        space-x-0 md:space-x-6 bg-[var(--color-primary)] md:bg-transparent transition-all duration-200"
      >
             {/* Close button*/}
      <button
        ref={removeMenuBtnRef}
        className="cursor-pointer md:hidden absolute top-3 left-3 z-50 text-[var(--color-text-primary)] px-3 py-1 rounded border"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

        <li className="px-0 md:px-3">
          <Link to="/" 
          className={`${pathname == '/' ? 'hover:text-[var(--color-secondary)] text-red-600 transition': 'text-[var(--color-text-primary)] hover:text-[var(--color-secondary)] transition'}`}
          >Home</Link>
        </li>
        <li className="px-0 md:px-3">
          <Link to="/about"
          className={`${pathname == '/about' ? 'hover:text-[var(--color-secondary)] text-red-600 transition': 'text-[var(--color-text-primary)] hover:text-[var(--color-secondary)] transition'}`}
          >About</Link>
        </li>
        <li className="px-0 md:px-3">
          <Link to="/contact" 
          className={`${pathname == '/contact' ? 'hover:text-[var(--color-secondary)] text-red-600 transition': 'text-[var(--color-text-primary)] hover:text-[var(--color-secondary)] transition'}`}
          >Contact</Link>
        </li>

        <AuthButtons />
        
      </ul>

      {/* Open menu button */}
      <button
        ref={menuBtnRef}
        className="cursor-pointer md:hidden bg-[var(--color-secondary)] text-[var(--color-text-primary)] px-3 py-1 rounded"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;