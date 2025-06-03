import React from "react";
import MyRoute from "./components/myRoute"; 

function App() {
  return (
    <>
      <MyRoute />
      <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--color-main)] text-[var(--color-text-primary)]">
        <h1 className="text-center text-2xl font-bold my-4">Welcome to KEno</h1>
        <p className="text-center text-lg">Your one-stop solution for all your needs.</p>
      </div>
      <footer className="bg-[var(--color-secondary)] text-[var(--color-text-primary)] py-4 text-center">
        <p>&copy; {new Date().getFullYear()} KEno. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;