import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import infoStyles from "../css/planinfo.module.css";

function Checkout() {
  return (
    <>
      <TopNavbar />
      <div className={infoStyles.body}>
        <div className={infoStyles.checkoutLeft}>
          <div className={infoStyles.planSelectCard}></div>
          <div className={infoStyles.checkoutAddr}>
            <div type="button">
              <h3>Choose Address</h3>
            </div>
          </div>
        </div>
        <div className={infoStyles.checkoutRight}>
          <div className={infoStyles.checkoutPricingCard}></div>
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
