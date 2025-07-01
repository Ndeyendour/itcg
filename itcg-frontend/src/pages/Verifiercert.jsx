import Breadcrumb from "../components/Breadcrumb";
import Certificatcheck from "../components/Certificatcheck";
import CertificateOne from "../components/CertificateOne";
import FooterOne from "../components/FooterOne";
import HeaderOne from "../components/HeaderOne";
import HeaderTwo from "../components/HeaderTwo";
import TutorSectionOne from "../components/TutorSectionOne";
import Animation from "../helper/Animation";
import Preloader from "../helper/Preloader";

const Verifiercert = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title={"Vérifier / Télécharger le certificat "} />

      {/* TutorSectionOne */}
      <Certificatcheck />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default Verifiercert;
