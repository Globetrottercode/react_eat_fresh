import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import checkout from "../../css/checkout.module.css";
function CheckoutAddr() {
  return (
    <>
      <TopNavbar />
      <div className={checkout.body}>
        <div className={checkout.checkoutAddrLeft}>
          <div className={checkout.checkoutChooseAddress}>
            <h3>CHOOSE ADDRESS</h3>
          </div>
          <div className={checkout.checkoutAddressCard}>
            <div>
              <input
                onClick={(e) => {
                  console.log(e.target.value);
                }}
                type="radio"
                id="age1"
                name="age"
                value="30"
              />
              <label for="age1">0 - 30</label>
            </div>
            <div>
              <input
                onClick={(e) => {
                  console.log(e.target.value);
                }}
                type="radio"
                id="age2"
                name="age"
                value="60"
              />
              <label for="age2">31 - 60</label>
            </div>
            <div>
              <input
                onClick={(e) => {
                  console.log(e.target.value);
                }}
                type="radio"
                id="age3"
                name="age"
                value="100"
              />
              <label for="age3">61 - 100</label>
            </div>
            <div>
              <input
                onClick={(e) => {
                  console.log(e.target.value);
                }}
                type="radio"
                id="age3"
                name="age"
                value="100"
              />
              <label for="age3">61 - 100</label>
            </div>
            <div>
              <input
                onClick={(e) => {
                  console.log(e.target.value);
                }}
                type="radio"
                id="age3"
                name="age"
                value="100"
              />
              <label for="age3">61 - 100</label>
            </div>
          </div>
        </div>
        <div className={checkout.checkoutAddrRight}></div>
      </div>
      <Footer />
    </>
  );
}

export default CheckoutAddr;
