import { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const PortraitsActeursMAG = () => {
  const acteursSliderRef = useRef(null);
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    dots: false,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1299,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className='instructor py-120 bg-main-25 position-relative z-1'>
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape one animation-scalation'
      />
      <img
        src='assets/images/shapes/shape6.png'
        alt=''
        className='shape six animation-scalation'
      />
      <div className='container'>
        <div className='section-heading text-center'>
          <h2 className='mb-24 wow bounceIn'>Nos Acteurs Engagés</h2>
          <p className=' wow bounceInUp'>
            Découvrez les porteurs de projets et associations qui font vivre l'innovation sociale à Guédiawaye
          </p>
        </div>
        <Slider
          {...settings}
          ref={acteursSliderRef}
          className='instructor-slider'
        >
          {/* Acteur 1 - Entrepreneur Tech */}
          <div
            className='instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30'
            data-aos='fade-up'
            data-aos-duration={200}
          >
            <div className='rounded-12 overflow-hidden position-relative bg-dark-yellow'>
              <Link
                to='/profil-acteur'
                className='w-100 h-100 d-flex align-items-end'
              >
                <img
                  src='assets/images/thumbs/instructor-img1.png'
                  alt='Aïssatou Fall - Entrepreneure'
                  className='scale-hover-item__img rounded-12 cover-img transition-2'
                />
              </Link>
            </div>
            <div className='p-24 position-relative'>
              <div className='social-infos'>
                <ul className='social-list flex-align flex-column gap-12 mb-12'>
                  <li className='social-list__item'>
                    <a
                      href='https://www.facebook.com'
                      className=' flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white'
                    >
                      <i className='ph-bold ph-facebook-logo' />
                    </a>
                  </li>
                  <li className='social-list__item'>
                    <a
                      href='https://www.twitter.com'
                      className=' flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white'
                    >
                      <i className='ph-bold ph-twitter-logo' />
                    </a>
                  </li>
                  <li className='social-list__item'>
                    <a
                      href='https://www.linkedin.com'
                      className=' flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white'
                    >
                      <i className='ph-bold ph-instagram-logo' />
                    </a>
                  </li>
                </ul>
                <button className='social-infos__button flex-center w-44 h-44 bg-white text-main-600 rounded-circle text-2xl transition-2'>
                  <i className='ph-bold ph-plus' />
                </button>
              </div>
              <div className=''>
                <h4 className='mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0'>
                  <Link to='/profil-acteur' className='link text-line-2'>
                    Aïssatou Fall
                  </Link>
                </h4>
                <div className='flex-between gap-8 flex-wrap mb-16'>
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-700 text-2xl d-flex'>
                      <i className='ph-bold ph-rocket-launch' />
                    </span>
                    <span className='text-neutral-700 text-lg fw-medium'>
                      Entrepreneure Tech
                    </span>
                  </div>
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-700 text-2xl d-flex'>
                      <i className='ph-bold ph-projector-screen' />
                    </span>
                    <span className='text-neutral-700 text-lg fw-medium'>
                      1 Projet
                    </span>
                  </div>
                </div>
                <div className='flex-between gap-8 flex-wrap'>
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-700 text-2xl d-flex'>
                      <i className='ph-bold ph-users' />
                    </span>
                    <span className='text-neutral-700 text-lg fw-medium'>
                      12 Bénéficiaires
                    </span>
                  </div>
                  <div className='flex-align gap-4'>
                    <span className='text-2xl fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-lg text-neutral-700'>
                      4.8
                      <span className='text-neutral-100'>(24)</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className='pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                <Link
                  to='/profil-acteur'
                  className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                  tabIndex={0}
                >
                  Voir le profil
                  <i className='ph ph-arrow-right' />
                </Link>
              </div>
            </div>
          </div>

          {/* Acteur 2 - Association */}
          <div
            className='instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30'
            data-aos='fade-up'
            data-aos-duration={400}
          >
            <div className='rounded-12 overflow-hidden position-relative bg-dark-yellow'>
              <Link
                to='/profil-acteur'
                className='w-100 h-100 d-flex align-items-end'
              >
                <img
                  src='assets/images/thumbs/instructor-img2.png'
                  alt='Mamadou Diop - Association'
                  className='scale-hover-item__img rounded-12 cover-img transition-2'
                />
              </Link>
            </div>
            <div className='p-24 position-relative'>
              <div className='social-infos'>
                <ul className='social-list flex-align flex-column gap-12 mb-12'>
                  <li className='social-list__item'>
                    <a
                      href='https://www.facebook.com'
                      className=' flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white'
                    >
                      <i className='ph-bold ph-facebook-logo' />
                    </a>
                  </li>
                  <li className='social-list__item'>
                    <a
                      href='https://www.twitter.com'
                      className=' flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white'
                    >
                      <i className='ph-bold ph-twitter-logo' />
                    </a>
                  </li>
                  <li className='social-list__item'>
                    <a
                      href='https://www.linkedin.com'
                      className=' flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white'
                    >
                      <i className='ph-bold ph-instagram-logo' />
                    </a>
                  </li>
                </ul>
                <button className='social-infos__button flex-center w-44 h-44 bg-white text-main-600 rounded-circle text-2xl transition-2'>
                  <i className='ph-bold ph-plus' />
                </button>
              </div>
              <div className=''>
                <h4 className='mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0'>
                  <Link to='/profil-acteur' className='link text-line-2'>
                    Mamadou Diop
                  </Link>
                </h4>
                <div className='flex-between gap-8 flex-wrap mb-16'>
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-700 text-2xl d-flex'>
                      <i className='ph-bold ph-users-three' />
                    </span>
                    <span className='text-neutral-700 text-lg fw-medium'>
                      Association
                    </span>
                  </div>
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-700 text-2xl d-flex'>
                      <i className='ph-bold ph-projector-screen' />
                    </span>
                    <span className='text-neutral-700 text-lg fw-medium'>
                      3 Projets
                    </span>
                  </div>
                </div>
                <div className='flex-between gap-8 flex-wrap'>
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-700 text-2xl d-flex'>
                      <i className='ph-bold ph-handshake' />
                    </span>
                    <span className='text-neutral-700 text-lg fw-medium'>
                      150 Membres
                    </span>
                  </div>
                  <div className='flex-align gap-4'>
                    <span className='text-2xl fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-lg text-neutral-700'>
                      4.9
                      <span className='text-neutral-100'>(36)</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className='pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                <Link
                  to='/profil-acteur'
                  className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                  tabIndex={0}
                >
                  Voir le profil
                  <i className='ph ph-arrow-right' />
                </Link>
              </div>
            </div>
          </div>

          {/* Acteur 3 - Artiste */}
          <div
            className='instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30'
            data-aos='fade-up'
            data-aos-duration={600}
          >
            <div className='rounded-12 overflow-hidden position-relative bg-dark-yellow'>
              <Link
                to='/profil-acteur'
                className='w-100 h-100 d-flex align-items-end'
              >
                <img
                  src='assets/images/thumbs/instructor-img3.png'
                  alt='Fatou Ndiaye - Artiste'
                  className='scale-hover-item__img rounded-12 cover-img transition-2'
                />
              </Link>
            </div>
            <div className='p-24 position-relative'>
              <div className='social-infos'>
                <ul className='social-list flex-align flex-column gap-12 mb-12'>
                  <li className='social-list__item'>
                    <a
                      href='https://www.facebook.com'
                      className=' flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white'
                    >
                      <i className='ph-bold ph-facebook-logo' />
                    </a>
                  </li>
                  <li className='social-list__item'>
                    <a
                      href='https://www.twitter.com'
                      className=' flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white'
                    >
                      <i className='ph-bold ph-twitter-logo' />
                    </a>
                  </li>
                  <li className='social-list__item'>
                    <a
                      href='https://www.linkedin.com'
                      className=' flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white'
                    >
                      <i className='ph-bold ph-instagram-logo' />
                    </a>
                  </li>
                </ul>
                <button className='social-infos__button flex-center w-44 h-44 bg-white text-main-600 rounded-circle text-2xl transition-2'>
                  <i className='ph-bold ph-plus' />
                </button>
              </div>
              <div className=''>
                <h4 className='mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0'>
                  <Link to='/profil-acteur' className='link text-line-2'>
                    Fatou Ndiaye
                  </Link>
                </h4>
                <div className='flex-between gap-8 flex-wrap mb-16'>
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-700 text-2xl d-flex'>
                      <i className='ph-bold ph-palette' />
                    </span>
                    <span className='text-neutral-700 text-lg fw-medium'>
                      Artiste Plasticienne
                    </span>
                  </div>
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-700 text-2xl d-flex'>
                      <i className='ph-bold ph-projector-screen' />
                    </span>
                    <span className='text-neutral-700 text-lg fw-medium'>
                      2 Projets
                    </span>
                  </div>
                </div>
                <div className='flex-between gap-8 flex-wrap'>
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-700 text-2xl d-flex'>
                      <i className='ph-bold ph-graduation-cap' />
                    </span>
                    <span className='text-neutral-700 text-lg fw-medium'>
                      45 Formés
                    </span>
                  </div>
                  <div className='flex-align gap-4'>
                    <span className='text-2xl fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-lg text-neutral-700'>
                      4.7
                      <span className='text-neutral-100'>(18)</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className='pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                <Link
                  to='/profil-acteur'
                  className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                  tabIndex={0}
                >
                  Voir le profil
                  <i className='ph ph-arrow-right' />
                </Link>
              </div>
            </div>
          </div>

          {/* Acteur 4 - Environnement */}
          <div
            className='instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30'
            data-aos='fade-up'
            data-aos-duration={200}
          >
            <div className='rounded-12 overflow-hidden position-relative bg-dark-yellow'>
              <Link
                to='/profil-acteur'
                className='w-100 h-100 d-flex align-items-end'
              >
                <img
                  src='assets/images/thumbs/instructor-img4.png'
                  alt='Ibrahima Sarr - Environnement'
                  className='scale-hover-item__img rounded-12 cover-img transition-2'
                />
              </Link>
            </div>
            <div className='p-24 position-relative'>
              <div className='social-infos'>
                <ul className='social-list flex-align flex-column gap-12 mb-12'>
                  <li className='social-list__item'>
                    <a
                      href='https://www.facebook.com'
                      className=' flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white'
                    >
                      <i className='ph-bold ph-facebook-logo' />
                    </a>
                  </li>
                  <li className='social-list__item'>
                    <a
                      href='https://www.twitter.com'
                      className=' flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white'
                    >
                      <i className='ph-bold ph-twitter-logo' />
                    </a>
                  </li>
                  <li className='social-list__item'>
                    <a
                      href='https://www.linkedin.com'
                      className=' flex-center border border-white text-white w-44 h-44 rounded-circle text-xl hover-text-main hover-bg-white'
                    >
                      <i className='ph-bold ph-instagram-logo' />
                    </a>
                  </li>
                </ul>
                <button className='social-infos__button flex-center w-44 h-44 bg-white text-main-600 rounded-circle text-2xl transition-2'>
                  <i className='ph-bold ph-plus' />
                </button>
              </div>
              <div className=''>
                <h4 className='mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0'>
                  <Link to='/profil-acteur' className='link text-line-2'>
                    Ibrahima Sarr
                  </Link>
                </h4>
                <div className='flex-between gap-8 flex-wrap mb-16'>
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-700 text-2xl d-flex'>
                      <i className='ph-bold ph-leaf' />
                    </span>
                    <span className='text-neutral-700 text-lg fw-medium'>
                      Éco-entrepreneur
                    </span>
                  </div>
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-700 text-2xl d-flex'>
                      <i className='ph-bold ph-projector-screen' />
                    </span>
                    <span className='text-neutral-700 text-lg fw-medium'>
                      2 Projets
                    </span>
                  </div>
                </div>
                <div className='flex-between gap-8 flex-wrap'>
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-700 text-2xl d-flex'>
                      <i className='ph-bold ph-plant' />
                    </span>
                    <span className='text-neutral-700 text-lg fw-medium'>
                      8 Communautés
                    </span>
                  </div>
                  <div className='flex-align gap-4'>
                    <span className='text-2xl fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-lg text-neutral-700'>
                      4.6
                      <span className='text-neutral-100'>(31)</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className='pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                <Link
                  to='/profil-acteur'
                  className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                  tabIndex={0}
                >
                  Voir le profil
                  <i className='ph ph-arrow-right' />
                </Link>
              </div>
            </div>
          </div>
        </Slider>

        <div className='flex-align gap-16 mt-40 justify-content-center'>
          <button
            type='button'
            id='instructor-prev'
            onClick={() => acteursSliderRef.current.slickPrev()}
            className='slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48'
          >
            <i className='ph ph-caret-left' />
          </button>
          <button
            type='button'
            id='instructor-next'
            onClick={() => acteursSliderRef.current.slickNext()}
            className='slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48'
          >
            <i className='ph ph-caret-right' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortraitsActeursMAG;