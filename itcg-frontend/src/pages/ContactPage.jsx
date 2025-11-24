import Breadcrumb from "../components/Breadcrumb";
import CertificateOne from "../components/CertificateOne";
import ContactInner from "../components/ContactInner";
import FooterOne from "../components/FooterOne";
import HeaderTwo from "../components/HeaderTwo";
import Animation from "../helper/Animation";
import Preloader from "../helper/Preloader";

const ContactPage = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title={"Contact"} />

      {/* ContactInner */}
      <ContactInner />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default ContactPage;
