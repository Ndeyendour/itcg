import BlogOne from "../components/BlogOne";
import BrandOne from "../components/BrandOne";
import Breadcrumb from "../components/Breadcrumb";
import CertificateOne from "../components/CertificateOne";
import CounterOne from "../components/CounterOne";
import FooterFour from "../components/FooterFour";
import FooterOne from "../components/FooterOne";
import FooterThree from "../components/FooterThree";
import HeaderTwo from "../components/HeaderTwo";
import InstructorOne from "../components/InstructorOne";
import Animation from "../helper/Animation";
import Preloader from "../helper/Preloader";

const ProgrammesPages = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title={"Programmes et defis"} />

      {/* ProductsInner */}
      <CounterOne />
      <InstructorOne />
        <BlogOne />
        <BrandOne />
        <CertificateOne />
      

      {/* FooterOne */}
      <FooterThree />
    </>
  );
};

export default ProgrammesPages;
