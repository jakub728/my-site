import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";
import Footer from "../Footer/Footer";
import Planets from "../planet_section/Planets.jsx";

export default function Layout() {
  return (
    <div className="layout">
      <header>
        <h1>My site</h1>
      </header>

      <main>
        <Planets />
        <div className="outlet-section">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
