import BannerFive from "../components/BannerFive";
import BrandOne from "../components/BrandOne";
import BrandTwo from "../components/BrandTwo";
import Breadcrumb from "../components/Breadcrumb";
import CounterFour from "../components/CounterFour";
import CounterThree from "../components/CounterThree";
import CounterThreeV2 from "../components/CounterThreeV2";
import CounterTwo from "../components/CounterTwo";
import FeaturesThree from "../components/FeaturesThree";
import FooterFour from "../components/FooterFour";
import GallerySectionTwo from "../components/GallerySectionTwo";
import HeaderTwo from "../components/HeaderThree";
import InstructorOne from "../components/InstructorOne";
import InstructorTwo from "../components/InstructorTwo";
import KidsCourses from "../components/KidsCourses";
import MarqueeOne from "../components/MarqueeOne";
import PopularTwo from "../components/PopularTwo";
import TestimonialsFour from "../components/TestimonialsFour";
import Animation from "../helper/Animation";
import Preloader from "../helper/Preloader";

const PartenersPage = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Animation */}
      <Animation />

      {/* HeaderThree */}
      <HeaderTwo />

       <Breadcrumb title={"Partenaires itcg"} />
       
        <CounterThree />
        <BrandTwo />
        <InstructorOne />

      {/* FeaturesThree */}
      <FeaturesThree />

      

      {/* FooterFour */}
      <FooterFour />
    </>
  );
};

export default PartenersPage;
