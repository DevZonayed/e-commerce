import { useEffect, useState } from "react";
import Header from "./layouts/Headers/Header";
import Footer from "./layouts/footer/Footer";
import Routs from "./Routs/Routs";
import HeaderSecond from "./layouts/Headers/HeaderSecond";
import { useLocation } from "react-router-dom";

function App() {
  // Bello script is for detact the backend and Home Page for Changing header and footer
  const [isAdmin, setIsAdmin] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const location = useLocation();
  useEffect(() => {
    /**
     * Backend Verify For Header and Footer start here
     */
    let adminExp = new RegExp("^(/admin|/login|/register)");
    if (adminExp.test(location.pathname)) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
    /**
     * Backend Verify For Header and footer end here
     */
    /**
     * Home Page Verify for Header Secondary start here
     */
    if (location.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location]);
  return (
    <div className="App">
      {isAdmin === !true ? !isHome ? <HeaderSecond /> : <Header /> : ""}
      <Routs />
      {isAdmin === !true ? <Footer /> : ""}
    </div>
  );
}

export default App;
