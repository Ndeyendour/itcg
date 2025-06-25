
import Breadcrumb from "../components/Breadcrumb";

import FooterThree from "../components/FooterThree";
import HeaderTwo from "../components/HeaderTwo";
import Animation from "../helper/Animation";
import Preloader from "../helper/Preloader";

const LoginPage = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Animation */}
      <Animation />

      {/* HeaderOne */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title={"Connexion"} />
      {/* AboutOne */}
      
      {/* FooterOne */}
      <FooterThree />
    </>
  );
};

export default LoginPage;
