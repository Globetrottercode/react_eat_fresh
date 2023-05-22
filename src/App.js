import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import VegPremium from "./pages/PlanPages/VegPremium";
import NonVegBasic from "./pages/PlanPages/NonVegBasic";
import NonVegPremium from "./pages/PlanPages/NonVegPremium";
import Plans from "./pages/PlanPages/Plans";
import VegBasic from "./pages/PlanPages/Veg_Basic";
import Customize from "./pages/PlanPages/Customize";

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
        <Route path="/plans/Customize" element={<Customize />} />
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
