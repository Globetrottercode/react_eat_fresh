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
  return (
    <>
      <TopNavbar />
      <div className={checkout.paymentSuccessBody}>
        <img
          style={{ height: "20vh", marginBottom: "2vh" }}
          src={failLogo}
          alt="failImage"
        />
        <p
          style={{ marginTop: "1vh", fontSize: "1.5rem", textAlign: "center" }}
        >
          Your transaction has failed.
        </p>
        <p style={{ fontSize: "1.5rem", textAlign: "center" }}>
          You can try again !
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Failure;
