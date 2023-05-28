import { useParams } from "react-router-dom";
import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import getStartAndEnd from "../../daysPlan/startAndEnd";
import calculatePrice from "../../daysPlan/calPricing";
import checkout from "../../css/checkout.module.css";

function Payment() {
  let selectedPlan, selectedDays;
  let { planType } = useParams();
  let address = JSON.parse(localStorage.getItem("selected_address"));
  console.log("selected Address :", address);

  if (localStorage.getItem("selected_plan")) {
    selectedPlan = localStorage.getItem("selected_plan");
    console.log("Selected Plan : ", selectedPlan);
  } else {
    localStorage.setItem("selected_plan", planType);
    selectedPlan = localStorage.getItem("selected_plan");
    console.log(" Default Selected Plan : ", selectedPlan);
  }
  if (localStorage.getItem("selected_days")) {
    selectedDays = localStorage.getItem("selected_days");
    console.log("Selected Days : ", selectedDays);
  } else {
    localStorage.setItem("selected_days", "7");
    selectedDays = localStorage.getItem("selected_days");
    console.log("Default Selected Days : ", selectedDays);
  }
  let startAndEnd = getStartAndEnd(selectedDays);
  let start = startAndEnd[0];
  let end = startAndEnd[1];
  let charges = calculatePrice(selectedPlan, selectedDays);
  //   localStorage.removeItem("selected_plan");
  //   localStorage.removeItem("selected_days");
  return (
    <>
      <TopNavbar />
      <div className={checkout.body}>
        <div className={checkout.leftPayment}>
          <div className={checkout.orderSummary}></div>
          <div className={checkout.summaryCard}></div>
          <div className={checkout.addressCard}></div>
        </div>
        <div className={checkout.rightPayment}>
          <div className={checkout.NameAndPhone}></div>
          <div className={checkout.COD}></div>
          <div className={checkout.Online}></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Payment;
