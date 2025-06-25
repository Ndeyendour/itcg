import Breadcrumb from "../components/Breadcrumb";
import CertificateOne from "../components/CertificateOne";
import FooterFour from "../components/FooterFour";
import FooterOne from "../components/FooterOne";
import FooterThree from "../components/FooterThree";
import HeaderOne from "../components/HeaderOne";
import HeaderTwo from "../components/HeaderTwo";
import ProductsInner from "../components/ProductsInner";
import Animation from "../helper/Animation";
import Preloader from "../helper/Preloader";

const ProductPage = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title={"Reseau"} />

      {/* ProductsInner */}
      <ProductsInner />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterThree />
    </>
  );
};

export default ProductPage;
