import { useParams } from "react-router-dom";

function Payment() {
  let { planType } = useParams();
  let selectedAddr = JSON.parse(localStorage.getItem("selected_address"));
  console.log("selected Address :", selectedAddr);
  //   console.log("Selected Plan : ", localStorage.getItem("selected_plan"));
  //   console.log("Selected Days : ", localStorage.getItem("selected_days"));

  if (localStorage.getItem("selected_plan")) {
    console.log("Selected Plan : ", localStorage.getItem("selected_plan"));
  } else {
    localStorage.setItem("selected_plan", planType);
    console.log(
      " Default Selected Plan : ",
      localStorage.getItem("selected_plan")
    );
  }
  if (localStorage.getItem("selected_days")) {
    console.log("Selected Days : ", localStorage.getItem("selected_days"));
  } else {
    localStorage.setItem("selected_days", "7");
    console.log(
      "Default Selected Days : ",
      localStorage.getItem("selected_days")
    );
  }

  //   localStorage.removeItem("selected_plan");
  //   localStorage.removeItem("selected_days");
  return (
    <>
      {" "}
      <h1>Welcome to Payments page</h1>
      <h1>Selected Days : {localStorage.getItem("selected_days")}</h1>
      <h1>Selected Plan : {localStorage.getItem("selected_plan")}</h1>
      <h1>Selected Address : {selectedAddr.saveAs}</h1>
    </>
  );
}

export default Payment;
