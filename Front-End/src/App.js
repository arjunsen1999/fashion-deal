import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import UserSignup from "./pages/UserSignup";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userSignup" element = {<UserSignup />} />
        <Route path="/login" element = {<Login />} />
      </Routes>
    </>
  );
}

export default App;
