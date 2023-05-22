import Footer from "../../components/Footer";
import TopNavbar from "../../components/TopNavbar";
import styles from "../../css/plans.module.css";
import logoTagline from "../../images/LOGO_Tagline.png";
import infoStyles from "../../css/planinfo.module.css";

let daywisePricing = {
  7: "5% OFF / PER DAY ",
  14: "10% OFF / PER DAY ",
  28: "15% OFF / PER DAY ",
  custom: "INR 200 / PER DAY ",
};

function NonVegPremium() {
  return (
    <>
      <TopNavbar className="bg-sky-700 text-lg" />
      <div className={infoStyles.body}>
        <div className={infoStyles.card}>
          <div className={infoStyles.innerCard1}>
            <div
              type="button"
              style={{ backgroundColor: "rgba(255, 165, 0, 0.9)" }}
            >
              <h3> MON</h3>
            </div>
            <div
              type="button"
              style={{ backgroundColor: "rgba(81, 153, 56, 0.8)" }}
            >
              <h3>TUES</h3>
            </div>
            <div
              type="button"
              style={{ backgroundColor: "rgba(255, 165, 0, 0.9)" }}
            >
              <h3>WED</h3>
            </div>
            <div
              type="button"
              style={{ backgroundColor: "rgba(81, 153, 56, 0.8)" }}
            >
              <h3>THURS</h3>
            </div>
            <div
              type="button"
              style={{ backgroundColor: "rgba(255, 165, 0, 0.9)" }}
            >
              <h3>FRI</h3>
            </div>
            <div
              type="button"
              style={{ backgroundColor: "rgba(81, 153, 56, 0.8)" }}
            >
              <h3> SAT </h3>
            </div>
          </div>
          <div type="button" className={infoStyles.innerCard2}>
            <h3> SUNDAY </h3>
          </div>
        </div>
        <div className={infoStyles.details}>
          <div className={infoStyles.pricing}>
            <div>
              <p>7 day Plan:</p>
              <p>{daywisePricing[7]}</p>
            </div>
            <div>
              <p>14 day Plan:</p>
              <p>{daywisePricing[14]}</p>
            </div>
            <div>
              <p>28 day Plan:</p>
              <p>{daywisePricing[28]}</p>
            </div>
            <div>
              <p>custom:</p>
              <p>{daywisePricing.custom}</p>
            </div>
          </div>
          <div type="button" className={infoStyles.addAddr}>
            <h3>Add Address</h3>
          </div>
          <div type="button" className={infoStyles.checkout}>
            <h3>Proceed to Checkout</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NonVegPremium;
