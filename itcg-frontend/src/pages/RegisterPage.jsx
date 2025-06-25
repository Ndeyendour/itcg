
import Breadcrumb from "../components/Breadcrumb";

import FooterThree from "../components/FooterThree";
import HeaderTwo from "../components/HeaderTwo";
import RegisterForm from "../components/RegisterForm";
import Animation from "../helper/Animation";
import Preloader from "../helper/Preloader";

const RegisterPage = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Animation */}
      <Animation />

      {/* HeaderOne */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title={"Inscription"} />
      {/* AboutOne */}
      
      {/* FooterOne */}
      <FooterThree />
    </>
  );
};

export default RegisterPage;
