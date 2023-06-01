import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import settings from "../../css/settings.module.css";
import { useNavigate } from "react-router-dom";
import getAllPlans from "../../getData/getAllPlans";

let getPrevPlans = getAllPlans.getAllPlans;

function Settings() {
  localStorage.removeItem("allPlans");
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
            <div>
              <p>Previous Transactions</p>
            </div>
            <div>
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
