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
            <div className={settings.settingsLabel}></div>
            <div className={settings.settingsAboutUs}></div>
          </div>
          <div className={settings.settingCardBody}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Settings;
