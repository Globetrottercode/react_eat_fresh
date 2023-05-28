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
import Checkout from "./pages/CheckoutPages/checkout";
import CheckoutAddr from "./pages/CheckoutPages/CheckoutAddr";
import Payment from "./pages/CheckoutPages/Payment";
import PaymentSuccess from "./pages/CheckoutPages/PaymentSuccess";
import CODSuccess from "./pages/CheckoutPages/codSuccess";

// function Payment() {
//   return <h1>Hello Duniya eat ()</h1>;
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
        <Route path="/plans/:planType/checkout" element={<Checkout />} />
        <Route
          path="/plans/:planType/checkout/address"
          element={<CheckoutAddr />}
        />
        <Route
          path="/plans/:planType/checkout/address/payment"
          element={<Payment />}
        />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/ordersuccess" element={<CODSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}
//MealPlan - vegBasic , vP , nvB , nvp
//daysPlan - 7, 14,28, custom
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
