import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import LOGO from "../../images/LOGO.png";
import "../../css/styles.css";

function ResetEmail() {
  return (
    <>
      <TopNavbar />
      <div className="resetBody">
        <img style={{ height: "30%" }} src={LOGO} alt="logo" />
        <div className="resetCard">
          <div className="resetLabel">
            <p>Reset Email</p>
          </div>
          <input className="resetInput" placeholder="New Email"></input>
          <div className="resetButton">
            <p>Reset</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ResetEmail;
