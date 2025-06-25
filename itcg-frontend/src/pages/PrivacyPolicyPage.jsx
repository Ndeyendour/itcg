import Breadcrumb from "../components/Breadcrumb";
import CertificateOne from "../components/CertificateOne";
import FooterOne from "../components/FooterOne";
import FooterThree from "../components/FooterThree";
import FooterTwo from "../components/FooterTwo";
import HeaderOne from "../components/HeaderOne";
import HeaderTwo from "../components/HeaderTwo";
import PrivacyPolicyInner from "../components/PrivacyPolicyInner";
import Animation from "../helper/Animation";
import Preloader from "../helper/Preloader";

const PrivacyPolicyPage = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title={"Privacy Policy"} />

      {/* PrivacyPolicyInner */}
      <PrivacyPolicyInner />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterThree />
    </>
  );
};

export default PrivacyPolicyPage;
