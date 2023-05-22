import Footer from "../components/Footer";
import TopNavbar from "../components/TopNavbar";
import styles from "../css/plans.module.css";
import logoTagline from "../images/LOGO_Tagline.png";
import infoStyles from "../css/planinfo.module.css";

function NonVegPremium() {
  return (
    <>
      <TopNavbar className="bg-sky-700 text-lg" />
      <div className={infoStyles.body}>
        <div className={infoStyles.card}>
          <div className={infoStyles.innerCard1}>
            <div
              type="button"
              style={{ backgroundColor: "rgba(255, 165, 0, 0.9)" }}
            >
              <h3> MON</h3>
            </div>
            <div
              type="button"
              style={{ backgroundColor: "rgba(81, 153, 56, 0.8)" }}
            >
              <h3>TUES</h3>
            </div>
            <div
              type="button"
              style={{ backgroundColor: "rgba(255, 165, 0, 0.9)" }}
            >
              <h3>WED</h3>
            </div>
            <div
              type="button"
              style={{ backgroundColor: "rgba(81, 153, 56, 0.8)" }}
            >
              <h3>THURS</h3>
            </div>
            <div
              type="button"
              style={{ backgroundColor: "rgba(255, 165, 0, 0.9)" }}
            >
              <h3>FRI</h3>
            </div>
            <div
              type="button"
              style={{ backgroundColor: "rgba(81, 153, 56, 0.8)" }}
            >
              <h3> SAT </h3>
            </div>
          </div>
          <div type="button" className={infoStyles.innerCard2}>
            <h2> SUNDAY </h2>
          </div>
        </div>
        <div className={infoStyles.details}>
          <div className={infoStyles.pricing}></div>
          <div className={infoStyles.addAddr}></div>
          <div className={infoStyles.checkout}></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NonVegPremium;
