import Footer from "../components/Footer";
import TopNavbar from "../components/TopNavbar";
import styles from "../css/plans.module.css";
import logoTagline from "../images/LOGO_Tagline.png";
import infoStyles from "../css/planinfo.module.css";

function VegBasic() {
  return (
    <>
      <TopNavbar className="bg-sky-700 text-lg" />
      <div className={infoStyles.body}>
        <div className={infoStyles.card}>
          <div className={infoStyles.innerCard1}>
            <div>
              <h3> MON</h3>
            </div>
            <div>
              <h3>TUES</h3>
            </div>
            <div>
              <h3>WED</h3>
            </div>
            <div>
              <h3>THURS</h3>
            </div>
            <div>
              <h3>FRI</h3>
            </div>
            <div>
              <h3> SAT </h3>
            </div>
          </div>
          <div className={infoStyles.innerCard2}>
            <h2> SUNDAY </h2>
          </div>
        </div>
        <div className={infoStyles.details}></div>
      </div>

      <Footer />
    </>
  );
}

export default VegBasic;
