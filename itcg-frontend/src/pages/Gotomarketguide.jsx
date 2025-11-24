import BannerFive from "../components/BannerFive";
import Breadcrumb from "../components/Breadcrumb";
import CounterFour from "../components/CounterFour";
import FeaturesThree from "../components/FeaturesThree";
import FooterFour from "../components/FooterFour";
import GallerySectionTwo from "../components/GallerySectionTwo";
import HeaderTwo from "../components/HeaderThree";
import InstructorTwo from "../components/InstructorTwo";
import KidsCourses from "../components/KidsCourses";
import MarqueeOne from "../components/MarqueeOne";
import PopularTwo from "../components/PopularTwo";
import TestimonialsFour from "../components/TestimonialsFour";
import Animation from "../helper/Animation";
import Preloader from "../helper/Preloader";

const Gotomarketguide = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Animation */}
      <Animation />

      {/* HeaderThree */}
      <HeaderTwo />

       <Breadcrumb title={"Acces au marche"} />


      {/* FeaturesThree */}
      <FeaturesThree />

      

      {/* FooterFour */}
      <FooterFour />
    </>
  );
};

export default Gotomarketguide;
