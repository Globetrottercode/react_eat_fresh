import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import checkout from "../../css/checkout.module.css";
import successLogo from "../../images/succesful.png";

function CODSuccess() {
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
          Your order has successfully been placed.
        </p>
        <p> For more details, check your dashboard.</p>
      </div>
      <Footer />
    </>
  );
}

export default CODSuccess;
