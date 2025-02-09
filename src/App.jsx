// App.jsx
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Products from "./components/pages/products/Products";
import SpecialOffersPage from "./components/pages/SpecialOffersPage/SpecialOffersPage";
import SingleProduct from "./components/pages/singleProduct/SingleProduct";
import Cart from "./components/pages/catr/Cart";
import "./App.css";
import { useEffect } from "react";
import NotFound from "./components/empty/NotFound";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("accessToken");
    if (!isLoggedIn && !isLoginPage && !isRegisterPage) {
      navigate("/login", { replace: true });
    }
    window.scrollTo(0, 0);
  }, [navigate, location.pathname, isLoginPage, isRegisterPage]);

  return (
    <>
      {(!isLoginPage && !isRegisterPage) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productss/:id" element={<SingleProduct />} />
        <Route path="/products/productss/:id" element={<SingleProduct />} />
        <Route path="/specialOffersPage/:id" element={<SpecialOffersPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {(!isLoginPage && !isRegisterPage) && <Footer />}
    </>
  );
}

export default App;
