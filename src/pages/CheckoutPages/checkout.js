import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import checkout from "../../css/checkout.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import getStartAndEnd from "../../daysPlan/startAndEnd";
import calculatePrice from "../../daysPlan/calPricing";
import "../../css/styles.css";

let allPlans = [
  ["vegBasic", "Veg Basic"],
  ["vegPremium", "Veg Premium"],
  ["nonVegBasic", "Non Veg Basic"],
  ["nonVegPremium", "Non Veg Premium"],
];

function Checkout() {
  let [selectedDays, setSelectedDays] = useState("7"); //setting state for selected Days
  let startAndEnd = getStartAndEnd(selectedDays); // getting start and end date
  let start = startAndEnd[0];
  let end = startAndEnd[1];
  // let ref = useRef(null);
  let navigate = useNavigate();
  let { planType } = useParams();
  let [selectedPlan, setSelectedPlan] = useState(planType);
  let charges = calculatePrice(selectedPlan, selectedDays); // getting prices based on selected fields
  useEffect(() => {
    console.log(selectedDays);
    startAndEnd = getStartAndEnd(selectedDays);
    charges = calculatePrice(selectedPlan, selectedDays);
    console.log(charges);
    console.log(startAndEnd);
    start = startAndEnd[0];
    end = startAndEnd[1];
    // let days = document.getElementById("days");
    // console.log(days.options.selectedIndex);
  }, [selectedDays, selectedPlan]);
  return (
    <>
      <TopNavbar />
      <div className={checkout.body}>
        <div className={checkout.checkoutLeft}>
          <div className={checkout.planSelectCard}>
            <select
              onChange={(e) => {
                setSelectedDays(e.target.value);
              }}
              // ref={ref}
              className="form-select daysDropDown"
              name="cars"
              id="days"
            >
              <option value="7">7 Days Plan</option>
              <option value="14">14 Days Plan</option>
              <option value="28">28 Days Plan</option>
              <option value="1"> custom 1 day</option>
              <option value="2"> custom 2 day</option>
              <option value="3"> custom 3 day</option>
              <option value="4"> custom 4 day</option>
              <option value="5"> custom 5 day</option>
              <option value="6"> custom 6 day</option>
            </select>
            <select
              onChange={(e) => {
                // console.log(e.target.value, "planooooooooooo");
                setSelectedPlan(e.target.value);
              }}
              className="form-select plansDropDown"
              name="cars"
              id="plans"
            >
              {allPlans.map((plan) => {
                if (plan[0] === planType) {
                  return (
                    <option selected value={plan[0]}>
                      {" "}
                      {/* adding selected field from urlParams */}
                      {plan[1]}
                    </option>
                  );
                } else {
                  return <option value={plan[0]}>{plan[1]}</option>;
                }
              })}
            </select>
          </div>
          {/* <div
            style={{ backgroundColor: "green" }}
            className={checkout.checkoutAddr}
          >
            <div type="button">
              <h3>Choose Address</h3>
            </div>
          </div> */}
        </div>
        <div className={checkout.checkoutRight}>
          <div className={checkout.checkoutPricingCard}>
            <div>
              <h3>Start Date :</h3>
              <h3>{start}</h3>
            </div>
            <div>
              {" "}
              <h3>End Date :</h3>
              <h3>{end}</h3>
            </div>
            <div>
              {" "}
              <h3>Total Pricing :</h3>
              <h3>{charges.total}</h3>
            </div>
            <div>
              <h3>Additional :</h3>
              <h3>{charges.additional}</h3>
            </div>
            <div style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
              <h3>Sub Total Pricing :</h3>
              <h3>{charges.subtotal}</h3>
            </div>
          </div>
          <div
            onClick={() => {
              navigate(`/plans/${planType}/checkout/address`);
            }}
            className={checkout.checkoutPayment}
          >
            <div type="button">
              <h3>Continue</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Checkout;
