import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import infoStyles from "../css/planinfo.module.css";
import { useNavigate, useParams } from "react-router-dom";
import "../css/styles.css";

let plansIndex = {
  vegBasic: 0,
  vegPremium: 1,
  nonVegBasic: 2,
  nonVegPremium: 3,
};

function Checkout() {
  let navigate = useNavigate();
  let { planType } = useParams();
  return (
    <>
      <TopNavbar />
      <div className={infoStyles.body}>
        <div className={infoStyles.checkoutLeft}>
          <div className={infoStyles.planSelectCard}>
            <select className="form-select daysDropDown" name="cars" id="cars">
              <option value="volvo">7 Days</option>
              <option value="saab">14 Days</option>
              <option value="opel">28 Days</option>
              <option value="audi">Custom Days</option>
            </select>
            <select className="form-select plansDropDown" name="cars" id="cars">
              <option value="vegBasic">Veg Basic</option>
              <option value="vegPremium">Veg Premium</option>
              <option value="nonVegBasic">Non Veg Basic</option>
              <option value="nonVegPremium">Non Veg Premium</option>
              <option value="Customize">Customize</option>
            </select>
          </div>
          <div className={infoStyles.checkoutAddr}>
            <div type="button">
              <h3>Choose Address</h3>
            </div>
          </div>
        </div>
        <div className={infoStyles.checkoutRight}>
          <div className={infoStyles.checkoutPricingCard}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}></div>
          </div>
          <div className={infoStyles.checkoutPayment}>
            <div type="button">
              <h3>Proceed to Payment</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Checkout;
