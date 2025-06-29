import { Link } from "react-router-dom";

const AboutTwo = () => {
  return (
    <section className='about-two py-120 position-relative z-1 bg-main-25'>
      <div className='position-relative'>
        <div className='container'>
          <div className='row gy-xl-0 gy-5 flex-wrap-reverse align-items-center'>
            <div className='col-xl-6 pe-xl-5'>
              <div className='about-two__thumb position-relative'>
                <img
                  src='assets/images/thumbs/about-two-img.png'
                  className='rounded-16 cover-img  wow bounceIn'
                  alt=''
                  data-tilt=''
                  data-tilt-max={10}
                  data-tilt-speed={500}
                  data-tilt-perspective={5000}
                  data-tilt-full-page-listening=''
                />
                <span className='shadow-main-three w-80 h-80 flex-center bg-main-three-600 rounded-circle position-absolute inset-block-start-0 inset-inline-start-0 mt-40 ms--40 animation-upDown'>
                  <img
                    src='assets/images/icons/bulb-icon.png'
                    alt=''
                  />
                </span>
                <div className='offer-message two px-24 py-12 rounded-12 bg-white fw-medium box-shadow-lg flex-align d-inline-flex gap-16 animation-upDown'>
                  <span className='flex-shrink-0 w-48 h-48 bg-purple-400 text-white text-2xl flex-center rounded-circle'>
                    <i className='ph ph-watch' />
                  </span>
                  <div>
                    <h6 className='mb-4'>Accès Gratuit</h6>
                    <span>Sur tous les ateliers jeunesse</span>
                  </div>
                </div>
                <div className='offer-message style-two me-lg-0 me-24 px-24 py-12 rounded-12 bg-white fw-medium flex-align d-inline-flex gap-16 box-shadow-lg animation-upDown'>
                  <span className='flex-shrink-0 w-48 h-48 bg-main-two-600 text-white text-2xl flex-center rounded-circle'>
                    <img src='assets/images/icons/stars-white.png' alt='' />
                  </span>
                  <div>
                    <span className='text-lg text-neutral-700 d-block'>
                      4.8 <span className='text-neutral-100'>(3.1k)</span>
                    </span>
                    <span className='text-neutral-500'>Avis positifs</span>
                  </div>
                </div>
                <div className='position-absolute inset-block-end-0 inset-inline-end-0 me-lg-0 me-24 px-24 py-12 rounded-12 bg-white fw-medium flex-align d-inline-flex gap-16 box-shadow-lg animation-upDown'>
                  <div className='text-center'>
                    <img
                      src='assets/images/icons/circle-progress.png'
                      className='d-sm-flex d-none mb-24'
                      alt=''
                    />
                    <h6 className='mb-4 text-neutral-700 text-2xl'>Impact réel</h6>
                    <span className='text-sm text-neutral-500'>
                      90% des jeunes formés trouvent une opportunité
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-xl-6'>
              <div className='about-two-content'>
                <div className='mb-40'>
                  <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
                    <span className='text-main-600 text-2xl d-flex'>
                      <i className='ph-bold ph-book' />
                    </span>
                    <h5 className='text-main-600 mb-0'>Pourquoi ITCG ?</h5>
                  </div>
                  <h2 className='mb-24 wow bounceIn'>
                    Un incubateur au service de la jeunesse et de la culture
                  </h2>
                  <p className='text-neutral-500 text-line-2 wow bounceInUp'>
                    L'ITCG est un projet novateur qui allie culture, numérique et inclusion sociale.
                    Il accompagne les jeunes de Guédiawaye dans leur parcours de formation, de création et d’insertion.
                  </p>
                </div>

                <div className='grid-cols-2'>
                  <div
                    className='flex-align align-items-start gap-20 animation-item'
                    data-aos='fade-up'
                    data-aos-duration={600}
                  >
                    <span className='flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md'>
                      <img
                        src='assets/images/icons/choose-us-icon1.png'
                        className='animate__swing'
                        alt=''
                      />
                    </span>
                    <div className='flex-grow-1'>
                      <h6 className='text-neutral-800 text-xl fw-medium mb-8'>
                        Apprentissage innovant
                      </h6>
                      <p className='text-neutral-500 text-line-2'>
                        Ateliers numériques, design, audiovisuel et plus encore
                      </p>
                    </div>
                  </div>

                  <div
                    className='flex-align align-items-start gap-20 animation-item'
                    data-aos='fade-up'
                    data-aos-duration={800}
                  >
                    <span className='flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md'>
                      <img
                        src='assets/images/icons/choose-us-icon2.png'
                        className='animate__swing'
                        alt=''
                      />
                    </span>
                    <div className='flex-grow-1'>
                      <h6 className='text-neutral-800 text-xl fw-medium mb-8'>
                        Encadrement local
                      </h6>
                      <p className='text-neutral-500 text-line-2'>
                        Un réseau de mentors, artistes et experts de la communauté
                      </p>
                    </div>
                  </div>

                  <div
                    className='flex-align align-items-start gap-20 animation-item'
                    data-aos='fade-up'
                    data-aos-duration={1000}
                  >
                    <span className='flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md'>
                      <img
                        src='assets/images/icons/choose-us-icon3.png'
                        className='animate__swing'
                        alt=''
                      />
                    </span>
                    <div className='flex-grow-1'>
                      <h6 className='text-neutral-800 text-xl fw-medium mb-8'>
                        Culture & créativité
                      </h6>
                      <p className='text-neutral-500 text-line-2'>
                        Mise en valeur du patrimoine culturel à travers le numérique
                      </p>
                    </div>
                  </div>

                  <div
                    className='flex-align align-items-start gap-20 animation-item'
                    data-aos='fade-up'
                    data-aos-duration={1200}
                  >
                    <span className='flex-shrink-0 w-60 h-60 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md'>
                      <img
                        src='assets/images/icons/choose-us-icon4.png'
                        className='animate__swing'
                        alt=''
                      />
                    </span>
                    <div className='flex-grow-1'>
                      <h6 className='text-neutral-800 text-xl fw-medium mb-8'>
                        Insertion professionnelle
                      </h6>
                      <p className='text-neutral-500 text-line-2'>
                        Création d’emplois, entrepreneuriat et stages garantis
                      </p>
                    </div>
                  </div>
                </div>

                <div className='pt-40 border-top border-neutral-50 mt-40 border-dashed border-0'>
                  <Link
                    to='/course'
                    className='btn btn-main rounded-pill flex-align d-inline-flex gap-8'
                  >
                    Découvrir les parcours
                    <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
