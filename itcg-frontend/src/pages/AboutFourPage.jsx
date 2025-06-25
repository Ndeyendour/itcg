import AboutFourV2 from "../components/AboutFourV2";
import BrandTwo from "../components/BrandTwo";
import Breadcrumb from "../components/Breadcrumb";
import CounterThreeV2 from "../components/CounterThreeV2";
import FooterThree from "../components/FooterThree";
import HeaderOne from "../components/HeaderOne";
import HeaderTwo from "../components/HeaderTwo";
import PopularTeacherOne from "../components/PopularTeacherOne";
import ReviewOne from "../components/ReviewOne";
import Animation from "../helper/Animation";
import Preloader from "../helper/Preloader";

const AboutFourPage = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title={"Reconnaissance"} />

      {/* AboutFourV2 */}
      <AboutFourV2 />

      {/* CounterThree */}
      <CounterThreeV2 />

      {/* PopularTeacherOne */}
      <PopularTeacherOne />

      {/* ReviewOne */}
      <ReviewOne />

      {/* BrandTwo */}
      <BrandTwo />

      {/* FooterThree */}
      <FooterThree />
    </>
  );
};

export default AboutFourPage;
