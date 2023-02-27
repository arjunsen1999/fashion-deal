import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import UserSignup from "./pages/UserSignup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userSignup" element = {<UserSignup />} />
      </Routes>
    </>
  );
}

export default App;
