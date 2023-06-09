import { useParams, useNavigate, Link } from "react-router-dom";
import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import getStartAndEnd from "../../daysPlan/startAndEnd";
import calculatePrice from "../../daysPlan/calPricing";
import checkout from "../../css/checkout.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import updateCredits from "../../getData/updateCredits";
import getUser from "../../getData/getUser";
import LOGO from "../../images/LOGO.png";
import { notify } from "../../alerts/toastify";
import sendMail from "../../getData/sendMail";
import { succesfulBuyCOD } from "../../messages/emailMessage";
import createPlan from "../../getData/createPlan";
import Plans from "../PlanPages/Plans";

let allPlans = [
  ["vegBasic", "Veg Basic"],
  ["vegPremium", "Veg Premium"],
  ["nonVegBasic", "Non Veg Basic"],
  ["nonVegPremium", "Non Veg Premium"],
];

let allSchemes = [
  ["1", "Custom 1 Day"],
  ["2", "Custom 2 Day"],
  ["3", "Custom 3 Day"],
  ["4", "Custom 4 Day"],
  ["5", "Custom 5 Day"],
  ["6", "Custom 6 Day"],
  ["7", "7 Day Plan"],
  ["14", "14 Day Plan"],
  ["28", "28 Day Plan"],
];

function assignSelectedPlan(plan) {
  let selectedPlan;
  for (let i = 0; i < allPlans.length; i++) {
    if (plan !== allPlans[i][0]) {
      continue;
    }
    selectedPlan = allPlans[i][1];
    break;
  }

  return selectedPlan;
}

function assignSelectedDays(days) {
  let selectedDays;
  for (let i = 0; i < allSchemes.length; i++) {
    if (days !== allSchemes[i][0]) {
      continue;
    }
    selectedDays = allSchemes[i][1];
    break;
  }
  return selectedDays;
}

function digits_count(n) {
  var count = 0;
  if (n >= 1) ++count;

  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }

  return count;
}

function Payment() {
  let navigate = useNavigate();
  let [credits, setCredits] = useState(localStorage.getItem("credits"));

  // console.log(localStorage.getItem("tempCredits"), "tempCredits");

  let [userDetail, setuserDetail] = useState({
    name: "",
    phone: "",
  });

  function handleChange(e) {
    setuserDetail({ ...userDetail, [e.target.name]: e.target.value });
    console.log(userDetail);
  }
  let selectedPlan, selectedDays;
  let { planType } = useParams();
  console.log("outside here");

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
  let [subtotal, setSubtotal] = useState(charges.subtotal);

  async function handleCreditsUse() {
    let allTotal = subtotal;
    let allCredits = credits;
    if (allTotal > allCredits) {
      allTotal = allTotal - allCredits;
      setCredits(0);
      setSubtotal(allTotal);
    } else {
      allCredits = allCredits - allTotal;
      setSubtotal(1);
      setCredits(allCredits + 1);
    }
    // localStorage.setItem("tempCredits", credits);
    // console.log(localStorage.getItem("tempCredits"), "tempcredits");
  }
  async function handleCOD() {
    if (digits_count(userDetail.phone) !== 10) {
      notify("enter a valid number");
      return;
    }
    if (userDetail.name.length < 3) {
      notify("Please enter the input fields");
      return;
    }
    notify("Your order has been placed succesfully !!!");
    if (localStorage.getItem("clicked")) {
      // console.log(
      //   "clicked value :",
      //   JSON.parse(localStorage.getItem("clicked")),
      //   localStorage.getItem("clicked")
      // );
      // console.log("returned");
      return;
    }
    localStorage.setItem("clicked", true);
    let user = await getUser(localStorage.getItem("username"));
    let updated = await updateCredits(user._id, credits);
    console.log(updated);
    let response = await fetch(
      "https://backend-eat-fresh.onrender.com/customer/myPlan",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          user_id: user._id,
          name: userDetail.name,
          phone: userDetail.phone,
          start: start,
          end: end,
          selectedPlan: selectedPlan,
          selectedDays: selectedDays,
          address: `${address.saveAs}  ${
            address.floor ? ", " + address.floor : ""
          }, ${address.detailed} , ${address.landmark}
      , ${address.city} - ${address.pincode}`,
          total: charges.total,
          additional: charges.additional,
          subtotal: subtotal,
          creditsUsed: charges.total + charges.additional - subtotal,
        }),
      }
    );
    if (response.status === 200) {
      let data = await response.json();
      console.log("success :", data);
      await sendMail(
        localStorage.getItem("username"),
        succesfulBuyCOD(subtotal),
        "Cash Payment for New Plan"
      );
      navigate("/ordersuccess");
    }
  }
  const checkoutHandler = async (amount) => {
    console.log(userDetail.phone.length);
    if (digits_count(userDetail.phone) !== 10) {
      notify("enter a valid number");
      return;
    }
    if (userDetail.name.length < 3) {
      notify("Please enter the input fields");
      return;
    }

    let user = await getUser(localStorage.getItem("username"));
    let updated = await updateCredits(user._id, credits);
    console.log(updated);
    let user_id = user._id;
    // if (localStorage.getItem("clicked")) {
    // console.log(
    //   "clicked value :",
    //   JSON.parse(localStorage.getItem("clicked")),
    //   localStorage.getItem("clicked")
    // );
    // console.log("returned");
    //   return;
    // }
    // localStorage.setItem("clicked", true);
    // removing only single clicks from online payment
    let planObject = {
      user_id: user._id,
      name: userDetail.name,
      phone: userDetail.phone,
      start: start,
      end: end,
      selectedPlan: selectedPlan,
      selectedDays: selectedDays,
      address: `${address.saveAs} ${
        address.floor ? ", " + address.floor : ""
      }, ${address.detailed} , ${address.landmark}
      , ${address.city} - ${address.pincode}`,
      total: charges.total,
      additional: charges.additional,
      subtotal: subtotal,
      creditsUsed: charges.total + charges.additional - subtotal,
    };
    // let data = await createPlan(localStorage.getItem("user_id"), planObject);
    // console.log("check for plan creation : ", data);
    localStorage.setItem("buyPlan", true);
    localStorage.setItem("planObject", JSON.stringify(planObject));
    // let response = await fetch("http://localhost:3500/customer/myPlan", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   body: new URLSearchParams({
    //     user_id: user._id,
    //     name: userDetail.name,
    //     phone: userDetail.phone,
    //     start: start,
    //     end: end,
    //     selectedPlan: selectedPlan,
    //     selectedDays: selectedDays,
    //     address: `${address.saveAs} ${
    //       address.floor ? ", " + address.floor : ""
    //     }, ${address.detailed} , ${address.landmark}
    //   , ${address.city} - ${address.pincode}`,
    //     total: charges.total,
    //     additional: charges.additional,
    //     subtotal: subtotal,
    //     creditsUsed: charges.total + charges.additional - subtotal,
    //   }),
    // });
    // if (response.status === 200) {
    //   let data = await response.json();
    //   console.log("success :", data);
    // }
    const username = localStorage.getItem("username");
    const {
      data: { key },
    } = await axios.get("https://backend-eat-fresh.onrender.com/api/getkey");

    const {
      data: { order },
    } = await axios.post(
      "https://backend-eat-fresh.onrender.com/api/checkout",
      {
        amount,
        user_id,
        username,
      }
    );

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "EAT FRESH",
      description: "Food Meal Plan Service",
      image: LOGO,
      order_id: order.id,
      callback_url:
        "https://backend-eat-fresh.onrender.com/api/paymentverification", // check
      prefill: {
        name: userDetail.name,
        email: localStorage.getItem("username"),
        contact: userDetail.phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
    // razor.createPayment(options);
  };
  let displayPlan = assignSelectedPlan(selectedPlan);
  let displayDays = assignSelectedDays(selectedDays);

  return (
    <>
      {address ? (
        <>
          {" "}
          <TopNavbar />
          <div className={checkout.body}>
            <div
              onClick={() => {
                navigate(-1);
              }}
              className={checkout.checkBack}
            >
              <i class="fa-solid fa-backward"></i>
            </div>
            <div className={checkout.leftPayment}>
              <div className={checkout.orderSummary}>
                <p>Order Summary</p>
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
                  <p>{displayPlan} </p>
                </div>
                <div>
                  <p>Selected Days :</p>

                  <p>{displayDays}</p>
                </div>
                <div style={{ backgroundColor: "rgba(99, 47, 107, 0.5)" }}>
                  <p>Sub Total :</p>
                  <p>{subtotal}</p>
                </div>
              </div>
              <div className={checkout.addressCard}>
                <span>{address.saveAs}</span>
                <span>
                  {address.floor === undefined ? "" : address.floor + " , "}
                  {address.detailed} ,
                </span>
                <span>
                  {address.landmark} , {address.city} - {address.pincode}
                </span>
              </div>
            </div>
            <div className={checkout.rightPayment}>
              <div className={checkout.creditsCheckout}>
                <div className={checkout.credits}>
                  <div className={checkout.creditsLabel}>
                    <span>Credits</span>
                  </div>
                  <div className={checkout.creditsDisplay}>
                    <span>INR {credits}</span>
                  </div>
                </div>
                <div
                  onClick={handleCreditsUse}
                  type="button"
                  className={checkout.creditsUse}
                >
                  <span>Use</span>
                </div>
              </div>
              <div className={checkout.NameAndPhone}>
                <div>
                  <div className={checkout.inputPaymentLabel}>
                    <span> Name : </span>
                  </div>
                  <input
                    onChange={handleChange}
                    name="name"
                    className={checkout.inputPayment}
                    type="text"
                  />
                </div>
                <div>
                  <div className={checkout.inputPaymentLabel}>
                    <span> Contact : </span>
                  </div>
                  <input
                    onChange={handleChange}
                    name="phone"
                    className={checkout.inputPayment}
                    type="number"
                  />
                </div>
              </div>
              <div onClick={handleCOD} type="button" className={checkout.COD}>
                <p>Cash On Delivery</p>
              </div>
              <div
                onClick={() => checkoutHandler(subtotal)}
                type="button"
                className={checkout.Online}
              >
                <p>Pay via Online</p>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <Plans />
      )}
    </>
  );
}

export default Payment;
