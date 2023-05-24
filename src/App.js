import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Plans from "./pages/PlanPages/Plans";
import PlanDetail from "./pages/PlanPages/planDetail";
import PlanDays from "./pages/PlanPages/planDays";
import MealDetail from "./pages/PlanPages/mealDetail";

// function MealDetail() {
//   let { planType, day, meal } = useParams();
//   console.log(planType, day);
//   return <h1>Hello Duniya eat {meal}()</h1>;
// }

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/plans/:planType" element={<PlanDetail />} />
        <Route path="/plans/:planType/:day" element={<PlanDays />} />
        <Route path="/plans/:planType/:day/:meal" element={<MealDetail />} />
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
