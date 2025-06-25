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
    <section className='features py-120 position-relative overflow-hidden'>
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape two animation-scalation'
      />
      <img
        src='assets/images/shapes/shape4.png'
        alt=''
        className='shape six animation-walking'
      />
      <div className='container'>
        <div className='section-heading text-center'>
          <h2 className='mb-24 wow bounceIn'>Nos initiatives pour l’innovation</h2>
          <p className='wow bounceInUp'>
            Découvrez les programmes et politiques de soutien mis en place par
            l'ITCG pour accompagner les startups, réduire les charges
            administratives et encourager l'entrepreneuriat.
          </p>
        </div>

        <Slider {...settings} className='features-slider'>
          {/* Slide 1 */}
          <div className='px-8' data-aos='zoom-in' data-aos-duration={400}>
            <div className='features-item item-hover animation-item bg-main-25 border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600'>
              <span className='mb-32 w-110 h-110 flex-center bg-white rounded-circle'>
                <img
                  src='assets/images/testimonial/1.jpg'
                  className='animate__bounce rounded-circle w-100 h-100 object-fit-cover'
                  alt='Programmes Clés'
                />
              </span>
              <h4 className='mb-16 transition-1 item-hover__text'>
                Programmes Clés
              </h4>
              <p className='transition-1 item-hover__text text-line-3'>
                ITCG Startup Boost : incubation, prototypage, mise sur le marché. <br />
                Fonds d’amorçage ITCG : projets à fort potentiel. <br />
                Femmes Innovatrices : soutien dédié aux entrepreneuses.
              </p>
              <Link
                to='/about'
                className='item-hover__text flex-align gap-8 text-main-600 mt-24 hover-text-decoration-underline transition-1'
              >
                En savoir plus <i className='ph ph-arrow-right' />
              </Link>
            </div>
          </div>

          {/* Slide 2 */}
          <div className='px-8' data-aos='zoom-in' data-aos-duration={800}>
            <div className='features-item item-hover animation-item bg-main-25 border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600'>
              <span className='mb-32 w-110 h-110 flex-center bg-white rounded-circle'>
                <img
                  src='assets/images/testimonial/2.jpg'
                  className='animate__bounce rounded-circle w-100 h-100 object-fit-cover'
                  alt='Politiques de Soutien'
                />
              </span>
              <h4 className='mb-16 transition-1 item-hover__text'>
                Politiques de Soutien
              </h4>
              <p className='transition-1 item-hover__text text-line-3'>
                Exonérations fiscales pour les startups reconnues. <br />
                Procédures d’enregistrement simplifiées. <br />
                Accès accéléré aux services de propriété intellectuelle.
              </p>
              <Link
                to='/about'
                className='item-hover__text flex-align gap-8 text-main-600 mt-24 hover-text-decoration-underline transition-1'
              >
                En savoir plus <i className='ph ph-arrow-right' />
              </Link>
            </div>
          </div>

          {/* Slide 3 */}
          <div className='px-8' data-aos='zoom-in' data-aos-duration={1200}>
            <div className='features-item item-hover animation-item bg-main-25 border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600'>
              <span className='mb-32 w-110 h-110 flex-center bg-white rounded-circle'>
                <img
                  src='assets/images/testimonial/3.jpg'
                  className='animate__bounce rounded-circle w-100 h-100 object-fit-cover'
                  alt='Engagement Durable'
                />
              </span>
              <h4 className='mb-16 transition-1 item-hover__text'>
                Engagement Durable
              </h4>
              <p className='transition-1 item-hover__text text-line-3'>
                Politique verte : soutien aux initiatives écologiques. <br />
                Innovation sociale et technologique encouragée. <br />
                Partenariats publics-privés pour booster les projets.
              </p>
              <Link
                to='/about'
                className='item-hover__text flex-align gap-8 text-main-600 mt-24 hover-text-decoration-underline transition-1'
              >
                En savoir plus <i className='ph ph-arrow-right' />
              </Link>
            </div>
          </div>
        </Slider>

        {/* Navigation Arrows */}
        <div className='flex-align gap-16 mt-40 justify-content-center'>
          <button
            type='button'
            id='features-prev'
            className='slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48'
          >
            <i className='ph ph-caret-left' />
          </button>
          <button
            type='button'
            id='features-next'
            className='slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48'
          >
            <i className='ph ph-caret-right' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOne;
