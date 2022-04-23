import { useEffect } from "react";
import DashboardContact from "../components/Contact/DashboardContact";
import AboutHome from "../components/Dashboard/AboutHome";
import Hero from "../components/Hero";
import ProductsLanding from "../components/Products/ProductsLanding";
import Services from "../components/Services/Services";

function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Services />
      <AboutHome />
      <ProductsLanding />
      <DashboardContact />
    </div>
  );
}

export default Homepage;
