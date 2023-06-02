import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import settings from "../../css/settings.module.css";
import { useNavigate } from "react-router-dom";
import getAllPlans from "../../getData/getAllPlans";
import getTransactions from "../../getData/getTransactions";
import getCredits from "../../getData/getCredits";
import planValidator from "../../daysPlan/planValidator";
import { canCancel } from "../../getData/updateCancelPlan";

let getPrevPlans = getAllPlans.getAllPlans;
let getLastPlan = getAllPlans.getLastPlan;

function Settings() {
  localStorage.removeItem("allPlans");
  // removing allPlans when user comes back to settings page from previous plans page
  localStorage.removeItem("allTransactions");
  // removing allPlans when user comes back to settings page from previous plans page
  let navigate = useNavigate();
  async function handlePlansClick() {
    if (localStorage.getItem("username")) {
      let allPlans = await getPrevPlans(localStorage.getItem("username"));
      localStorage.setItem("allPlans", JSON.stringify(allPlans));
      console.log(JSON.parse(localStorage.getItem("allPlans")), " all Plans");
      navigate("/settings/prevplans");
    } else {
      alert("You need to login");
    }
  }
  async function handleCancellation() {
    if (localStorage.getItem("username")) {
      let credits = await getCredits(localStorage.getItem("username"));
      localStorage.setItem("credits", credits);
      let plan = await getLastPlan(localStorage.getItem("username")); //last plan
      localStorage.setItem("lastPlan", JSON.stringify(plan));
      if (planValidator(plan.end)) {
        if (canCancel(plan)) {
          navigate("/settings/cancellation");
        } else {
          alert("Only one cancellation available in a single day");
        }
      } else {
        alert("No valid plan to make cancellations");
      }
    } else {
      alert("You need to login first");
    }
  }
  async function handleTransactionsClick() {
    if (localStorage.getItem("username")) {
      let allTransactions = await getTransactions(
        localStorage.getItem("username")
      );
      localStorage.setItem("allTransactions", JSON.stringify(allTransactions));
      // console.log(
      //   JSON.parse(localStorage.getItem("allTransactions")),
      //   " all Transactions"
      // );
      navigate("/settings/prevtransactions");
    } else {
      alert("You need to login");
    }
  }
  return (
    <>
      <TopNavbar />
      <div className={settings.body}>
        <div className={settings.settingCard}>
          <div className={settings.outerCardBody}>
            <div className={settings.settingsLabel}>
              <p>
                <i class="fa-solid fa-gear"></i> Settings
              </p>
            </div>
            <div
              onClick={() => {
                navigate("/settings/aboutus");
              }}
              className={settings.settingsAboutUs}
            >
              <p>About Us</p>
            </div>
          </div>
          <div className={settings.settingCardBody}>
            <div onClick={handlePlansClick}>
              <p>Previous Plans</p>
            </div>
            <div onClick={handleTransactionsClick}>
              <p>Previous Transactions</p>
            </div>
            <div onClick={handleCancellation}>
              <p>Cancellations</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Settings;
