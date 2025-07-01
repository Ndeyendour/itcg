import Avis from "../components/Avis";
import Breadcrumb from "../components/Breadcrumb";
import Certificatcheck from "../components/Certificatcheck";
import CertificateOne from "../components/CertificateOne";
import FooterOne from "../components/FooterOne";
import HeaderOne from "../components/HeaderOne";
import HeaderTwo from "../components/HeaderTwo";
import TutorSectionOne from "../components/TutorSectionOne";
import Animation from "../helper/Animation";
import Preloader from "../helper/Preloader";

const AvisPage = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title={"Notifications d’exonération d’impôt sur le revenu "} />

      {/* TutorSectionOne */}
      <Avis />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default AvisPage;
