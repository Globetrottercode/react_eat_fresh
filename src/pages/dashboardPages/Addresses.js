import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import dashboard from "../../css/dashboard.module.css";
import checkout from "../../css/checkout.module.css";
import AltFooter from "../../components/altfooter";
import { useNavigate } from "react-router-dom";
import infoStyles from "../../css/planinfo.module.css";

function Addresses() {
  let navigate = useNavigate();
  let allAddress = JSON.parse(localStorage.getItem("allAddress"));
  console.log(allAddress, "0");
  return (
    <>
      <TopNavbar />
      <div className={dashboard.addressesBody}>
        <div
          onClick={() => {
            navigate(-1);
          }}
          className={infoStyles.pdBack}
        >
          <i class="fa-solid fa-backward"></i>
        </div>
        <div className={dashboard.savedAddressLabel}>
          <p>Addresses</p>
        </div>
        <div className={dashboard.savedAddressesCard}>
          {allAddress[0] ? (
            allAddress.map((address, index) => {
              return (
                <div>
                  <span style={{ fontSize: "2vh" }}>
                    {address.saveAs} {address.floor ? ", " + address.floor : ""}{" "}
                    , {address.detailed} , {address.landmark} {address.city} ,{" "}
                    {address.pincode}
                  </span>
                </div>
              );
            })
          ) : (
            <div>
              <span style={{ fontSize: "2vh" }}>No saved Addresses</span>
            </div>
          )}
        </div>
        <AltFooter text="We deliver happiness and satisfaction" />
      </div>

      <Footer />
    </>
  );
}

export default Addresses;
