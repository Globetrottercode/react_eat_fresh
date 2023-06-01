import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import settings from "../../css/settings.module.css";

function Settings() {
  return (
    <>
      <TopNavbar />
      <div className={settings.body}>
        <div className={settings.settingCard}>
          <div className={settings.outerCardBody}>
            <div className={settings.settingsLabel}>
              <p>Settings</p>
            </div>
            <div className={settings.settingsAboutUs}>
              <p>About Us</p>
            </div>
          </div>
          <div className={settings.settingCardBody}>
            <div>
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
