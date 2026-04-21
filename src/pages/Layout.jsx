import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  function updateCart(newCart) {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar cart={cart} />
      <main className="flex-1 container mx-auto">
        <Outlet context={{ cart, setCart: updateCart }} />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
