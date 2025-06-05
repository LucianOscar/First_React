import { Outlet} from "react-router-dom";
import Navbar from "../src/components/navbarr";

const MainLayout = () => {
  return (

   <>
        <Navbar/>
        <div>
            <Outlet/>
        </div>
   </>
  )
}

export default MainLayout