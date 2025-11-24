import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import HeaderOne from "../components/HeaderOne";
import HeaderTwo from "../components/HeaderTwo";
import SignUpInner from "../components/SignUpInner";
import Animation from "../helper/Animation";
import Preloader from "../helper/Preloader";

const SignUpPage = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title={"S'inscrire"} />

      {/* SignUpInner */}
      <SignUpInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default SignUpPage;
