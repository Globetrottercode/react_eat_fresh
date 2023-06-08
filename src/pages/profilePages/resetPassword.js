import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import LOGO from "../../images/LOGO.png";
import "../../css/styles.css";
import resetPassword from "../../getData/updatePassword";
import { useState } from "react";
import { notify } from "../../alerts/toastify";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  let [isOldOn, setIsOldOn] = useState(false);
  let [isNewOn, setIsNewOn] = useState(false);
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
  function handleOldEye() {
    setIsOldOn(!isOldOn);
  }
  function handleNewEye() {
    setIsNewOn(!isNewOn);
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
          {isOldOn ? (
            <div className="resetInputPassDiv">
              <input
                type="text"
                onChange={(e) => {
                  setOldPass(e.target.value);
                }}
                className="resetInputPass"
                value={oldPass}
                placeholder="Old Password"
              ></input>
              <div
                onClick={handleOldEye}
                style={{ backgroundColor: "rgba(99, 47, 107, 0.5" }}
                className="eye"
              >
                <i class="fa-sharp fa-regular fa-eye"></i>
              </div>
            </div>
          ) : (
            <div className="resetInputPassDiv">
              <input
                type="password"
                onChange={(e) => {
                  setOldPass(e.target.value);
                }}
                className="resetInputPass"
                value={oldPass}
                placeholder="Old Password"
              ></input>
              <div
                onClick={handleOldEye}
                style={{ backgroundColor: "rgba(99, 47, 107, 0.5" }}
                className="eye"
              >
                <i class="fa-sharp fa-regular fa-eye-slash"></i>
              </div>
            </div>
          )}
          {isNewOn ? (
            <div className="resetInputPassDiv">
              {" "}
              <input
                type="text"
                onChange={(e) => {
                  setNewPass(e.target.value);
                }}
                className="resetInputPass"
                value={newPass}
                placeholder="New Password"
              ></input>
              <div
                onClick={handleNewEye}
                style={{ backgroundColor: "rgba(99, 47, 107, 0.5" }}
                className="eye"
              >
                <i class="fa-sharp fa-regular fa-eye"></i>
              </div>
            </div>
          ) : (
            <div className="resetInputPassDiv">
              {" "}
              <input
                type="password"
                onChange={(e) => {
                  setNewPass(e.target.value);
                }}
                className="resetInputPass"
                value={newPass}
                placeholder="New Password"
              ></input>
              <div
                onClick={handleNewEye}
                style={{ backgroundColor: "rgba(99, 47, 107, 0.5" }}
                className="eye"
              >
                <i class="fa-sharp fa-regular fa-eye-slash"></i>
              </div>
            </div>
          )}
          {/* <div className="resetInputPassDiv">
            {" "}
            <input
              type="password"
              onChange={(e) => {
                setNewPass(e.target.value);
              }}
              className="resetInputPass"
              value={newPass}
              placeholder="New Password"
            ></input>
            <div
              style={{ backgroundColor: "rgba(99, 47, 107, 0.5" }}
              className="eye"
            >
              <i class="fa-sharp fa-regular fa-eye-slash"></i>
            </div>
          </div> */}

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
