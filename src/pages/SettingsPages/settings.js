import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import settings from "../../css/settings.module.css";

function Settings() {
  return (
    <>
      <TopNavbar />
      <div>
        <h1 className={settings.body}>Hello Users welcome to your settings</h1>
      </div>
      <Footer />
    </>
  );
}

export default Settings;
