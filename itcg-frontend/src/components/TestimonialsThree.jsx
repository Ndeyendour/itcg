import { useRef } from "react";
import Slider from "react-slick";

const TemoignagesMAG = () => {
  const sliderRef = useRef(null);
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 900,
    dots: false,
    pauseOnHover: true,
    arrows: false,
    draggable: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",

    responsive: [
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
    <section className='testimonials-three py-120 bg-main-25 position-relative z-1 overflow-hidden'>
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape two animation-scalation'
      />
      <img
        src='assets/images/shapes/shape6.png'
        alt=''
        className='shape four animation-scalation'
      />
      <img
        src='assets/images/shapes/shape4.png'
        alt=''
        className='shape one animation-scalation'
      />
      <div className='container'>
        <div className='row gy-4 align-items-center flex-wrap-reverse'>
          <div className='col-xl-7'>
            <Slider
              ref={sliderRef}
              {...settings}
              className='testimonials-three-slider'
            >
              {/* Témoignage Association */}
              <div className='testimonials-three-item bg-white p-24 rounded-12 box-shadow-md'>
                <div className='w-90 h-90 rounded-circle position-relative mb-4'>
                  <img
                    src='assets/images/thumbs/temoignage-association.png'
                    alt='Portrait président association jeunesse'
                    className='cover-img rounded-circle'
                  />
                  <span className='w-40 h-40 bg-main-two-600 flex-center border border-white border-2 rounded-circle position-absolute inset-block-end-0 inset-inline-end-0 mt--5 me--5'>
                    <img src='assets/images/icons/quote-two-icon.png' alt='citation' />
                  </span>
                </div>
                <p className='text-neutral-500 my-24'>
                  "La MAG nous a offert un cadre professionnel et des formations de qualité qui ont transformé notre association. L'accompagnement nous a permis de structurer nos projets et d'atteindre plus de bénéficiaires."
                </p>
                <ul className='flex-align gap-8 mb-16'>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                </ul>
                <h4 className='mb-16 text-lg'>Mamadou Diop</h4>
                <span className='text-neutral-500'>Président - Association Jeunesse Active</span>
              </div>

              {/* Témoignage Entrepreneur */}
              <div className='testimonials-three-item bg-white p-24 rounded-12 box-shadow-md'>
                <div className='w-90 h-90 rounded-circle position-relative mb-4'>
                  <img
                    src='assets/images/thumbs/temoignage-entrepreneur.png'
                    alt='Portrait entrepreneure tech'
                    className='cover-img rounded-circle'
                  />
                  <span className='w-40 h-40 bg-main-two-600 flex-center border border-white border-2 rounded-circle position-absolute inset-block-end-0 inset-inline-end-0 mt--5 me--5'>
                    <img src='assets/images/icons/quote-two-icon.png' alt='citation' />
                  </span>
                </div>
                <p className='text-neutral-500 my-24'>
                  "L'incubateur Tech & Art de la MAG a été décisif pour mon startup. Le mentorat et l'accès au réseau m'ont permis de lancer mon application mobile qui connecte les artisans locaux aux marchés internationaux."
                </p>
                <ul className='flex-align gap-8 mb-16'>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                </ul>
                <h4 className='mb-16 text-lg'>Aïssatou Fall</h4>
                <span className='text-neutral-500'>Fondatrice - ArtConnect</span>
              </div>

              {/* Témoignage Partenaire */}
              <div className='testimonials-three-item bg-white p-24 rounded-12 box-shadow-md'>
                <div className='w-90 h-90 rounded-circle position-relative mb-4'>
                  <img
                    src='assets/images/thumbs/temoignage-partenaire.png'
                    alt='Portrait responsable organisation internationale'
                    className='cover-img rounded-circle'
                  />
                  <span className='w-40 h-40 bg-main-two-600 flex-center border border-white border-2 rounded-circle position-absolute inset-block-end-0 inset-inline-end-0 mt--5 me--5'>
                    <img src='assets/images/icons/quote-two-icon.png' alt='citation' />
                  </span>
                </div>
                <p className='text-neutral-500 my-24'>
                  "Notre partenariat avec la MAG nous permet d'atteindre efficacement les acteurs locaux. La qualité des projets incubés et l'impact mesurable sur la communauté font de cette collaboration un succès."
                </p>
                <ul className='flex-align gap-8 mb-16'>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                </ul>
                <h4 className='mb-16 text-lg'>Jean-Luc Martin</h4>
                <span className='text-neutral-500'>Responsable Partenariats - Organisation Internationale</span>
              </div>

              {/* Témoignage Bénéficiaire */}
              <div className='testimonials-three-item bg-white p-24 rounded-12 box-shadow-md'>
                <div className='w-90 h-90 rounded-circle position-relative mb-4'>
                  <img
                    src='assets/images/thumbs/temoignage-beneficiaire.png'
                    alt='Portrait jeune bénéficiaire formation'
                    className='cover-img rounded-circle'
                  />
                  <span className='w-40 h-40 bg-main-two-600 flex-center border border-white border-2 rounded-circle position-absolute inset-block-end-0 inset-inline-end-0 mt--5 me--5'>
                    <img src='assets/images/icons/quote-two-icon.png' alt='citation' />
                  </span>
                </div>
                <p className='text-neutral-500 my-24'>
                  "Grâce au programme d'insertion socioprofessionnelle de la MAG, j'ai pu suivre une formation en développement web et décrocher mon premier emploi. L'ambiance collaborative m'a vraiment motivé !"
                </p>
                <ul className='flex-align gap-8 mb-16'>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                </ul>
                <h4 className='mb-16 text-lg'>Fatou Ndiaye</h4>
                <span className='text-neutral-500'>Bénéficiaire du programme formation</span>
              </div>
            </Slider>
          </div>
          <div className='col-xl-5 ps-xl-5'>
            <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
              <span className='text-main-600 text-2xl d-flex'>
                <i className='ph-bold ph-chats' />
              </span>
              <h5 className='text-main-600 mb-0'>Témoignages</h5>
            </div>
            <h2 className='mb-24 wow bounceInRight'>Ce Que Disent Nos Acteurs</h2>
            <p className='text-neutral-500 text-line-4 wow bounceInUp'>
              Découvrez les expériences et retours de notre communauté dynamique. Associations, entrepreneurs, partenaires et bénéficiaires partagent leur parcours et l'impact de la Maison des Associations sur leurs projets et leur développement.
            </p>
            <div className='flex-align gap-16 mt-40'>
              <button
                type='button'
                id='testimonials-three-prev'
                onClick={() => sliderRef.current.slickPrev()}
                className=' slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48'
                aria-label='Témoignage précédent'
              >
                <i className='ph ph-caret-left' />
              </button>
              <button
                type='button'
                id='testimonials-three-next'
                onClick={() => sliderRef.current.slickNext()}
                className=' slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48'
                aria-label='Témoignage suivant'
              >
                <i className='ph ph-caret-right' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemoignagesMAG;