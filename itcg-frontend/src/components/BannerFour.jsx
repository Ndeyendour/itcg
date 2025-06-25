import { Link } from "react-router-dom";

const BannerFour = () => {
  return (
    <>
      <section className='banner-four bg-main-25 py-80 position-relative overflow-hidden z-1'>
        {/* Les images décoratives peuvent rester */}
        <img
          src='assets/images/shapes/shape1.png'
          alt=''
          className='shape one animation-rotation'
        />
        <img
          src='assets/images/shapes/shape2.png'
          alt=''
          className='shape two animation-scalation'
        />
        <img
          src='assets/images/shapes/shape5.png'
          alt=''
          className='shape three animation-walking'
        />
        <img
          src='assets/images/shapes/shape2.png'
          alt=''
          className='shape four animation-scalation'
        />
        <img
          src='assets/images/shapes/shape3.png'
          alt=''
          className='shape ten animation-walking'
        />
        <div className='container'>
          <div className='row gy-5 align-items-center'>
            <div className='col-xl-6'>
              <div className='banner-content'>

                <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
                  <span className='text-main-600 text-2xl d-flex'>
                    <i className='ph-bold ph-lightbulb' />
                  </span>
                  <h5 className='text-main-600 mb-0'>
                    Accompagner l'innovation à Guédiawaye
                  </h5>
                </div>

                <h1 className='display4 fw-semibold mb-24 wow bounceInLeft'>
                  ITCG&nbsp;
                  <span
                    className='text-main-two-600 wow bounceInRight'
                    data-wow-duration='2s'
                    data-wow-delay='.5s'
                  >
                    Guédiawaye
                  </span>
                </h1>
                <p className='text-neutral-500 text-line-2 wow bounceInUp mb-32'>
                  Transformer Guédiawaye en un pôle d’innovation alliant technologie, art et culture.<br />
                  <b>Des outils flexibles, sécurisés et évolutifs pour soutenir la croissance des startups.</b>
                </p>

                {/* <ul className="ps-4 mb-32 text-lg">
                  <li>
                    Des programmes de formation adaptés, concrets et motivants pour accompagner les entrepreneurs.
                  </li>
                  <li>
                    Des solutions technologiques simples, puissantes et adaptables pour relever les défis des entrepreneurs.
                  </li>
                  <li>
                    Des programmes d’insertion sur mesure pour ouvrir les portes de la réussite aux jeunes.
                  </li>
                </ul> */}

                <div className='buttons-wrapper flex-align flex-wrap gap-24 mt-40'>
                  <a
                    href="mailto:info@itcg.sn"
                    className='btn btn-main rounded-pill flex-align gap-8'
                    data-aos='fade-right'
                  >
                    Contactez-nous
                    <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                  </a>
                  <a
                    href="https://www.itcg.sn"
                    className='btn btn-outline-main rounded-pill flex-align gap-8'
                    data-aos='fade-left'
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.itcg.sn
                    <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                  </a>
                </div>
                <div className='mt-40 d-flex align-items-center flex-wrap gap-16'>
                  <span className='fw-bold'>+221 33 877 35 77</span>
                  <span className='badge bg-main-100 text-main-700'>info@itcg.sn</span>
                </div>
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='banner-four-thumb position-relative'>
                <div className='banner-four-thumb__images d-flex gap-24'>
                  <div className='banner-four-thumb__image wow bounceIn'>
                    <img
                      src='assets/images/thumbs/banner-four-img1.jpg'
                      alt='Banner'
                      className='rounded-bottom-start-72px rounded-top-end-72px'
                      data-tilt=''
                      data-tilt-max={14}
                      data-tilt-speed={500}
                      data-tilt-perspective={5000}
                      data-tilt-transition='1s'
                      data-tilt-full-page-listening=''
                    />
                  </div>
                  <div className='banner-four-thumb__image wow bounceIn mt-160'>
                    <img
                      src='assets/images/thumbs/banner-four-img2.jpg'
                      alt='Banner '
                      className='rounded-bottom-end-72px rounded-bottom-end-72px'
                      data-tilt=''
                      data-tilt-max={14}
                      data-tilt-speed={500}
                      data-tilt-perspective={5000}
                      data-tilt-transition='1s'
                      data-tilt-full-page-listening=''
                    />
                  </div>
                </div>
                <div className='banner-box three position-top px-24 py-12 rounded-12 bg-white fw-medium box-shadow-lg flex-align d-inline-flex gap-16'>
                  <span className='banner-box__icon flex-shrink-0 w-48 h-48 d-flex bg-main-three-50 text-main-three-600 text-2xl flex-center rounded-circle'>
                    <i className='ph ph-suitcase-simple' />
                  </span>
                  <div>
                    <span>Startups accompagnées</span>
                    <h6 className='mt-8 fw-medium text-xl d-block text-main-three-600 mb-0 counter'>
                      100+
                    </h6>
                  </div>
                </div>
                <div className='banner-box three position-bottom px-24 py-12 rounded-12 bg-white fw-medium box-shadow-lg flex-align d-inline-flex gap-16'>
                  <span className='banner-box__icon flex-shrink-0 w-48 h-48 d-flex bg-main-two-50 text-main-two-600 text-2xl flex-center rounded-circle'>
                    <i className='ph ph-phone-call' />
                  </span>
                  <div>
                    <span>Joignez-nous</span>
                    <a
                      href='tel:+221338773577'
                      className='mt-8 fw-medium text-xl d-block text-main-two-600 hover-text-main-two-700'
                    >
                      +221 33 877 35 77
                    </a>
                    <a
                      href='mailto:info@itcg.sn'
                      className='d-block text-main-two-600 hover-text-main-two-700'
                    >
                      info@itcg.sn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerFour;