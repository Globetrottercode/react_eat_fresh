import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import dashboard from "../../css/dashboard.module.css";
import checkout from "../../css/checkout.module.css";

function Addresses() {
  return (
    <>
      <TopNavbar />
      <div className={dashboard.addressesBody}>
        <div className={dashboard.savedAddressLabel}>
          <p>Saved Addresses</p>
        </div>
        <div className={dashboard.savedAddressesCard}></div>
      </div>

      <div></div>
      <Footer />
    </>
  );
}

export default Addresses;
