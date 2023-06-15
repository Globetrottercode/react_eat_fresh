import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import previous from "../../css/settings.module.css";
import infoStyles from "../../css/planinfo.module.css";
import { useNavigate } from "react-router-dom";
import AltFooter from "../../components/altfooter";

function PrevoiusTransactions() {
  let navigate = useNavigate();
  let allTransactions = JSON.parse(localStorage.getItem("allTransactions"));
  console.log("allTransactions in prev Transactions", allTransactions);
  return (
    <>
      <TopNavbar />
      <div className={previous.prevbody}>
        <div
          onClick={() => {
            navigate(-1);
          }}
          className={infoStyles.pdBack}
        >
          <i class="fa-solid fa-backward"></i>
        </div>
        <div className={previous.previousPlanLabel}>
          <p>Previous Transactions</p>
        </div>
        <div className={previous.previousTransCard}>
          {allTransactions[0] ? (
            allTransactions.map((transaction, index) => {
              return (
                <div id={previous.prevTransacDet}>
                  <span style={{ fontSize: "2vh" }}>
                    Razorpay Order Id : {transaction.razorpay_order_id}
                    <br />
                    Razorpay payment Id : {transaction.razorpay_payment_id}
                  </span>
                </div>
              );
            })
          ) : (
            <div>
              <span>No Previous Transactions</span>
            </div>
          )}
        </div>
        {/* <AltFooter text="The Right Decisions for thy Healthy Body" /> */}
      </div>
      <Footer />
    </>
  );
}

export default PrevoiusTransactions;
