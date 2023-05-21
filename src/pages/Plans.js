import Footer from "../components/Footer";
import TopNavbar from "../components/TopNavbar";
import styles from "../css/dashboard.module.css";
import logoTagline from "../images/LOGO_Tagline.png";

function Plans() {
  return (
    <>
      <TopNavbar className="bg-sky-700 text-lg" />
      <div className={styles.dashboardBody}>
        <div className={styles.dashLeft}>
          <img style={{ height: "30vh" }} src={logoTagline} />
          <div className={styles.dashText}>
            <h2 style={{ fontWeight: "bolder" }}> Solving </h2>
            <h2 style={{ fontWeight: "bolder" }}>Your Day to Day </h2>
            <h2 style={{ fontWeight: "bolder" }}>
              {" "}
              <span style={{ color: "#519938" }}>Health</span>
              <span style={{ color: "orange" }}> Needs</span>{" "}
            </h2>
          </div>
        </div>
        <div className={styles.dashRight}>
          <div className={styles.mealPlans}>
            <div
              style={{ backgroundColor: "rgba(255, 165, 0, 0.9)" }}
              className={styles.planType}
            >
              <h3>NON-VEG BASIC</h3>
            </div>
            <div
              style={{ backgroundColor: "rgba(81, 153, 56, 0.8)" }}
              className={styles.planType}
            >
              <h3>VEG BASIC</h3>
            </div>
            <div
              style={{ backgroundColor: "rgba(255, 165, 0, 0.9)" }}
              className={styles.planType}
            >
              <h3>NON-VEG PREMIUM</h3>
            </div>
            <div
              style={{
                backgroundColor: "rgba(81, 153, 56, 0.8)",
              }}
              className={styles.planType}
            >
              <h3>VEG PREMIUM</h3>
            </div>
          </div>
          <div className={styles.customPlan}>
            <h2> CUSTOMIZE </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Plans;
