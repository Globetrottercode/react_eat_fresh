import Footer from "../components/Footer";
import TopNavbar from "../components/TopNavbar";
import styles from "../css/plans.module.css";
import logoTagline from "../images/LOGO_Tagline.png";

function NonVegPremium() {
  return (
    <>
      <TopNavbar className="bg-sky-700 text-lg" />
      <div className={styles.dashboardBody}></div>
      <Footer />
    </>
  );
}

export default NonVegPremium;
