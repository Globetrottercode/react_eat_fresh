import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import checkout from "../../css/checkout.module.css";
import successLogo from "../../images/succesful.png";
import createPlan from "../../getData/createPlan";

function PaymentSuccess() {
  localStorage.removeItem("selected_days");
  localStorage.removeItem("selected_plan");
  localStorage.removeItem("allAddress");
  localStorage.removeItem("credits");
  localStorage.removeItem("selected_address");

  if (localStorage.getItem("buyPlan")) {
    console.log("Buy Plan :", JSON.parse(localStorage.getItem("buyPlan")));
    localStorage.removeItem("buyPlan");
    console.log("Buy Plan :", JSON.parse(localStorage.getItem("buyPlan")));
    async function planCreation() {
      let plan = JSON.parse(localStorage.getItem("planObject"));
      console.log("okok plan ", plan);
      let data = await createPlan(localStorage.getItem("user_id"), plan);
      console.log("payment succes plan creation check : ", data);
    }
    planCreation();
  } else {
    console.log(
      "Buy Plan in else :",
      JSON.parse(localStorage.getItem("buyPlan"))
    );
  }
  return (
    <>
      <TopNavbar />
      <div className={checkout.paymentSuccessBody}>
        <img
          style={{ height: "20vh", marginBottom: "2vh" }}
          src={successLogo}
          alt="succesImage"
        />
        <p style={{ marginTop: "1vh" }}>
          Your transaction has successfully been completed.
        </p>
        <p> For more details, check your dashboard.</p>
      </div>
      <Footer />
    </>
  );
}

export default PaymentSuccess;
