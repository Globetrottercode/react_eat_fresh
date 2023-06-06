import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import LOGO from "../../images/LOGO.png";
import "../../css/styles.css";

function ResetPassword() {
  return (
    <>
      <TopNavbar />
      <div className="resetBody">
        <img style={{ height: "30%" }} src={LOGO} alt="logo" />
        <div className="resetCard">
          <div className="resetLabel">
            <p>Reset Password</p>
          </div>
          <input className="resetInput" placeholder="Old Password"></input>
          <input className="resetInput" placeholder="New Password"></input>
          <div className="resetButton">
            <p>Reset</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ResetPassword;
