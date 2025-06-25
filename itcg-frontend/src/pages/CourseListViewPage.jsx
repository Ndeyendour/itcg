import Breadcrumb from "../components/Breadcrumb";
import CertificateOne from "../components/CertificateOne";
import CourseListView from "../components/CourseListView";
import FooterOne from "../components/FooterOne";
import HeaderOne from "../components/HeaderOne";
import HeaderTwo from "../components/HeaderTwo";
import Animation from "../helper/Animation";
import Preloader from "../helper/Preloader";

const CourseListViewPage = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title={"Courses List View"} />

      {/* CourseListView */}
      <CourseListView />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default CourseListViewPage;
