import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import checkout from "../../css/checkout.module.css";
import "../../css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../Redux/actions/allActions";

let response;
var allAddress = [];

function CheckoutAddr() {
  var array = [];
  let dispatch = useDispatch();
  let newAddress = useSelector((state) => state.addNewAddress);
  // let all_Addr = useSelector((state) => state.allAddress);
  // async function fetchAddress() {
  //   if (localStorage.getItem("username")) {
  //     newAddress.username = localStorage.getItem("username");
  //     console.log(newAddress.username);
  //     response = await fetch(
  //       "http://localhost:3500/customer/address/getAddress",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/x-www-form-urlencoded",
  //         },
  //         body: new URLSearchParams({
  //           // what is this ??
  //           username: localStorage.getItem("username"),
  //         }),
  //       }
  //     );
  //     if (response.status === 200) {
  //       allAddress = await response.json();
  //       console.log(allAddress);
  //       return await allAddress;
  //     } else {
  //       console.log(response.status);
  //       return await allAddress;
  //     }
  //   }
  // }
  // fetchAddress().then((data) => {
  //   console.log(data, "ohoooooo");
  //   allAddress = data;
  //   array = allAddress;
  //   dispatch(allActions.setAll_Address(data));
  // });
  // console.log(all_Addr, "allAddress");
  // console.log(array, "letsSee");
  return (
    <>
      <TopNavbar />
      <div className={checkout.body}>
        <div className={checkout.checkoutAddrLeft}>
          <div className={checkout.checkoutChooseAddress}>
            <h3>CHOOSE ADDRESS</h3>
          </div>
          <div className={checkout.checkoutAddressCard}>
            {/* {allAddress.map((address) => {
              let i = 0;
              console.log(i++);
              return (
                <div>
                  <p style={{ fontWeight: "bolder" }}></p>
                </div>
              );
            })} */}
            {/* <div>
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
            </div> */}
          </div>
        </div>
        <div className={checkout.checkoutAddrRight}>
          <div className={checkout.checkoutAddAddressCard}>
            <div className={checkout.checkoutAddAddressCardLine1}>
              <div>
                <p>Save As : </p>
              </div>
              <input
                onChange={(e) => {
                  dispatch(
                    allActions.addAddressActions.SetSaveAs(e.target.value)
                  );
                  console.log(newAddress);
                }}
                placeholder="Home"
                type="text"
              />
            </div>
            <div className={checkout.checkoutAddAddressCardLine2}>
              <input
                onChange={(e) => {
                  dispatch(
                    allActions.addAddressActions.SetCompleteAddress(
                      e.target.value
                    )
                  );
                  console.log(newAddress);
                }}
                placeholder="Complete Address"
                type="text"
              />
            </div>
            <div className={checkout.checkoutAddAddressCardLine3}>
              <input
                onChange={(e) => {
                  dispatch(
                    allActions.addAddressActions.SetFloor(e.target.value)
                  );
                  console.log(newAddress);
                }}
                placeholder="Floor(Optional)"
                type="text"
              />
            </div>
            <div className={checkout.checkoutAddAddressCardLine4}>
              <input
                onChange={(e) => {
                  dispatch(
                    allActions.addAddressActions.SetLandmark(e.target.value)
                  );
                  console.log(newAddress);
                }}
                placeholder="Landmark"
                type="text"
              />
            </div>
            <div className={checkout.checkoutAddAddressCardLine5}>
              <select
                onChange={(e) => {
                  dispatch(
                    allActions.addAddressActions.SetCity(e.target.value)
                  );
                  console.log(newAddress);
                }}
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
              <input
                onChange={(e) => {
                  dispatch(
                    allActions.addAddressActions.SetPincode(e.target.value)
                  );
                  console.log(newAddress);
                }}
                type="text"
                placeholder="Pincode"
              />
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
