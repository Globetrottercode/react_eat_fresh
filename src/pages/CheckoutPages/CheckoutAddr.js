import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import checkout from "../../css/checkout.module.css";
import "../../css/styles.css";
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
        <div className={checkout.checkoutAddrRight}>
          <div className={checkout.checkoutAddAddressCard}>
            <div className={checkout.checkoutAddAddressCardLine1}>
              <div>
                <p>Save As : </p>
              </div>
              <input placeholder="Home" type="text" />
            </div>
            <div className={checkout.checkoutAddAddressCardLine2}>
              <input placeholder="Complete Address" type="text" />
            </div>
            <div className={checkout.checkoutAddAddressCardLine3}>
              <input placeholder="Floor(Optional)" type="text" />
            </div>
            <div className={checkout.checkoutAddAddressCardLine4}>
              <input placeholder="Landmark" type="text" />
            </div>
            <div className={checkout.checkoutAddAddressCardLine5}>
              <select
                // ref={ref}
                className="form-select cityDropDown"
                name="cars"
                id="days"
              >
                <option value="Bangalore">Bangalore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Hyderabad"> Hyderabad</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Delhi"> Delhi</option>
                <option value="Noida">Noida</option>
                <option value="Chennai"> Chennai</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Ahmedabad">Ahmedabad</option>
              </select>
              <input type="text" placeholder="Pincode" />
            </div>
          </div>
          <div type="button" className={checkout.checkoutAddBtn}>
            <h3>Add</h3>
          </div>
          <div type="button" className={checkout.checkoutContinue}>
            <h3>Continue</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CheckoutAddr;
