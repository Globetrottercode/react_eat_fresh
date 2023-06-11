import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import checkout from "../../css/checkout.module.css";
import failLogo from "../../images/cancel.png";

function Failure() {
  localStorage.removeItem("selected_days");
  localStorage.removeItem("selected_plan");
  localStorage.removeItem("allAddress");
  localStorage.removeItem("credits");
  localStorage.removeItem("selected_address");
  localStorage.removeItem("buyPlan");
  localStorage.removeItem("changePlan");
  return <></>;
}

export default Failure;
