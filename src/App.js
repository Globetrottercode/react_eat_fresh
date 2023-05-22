import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import VegPremium from "./pages/VegPremium";
import NonVegBasic from "./pages/NonVegBasic";
import NonVegPremium from "./pages/NonVegPremium";
import Plans from "./pages/Plans";
import VegBasic from "./pages/Veg_Basic";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/plans/vegBasic" element={<VegBasic />} />
        <Route path="/plans/vegPremium" element={<VegPremium />} />
        <Route path="/plans/nonVegBasic" element={<NonVegBasic />} />
        <Route path="/plans/nonVegPremium" element={<NonVegPremium />} />
      </Routes>
    </BrowserRouter>
  );
}

// {
/* <nav>
{" "}
<NavLink
  to="/"
  style={({ isActive }) => {
    return isActive ? { color: "red" } : {};
  }}
>
  {" "}
  Home{" "}
</NavLink>{" "}
<br /> <Link to="/login"> Login </Link>{" "}
</nav> */
// }
