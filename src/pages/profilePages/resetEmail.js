import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import LOGO from "../../images/LOGO.png";
import updateEmail from "../../getData/updateEmail";
import { useState } from "react";
import * as EmailValidator from "email-validator";
import getUser from "../../getData/getUser";
import { notify } from "../../alerts/toastify";
import { useNavigate } from "react-router-dom";
import "../../css/styles.css";

function ResetEmail() {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  async function handleReset() {
    if (!EmailValidator.validate(email)) {
      notify("Invalid mail-id !");
      return;
    }
    let result = await updateEmail(localStorage.getItem("username"), email);
    if (result[0].username === email) {
      localStorage.setItem("username", email);
      // console.log(localStorage.getItem("username"));
      notify("Email updated succesfully !");
      let user = await getUser(localStorage.getItem("username"));
      localStorage.setItem("user", JSON.stringify(user));
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
            <p>Reset Email</p>
          </div>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className="resetInput"
            placeholder="New Email"
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

export default ResetEmail;
