import { useRef } from "react";
import Slider from "react-slick";

const TestimonialsTwo = () => {
  const sliderRef = useRef(null);

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    speed: 900,
    dots: false,
    pauseOnHover: true,
    arrows: false,
    draggable: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className='testimonials-two py-120 position-relative z-1'>
      <div className='container'>
        <div className='section-heading text-center'>
          <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
            <span className='text-main-600 text-2xl d-flex'>
              <i className='ph-bold ph-book' />
            </span>
            <h5 className='text-main-600 mb-0'>
              Témoignages de nos jeunes talents
            </h5>
          </div>
          <h2 className='mb-24 wow bounceIn'>
            Ce que disent les apprenant·e·s de l’ITCG
          </h2>
          <p className=' wow bounceInUp'>
            Grâce à l’ITCG, de nombreux jeunes découvrent, apprennent et se
            projettent dans des carrières culturelles ou numériques prometteuses.
          </p>
        </div>

        <Slider ref={sliderRef} {...settings} className='testimonials-two-slider'>

          {/* Témoignage 1 */}
          <div className='testimonials-two-item bg-main-25 rounded-12 p-32' data-aos='fade-up' data-aos-duration={400}>
            <ul className='flex-align gap-8 mb-16'>
              {[...Array(5)].map((_, i) => (
                <li key={i} className='text-warning-600 text-xl d-flex'>
                  <i className='ph-fill ph-star' />
                </li>
              ))}
            </ul>
            <p className='text-neutral-700 text-xl'>
              « Avant l’ITCG, je n’avais jamais touché à un ordinateur. Aujourd’hui,
              je crée des affiches pour les événements culturels de mon quartier. »
            </p>
            <div className='flex-between gap-24 flex-wrap pt-28 mt-28 border-top border-neutral-50 border-dashed border-0'>
              <div className='flex-align gap-24 '>
                <img
                  src='assets/images/thumbs/testi-img1.png'
                  alt=''
                  className='w-60 h-60 object-fit-cover rounded-circle'
                />
                <div>
                  <h5 className='mb-8 fw-medium'>Fatou N.</h5>
                  <span className='text-neutral-700'>Graphiste junior</span>
                </div>
              </div>
              <span className='quate text-48 d-flex opacity-25'>
                <img src='assets/images/icons/quote-icon.png' alt='' />
              </span>
            </div>
          </div>

          {/* Témoignage 2 */}
          <div className='testimonials-two-item bg-main-25 rounded-12 p-32' data-aos='fade-up' data-aos-duration={600}>
            <ul className='flex-align gap-8 mb-16'>
              {[...Array(4)].map((_, i) => (
                <li key={i} className='text-warning-600 text-xl d-flex'>
                  <i className='ph-fill ph-star' />
                </li>
              ))}
              <li className='text-warning-600 text-xl d-flex'>
                <i className='ph-fill ph-star-half' />
              </li>
            </ul>
            <p className='text-neutral-700 text-xl'>
              « Les formations à l’ITCG m’ont permis de découvrir le montage
              vidéo. J’ai même lancé ma première chaîne YouTube culturelle ! »
            </p>
            <div className='flex-between gap-24 flex-wrap pt-28 mt-28 border-top border-neutral-50 border-dashed border-0'>
              <div className='flex-align gap-24 '>
                <img
                  src='assets/images/thumbs/testi-img2.png'
                  alt=''
                  className='w-60 h-60 object-fit-cover rounded-circle'
                />
                <div>
                  <h5 className='mb-8 fw-medium'>Moussa D.</h5>
                  <span className='text-neutral-700'>Monteur vidéo</span>
                </div>
              </div>
              <span className='quate text-48 d-flex opacity-25'>
                <img src='assets/images/icons/quote-icon.png' alt='' />
              </span>
            </div>
          </div>

          {/* Témoignage 3 */}
          <div className='testimonials-two-item bg-main-25 rounded-12 p-32' data-aos='fade-up' data-aos-duration={800}>
            <ul className='flex-align gap-8 mb-16'>
              {[...Array(5)].map((_, i) => (
                <li key={i} className='text-warning-600 text-xl d-flex'>
                  <i className='ph-fill ph-star' />
                </li>
              ))}
            </ul>
            <p className='text-neutral-700 text-xl'>
              « Grâce à l’ITCG, j’ai découvert l’entrepreneuriat culturel. Aujourd’hui, je
              développe un projet pour valoriser les artistes de Guédiawaye. »
            </p>
            <div className='flex-between gap-24 flex-wrap pt-28 mt-28 border-top border-neutral-50 border-dashed border-0'>
              <div className='flex-align gap-24 '>
                <img
                  src='assets/images/thumbs/user-two-img3.png'
                  alt=''
                  className='w-60 h-60 object-fit-cover rounded-circle'
                />
                <div>
                  <h5 className='mb-8 fw-medium'>Awa S.</h5>
                  <span className='text-neutral-700'>Entrepreneure culturelle</span>
                </div>
              </div>
              <span className='quate text-48 d-flex opacity-25'>
                <img src='assets/images/icons/quote-icon.png' alt='' />
              </span>
            </div>
          </div>
        </Slider>

        <div className='flex-center gap-16 mt-40'>
          <button
            type='button'
            onClick={() => sliderRef.current.slickPrev()}
            className='slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48'
          >
            <i className='ph ph-caret-left' />
          </button>
          <button
            type='button'
            onClick={() => sliderRef.current.slickNext()}
            className='slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48'
          >
            <i className='ph ph-caret-right' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsTwo;
