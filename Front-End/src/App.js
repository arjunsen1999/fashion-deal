import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import UserSignup from "./pages/UserSignup";
import Login from "./pages/Login";
import SellerHome from "./pages/Seller-Pages/SellerHome";
import Cart from "./pages/Cart";
import Address from "./pages/Address";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userSignup" element = {<UserSignup />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/cart" element = {<Cart />} />
        <Route path="/cart/address" element = {<Address />} />
        <Route path="/seller" element = {<SellerHome />} />
      </Routes>
    </>
  );
}

export default App;
