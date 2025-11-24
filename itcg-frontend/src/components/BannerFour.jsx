import { Link } from "react-router-dom";

const BannerFour = () => {
  return (
    <>
      <section className='banner-four bg-main-25 py-80 position-relative overflow-hidden z-1'>

        {/* Décorations */}
        <img src='assets/images/shapes/shape1.png' alt='' className='shape one animation-rotation' />
        <img src='assets/images/shapes/shape2.png' alt='' className='shape two animation-scalation' />
        <img src='assets/images/shapes/shape5.png' alt='' className='shape three animation-walking' />
        <img src='assets/images/shapes/shape2.png' alt='' className='shape four animation-scalation' />
        <img src='assets/images/shapes/shape3.png' alt='' className='shape ten animation-walking' />

        <div className='container'>
          <div className='row gy-5 align-items-center'>
            <div className='col-xl-6'>
              
              <div className='banner-content'>

                {/* Petit titre */}
                <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
                  <span className='text-main-600 text-2xl d-flex'>
                    <i className='ph-bold ph-users-three' />
                  </span>
                  <h5 className='text-main-600 mb-0'>
                    Valoriser et accompagner le tissu associatif de Guédiawaye
                  </h5>
                </div>

                {/* Titre principal */}
                <h1 className='display4 fw-semibold mb-24 wow bounceInLeft'>
                  Maison des Associations&nbsp;
                  <span
                    className='text-main-two-600 wow bounceInRight'
                    data-wow-duration='2s'
                    data-wow-delay='.5s'
                  >
                    Guédiawaye
                  </span>
                </h1>

                {/* Paragraphe */}
                <p className='text-neutral-500 text-line-2 wow bounceInUp mb-32'>
                  Un espace citoyen dédié à l’innovation sociale, à l’entrepreneuriat,
                  à la culture et au renforcement des capacités des organisations communautaires.<br />
                  <b>Un lieu ouvert, collaboratif et engagé pour dynamiser le développement local.</b>
                </p>

                {/* Boutons */}
                <div className='buttons-wrapper flex-align flex-wrap gap-24 mt-40'>
                  <a
                    href='mailto:contact@mag.sn'
                    className='btn btn-main rounded-pill flex-align gap-8'
                    data-aos='fade-right'
                  >
                    Nous contacter
                    <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                  </a>
                  <a
                    href='/actualites'
                    className='btn btn-outline-main rounded-pill flex-align gap-8'
                    data-aos='fade-left'
                  >
                    Actualités & Inscriptions
                    <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                  </a>
                </div>

                {/* Contact rapide */}
                <div className='mt-40 d-flex align-items-center flex-wrap gap-16'>
                  <span className='fw-bold'>+221 00 000 00 00</span>
                  <span className='badge bg-main-100 text-main-700'>contact@mag.sn</span>
                </div>

              </div>
            </div>

            {/* Images / visuels */}
            <div className='col-xl-6'>
              <div className='banner-four-thumb position-relative'>
                <div className='banner-four-thumb__images d-flex gap-24'>
                  <div className='banner-four-thumb__image wow bounceIn'>
                    <img
                      src='assets/images/thumbs/banner-four-img1.jpg'
                      alt='Maison des Associations'
                      className='rounded-bottom-start-72px rounded-top-end-72px'
                      data-tilt='' data-tilt-max={14} data-tilt-speed={500}
                    />
                  </div>
                  <div className='banner-four-thumb__image wow bounceIn mt-160'>
                    <img
                      src='assets/images/thumbs/banner-four-img2.jpg'
                      alt='Vie associative'
                      className='rounded-bottom-end-72px rounded-bottom-end-72px'
                      data-tilt='' data-tilt-max={14} data-tilt-speed={500}
                    />
                  </div>
                </div>

                {/* Box 1 */}
                <div className='banner-box three position-top px-24 py-12 rounded-12 bg-white fw-medium box-shadow-lg flex-align d-inline-flex gap-16'>
                  <span className='banner-box__icon flex-shrink-0 w-48 h-48 d-flex bg-main-three-50 text-main-three-600 text-2xl flex-center rounded-circle'>
                    <i className='ph ph-users' />
                  </span>
                  <div>
                    <span>Associations accompagnées</span>
                    <h6 className='mt-8 fw-medium text-xl d-block text-main-three-600 mb-0 counter'>
                      200+
                    </h6>
                  </div>
                </div>

                {/* Box 2 */}
                <div className='banner-box three position-bottom px-24 py-12 rounded-12 bg-white fw-medium box-shadow-lg flex-align d-inline-flex gap-16'>
                  <span className='banner-box__icon flex-shrink-0 w-48 h-48 d-flex bg-main-two-50 text-main-two-600 text-2xl flex-center rounded-circle'>
                    <i className='ph ph-phone-call' />
                  </span>
                  <div>
                    <span>Contact</span>
                    <a href='tel:+221000000000' className='mt-8 fw-medium text-xl d-block text-main-two-600'>
                      +221 00 000 00 00
                    </a>
                    <a href='mailto:contact@mag.sn' className='d-block text-main-two-600'>
                      contact@mag.sn
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
