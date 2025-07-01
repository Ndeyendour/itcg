import BlogGridInner from "../components/BlogGridInner";
import Breadcrumb from "../components/Breadcrumb";
import CertificateOne from "../components/CertificateOne";
import FooterOne from "../components/FooterOne";
import FooterThree from "../components/FooterThree";
import HeaderOne from "../components/HeaderOne";
import HeaderTwo from "../components/HeaderTwo";
import Animation from "../helper/Animation";
import Preloader from "../helper/Preloader";

const BlogPage = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Animation */}
      <Animation />

      {/* HeaderOne */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title={"Bulletin d'information"} />

      {/* BlogGridInner */}
      <BlogGridInner />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterThree />
    </>
  );
};

export default BlogPage;
