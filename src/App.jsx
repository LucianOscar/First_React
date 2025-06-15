import { Routes, Route} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home";
import About from "../pages/About";
import Contact from "../pages/contact";
import Login from "../pages/Auth/login1";
import Register from "../pages/Auth/register0";
import Userprofile from "../profile/profile";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile" element={<Userprofile/>}/>

        <Route path="/login" element={<Login/>}/>
        <Route path="/register0" element={<Register/>}/>
      </Route>
    </Routes>
  );
}

export default App;