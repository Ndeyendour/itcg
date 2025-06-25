import AboutOne from "../components/AboutOne";
import BrandTwo from "../components/BrandTwo";
import Breadcrumb from "../components/Breadcrumb";
import CertificateOne from "../components/CertificateOne";
import ChooseUsOne from "../components/ChooseUsOne";
import CounterOne from "../components/CounterOne";
import FooterOne from "../components/FooterOne";
import FooterThree from "../components/FooterThree";
import HeaderOne from "../components/HeaderOne";
import HeaderTwo from "../components/HeaderTwo";
import InstructorOne from "../components/InstructorOne";
import TestimonialsOne from "../components/TestimonialsOne";
import Animation from "../helper/Animation";
import Preloader from "../helper/Preloader";

const AboutPage = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Animation */}
      <Animation />

      {/* HeaderOne */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title={"guide de financement"} />

      {/* AboutOne */}
      <AboutOne />

      {/* InstructorOne */}
      <InstructorOne />

      {/* ChooseUsOne */}
      <ChooseUsOne />

      {/* CounterOne */}
      <CounterOne />

      {/* TestimonialsOne */}
      <TestimonialsOne />

      {/* BrandTwo */}
      <BrandTwo />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterThree />
    </>
  );
};

export default AboutPage;
