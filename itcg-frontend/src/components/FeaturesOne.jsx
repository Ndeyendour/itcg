import { Link } from "react-router-dom";
import Slider from "react-slick";

const FeaturesOne = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 900,
    dots: false,
    pauseOnHover: true,
    arrows: false,
    infinite: true,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="features py-120 position-relative overflow-hidden">
      <img
        src="assets/images/shapes/shape2.png"
        alt=""
        className="shape two animation-scalation"
      />
      <img
        src="assets/images/shapes/shape4.png"
        alt=""
        className="shape six animation-walking"
      />
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="mb-24 wow bounceIn">Nos Initiatives pour l'Innovation</h2>
          <p className="wow bounceInUp">
            Découvrez les programmes et les actions de soutien mis en place par la MAG pour accompagner les associations locales et encourager l'entrepreneuriat social.
          </p>
        </div>

        <Slider {...settings} className="features-slider">
          {/* Slide 1 */}
          <div className="px-8" data-aos="zoom-in" data-aos-duration={400}>
            <div className="features-item item-hover animation-item bg-main-25 border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
              <span className="mb-32 w-110 h-110 flex-center bg-white rounded-circle">
                <img
                  src="assets/images/testimonial/1.jpg"
                  className="animate__bounce rounded-circle w-100 h-100 object-fit-cover"
                  alt="Accompagnement Associatif"
                />
              </span>
              <h4 className="mb-16 transition-1 item-hover__text">
                Accompagnement Associatif
              </h4>
              <p className="transition-1 item-hover__text text-line-3">
                Ateliers et formations pour renforcer les capacités des associations locales. <br />
                Accompagnement dans la gestion administrative et le financement de projets communautaires.
              </p>
              <Link
                to="/about"
                className="item-hover__text flex-align gap-8 text-main-600 mt-24 hover-text-decoration-underline transition-1"
              >
                En savoir plus <i className="ph ph-arrow-right" />
              </Link>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="px-8" data-aos="zoom-in" data-aos-duration={800}>
            <div className="features-item item-hover animation-item bg-main-25 border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
              <span className="mb-32 w-110 h-110 flex-center bg-white rounded-circle">
                <img
                  src="assets/images/testimonial/2.jpg"
                  className="animate__bounce rounded-circle w-100 h-100 object-fit-cover"
                  alt="Incubation et Entrepreneuriat"
                />
              </span>
              <h4 className="mb-16 transition-1 item-hover__text">
                Incubation et Entrepreneuriat
              </h4>
              <p className="transition-1 item-hover__text text-line-3">
                Soutien aux jeunes porteurs de projets à travers des programmes d'incubation. <br />
                Accès à des espaces de coworking, mentorat, et accompagnement dans le développement de projets innovants.
              </p>
              <Link
                to="/about"
                className="item-hover__text flex-align gap-8 text-main-600 mt-24 hover-text-decoration-underline transition-1"
              >
                En savoir plus <i className="ph ph-arrow-right" />
              </Link>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="px-8" data-aos="zoom-in" data-aos-duration={1200}>
            <div className="features-item item-hover animation-item bg-main-25 border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
              <span className="mb-32 w-110 h-110 flex-center bg-white rounded-circle">
                <img
                  src="assets/images/testimonial/3.jpg"
                  className="animate__bounce rounded-circle w-100 h-100 object-fit-cover"
                  alt="Soutien à l'Innovation Sociale"
                />
              </span>
              <h4 className="mb-16 transition-1 item-hover__text">
                Soutien à l'Innovation Sociale
              </h4>
              <p className="transition-1 item-hover__text text-line-3">
                Mise en place de programmes pour favoriser les projets à impact social. <br />
                Partenariats avec des acteurs publics et privés pour soutenir des initiatives locales.
              </p>
              <Link
                to="/about"
                className="item-hover__text flex-align gap-8 text-main-600 mt-24 hover-text-decoration-underline transition-1"
              >
                En savoir plus <i className="ph ph-arrow-right" />
              </Link>
            </div>
          </div>
        </Slider>

        {/* Navigation Arrows */}
        <div className="flex-align gap-16 mt-40 justify-content-center">
          <button
            type="button"
            id="features-prev"
            className="slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48"
          >
            <i className="ph ph-caret-left" />
          </button>
          <button
            type="button"
            id="features-next"
            className="slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48"
          >
            <i className="ph ph-caret-right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOne;
