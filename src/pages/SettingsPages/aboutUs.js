import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import aboutUs from "../../css/settings.module.css";

function AboutUs() {
  return (
    <>
      <TopNavbar />
      <div style={{ backgroundColor: "aqua" }} className={aboutUs.body}>
        <div className={aboutUs.aboutUsBody}></div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
