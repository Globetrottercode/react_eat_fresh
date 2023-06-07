import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import LOGO from "../../images/LOGO.png";
import "../../css/styles.css";
import resetPassword from "../../getData/updatePassword";
import { useState } from "react";
import { notify } from "../../alerts/toastify";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  let navigate = useNavigate();
  let [oldPass, setOldPass] = useState("");
  let [newPass, setNewPass] = useState("");
  async function handleReset() {
    if (newPass.length < 7) {
      notify("Please include atleast 8 characters");
      return;
    }
    let result = await resetPassword(
      localStorage.getItem("username"),
      oldPass,
      newPass
    );
    if (result.message) {
      notify(`${result.message}`);
      navigate("/profile");
    }
  }
  return (
    <>
      <TopNavbar />
      <div className="resetBody">
        <img style={{ height: "30%" }} src={LOGO} alt="logo" />
        <div className="resetCard">
          <div className="resetLabel">
            <p>Reset Password</p>
          </div>
          <input
            onChange={(e) => {
              setOldPass(e.target.value);
            }}
            className="resetInput"
            value={oldPass}
            placeholder="Old Password"
          ></input>
          <input
            onChange={(e) => {
              setNewPass(e.target.value);
            }}
            className="resetInput"
            value={newPass}
            placeholder="New Password"
          ></input>
          <div onClick={handleReset} className="resetButton">
            <p>Reset</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ResetPassword;
