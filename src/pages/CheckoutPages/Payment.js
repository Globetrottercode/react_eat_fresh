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
          <div className={checkout.orderSummary}>
            <h3>ORDER SUMMARY</h3>
          </div>
          <div className={checkout.summaryCard}>
            <div>
              <p>Start Date :</p> <p>{start}</p>
            </div>
            <div>
              <p>End Date :</p>
              <p>{end}</p>
            </div>
            <div>
              <p>Selected Plan :</p>
              <p>{selectedPlan} </p>
            </div>
            <div>
              <p>Selected Days :</p>

              <p>{selectedDays}</p>
            </div>
            <div style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
              <p>Sub Total :</p>
              <p>{charges.subtotal}</p>
            </div>
          </div>
          <div className={checkout.addressCard}>
            <span>{address.saveAs}</span>
            <span>
              {address.floor} , {address.detailed} ,
            </span>
            <span>
              {address.landmark} , {address.city} - {address.pincode}
            </span>
          </div>
        </div>
        <div className={checkout.rightPayment}>
          <div className={checkout.NameAndPhone}>
            <div>
              <div className={checkout.inputPaymentLabel}>
                <span> Name : </span>
              </div>
              <input className={checkout.inputPayment} type="text" />
            </div>
            <div>
              <div className={checkout.inputPaymentLabel}>
                <span> Contact : </span>
              </div>
              <input className={checkout.inputPayment} type="number" />
            </div>
          </div>
          <div type="button" className={checkout.COD}>
            <h3>Cash On Delivery</h3>
          </div>
          <div type="button" className={checkout.Online}>
            <h3>Pay via Online</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Payment;
