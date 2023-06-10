import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import checkout from "../../css/checkout.module.css";
import successLogo from "../../images/succesful.png";
import createPlan from "../../getData/createPlan";
import updateMyPlan from "../../getData/updateMyPlan";

function PaymentSuccess() {
  localStorage.removeItem("selected_days");
  localStorage.removeItem("selected_plan");
  localStorage.removeItem("allAddress");
  localStorage.removeItem("credits");
  localStorage.removeItem("selected_address");

  if (localStorage.getItem("buyPlan")) {
    // console.log("Buy Plan :", JSON.parse(localStorage.getItem("buyPlan")));
    localStorage.removeItem("buyPlan");
    // console.log("Buy Plan :", JSON.parse(localStorage.getItem("buyPlan")));
    async function planCreation() {
      let plan = JSON.parse(localStorage.getItem("planObject"));
      localStorage.removeItem("planObject");
      // console.log("okok plan ", plan);
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

  if (localStorage.getItem("changePlan")) {
    console.log(
      "Change Plan :",
      JSON.parse(localStorage.getItem("changePlan"))
    );
    localStorage.removeItem("changePlan");
    console.log(
      "Change Plan :",
      JSON.parse(localStorage.getItem("changePlan"))
    );
    async function planUpdate() {
      let changeObject = JSON.parse(localStorage.getItem("changeObject"));
      localStorage.removeItem("changeObject");
      let data = await updateMyPlan(
        changeObject.id,
        changeObject.selectedPlan,
        changeObject.newChangedPlan,
        changeObject.pay,
        changeObject.addToCredits
      );
      localStorage.setItem("lastPlan", JSON.stringify(data));
      console.log(
        "payment succes plan update check : ",
        JSON.parse(localStorage.getItem("lastPlan"))
      );
    }
    planUpdate();
  } else {
    console.log(
      "Change Plan in else :",
      JSON.parse(localStorage.getItem("changePlan"))
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
