import { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const CategoryOne = () => {
  const sliderRef = useRef(null);
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 900,
    dots: false,
    pauseOnHover: true,
    arrows: false,
    draggable: true,
    responsive: [
      { breakpoint: 1199, settings: { slidesToShow: 3, arrows: false } },
      { breakpoint: 767, settings: { slidesToShow: 2, arrows: false } },
      { breakpoint: 575, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  return (
    <section className='category py-120 position-relative z-1 mash-bg-main mash-bg-main-two mash-reverse'>
      <div className='container'>

        {/* Section Heading */}
        <div className='section-heading text-center'>
          <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
            <span className='text-main-600 text-2xl d-flex'>
              <i className='ph-bold ph-hand-heart' />
            </span>
            <h5 className='text-main-600 mb-0'>Services & Accompagnement</h5>
          </div>

          <h2 className='mb-24 wow bounceIn'>
            Découvrez les services de la Maison des Associations de Guédiawaye
          </h2>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings} className='category-item-slider'>

          {/* ÉLÉMENT 1 : Accompagnement des associations */}
          <div
            className='category-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-25 border border-neutral-30 hover-border-main-600 transition-2'
            data-aos='fade-up'
            data-aos-duration={200}
          >
            <span className='w-96 h-96 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md mb-24'>
              <img src='assets/images/icons/category-icon1.png' alt='' />
            </span>
            <h4 className='display-four mb-16 text-neutral-700'>
              Accompagnement Associatif
            </h4>
            <p className='text-neutral-500 text-lg text-line-2'>
              Formations, coaching, appui à la gestion, structuration
              et renforcement de capacités pour les organisations locales.
            </p>
            <Link
              to='/accompagnement'
              className='py-12 px-24 bg-white rounded-8 border border-neutral-30 mt-28 fw-semibold text-main-600 hover-bg-main-600 hover-text-white'
            >
              En savoir plus
            </Link>
          </div>

          {/* ÉLÉMENT 2 : Incubation / Entrepreneuriat */}
          <div
            className='category-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-two-25 border border-neutral-30 hover-border-main-two-600 transition-2'
            data-aos='fade-up'
            data-aos-duration={400}
          >
            <span className='w-96 h-96 flex-center d-inline-flex bg-white text-main-two-600 text-40 rounded-circle box-shadow-md mb-24'>
              <img src='assets/images/icons/category-icon2.png' alt='' />
            </span>
            <h4 className='display-four mb-16 text-neutral-700'>
              Incubateur & Startups Locales
            </h4>
            <p className='text-neutral-500 text-lg text-line-2'>
              Programme d’incubation, mentorat, ateliers pratiques
              et soutien aux jeunes entrepreneurs du territoire.
            </p>
            <Link
              to='/incubation'
              className='py-12 px-24 bg-white rounded-8 border border-neutral-30 mt-28 fw-semibold text-main-two-600 hover-bg-main-two-600 hover-text-white'
            >
              Rejoindre
            </Link>
          </div>

          {/* ÉLÉMENT 3 : Expression des besoins */}
          <div
            className='category-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-three-25 border border-neutral-30 hover-border-main-three-600 transition-2'
            data-aos='fade-up'
            data-aos-duration={600}
          >
            <span className='w-96 h-96 flex-center d-inline-flex bg-white text-main-three-600 text-40 rounded-circle box-shadow-md mb-24'>
              <img src='assets/images/icons/category-icon3.png' alt='' />
            </span>
            <h4 className='display-four mb-16 text-neutral-700'>
              Expression des Besoins
            </h4>
            <p className='text-neutral-500 text-lg text-line-2'>
              Soumettez vos besoins en formation, appui technique
              ou accompagnement via notre formulaire en ligne.
            </p>
            <Link
              to='/besoins'
              className='py-12 px-24 bg-white rounded-8 border border-neutral-30 mt-28 fw-semibold text-main-three-600 hover-bg-main-three-600 hover-text-white'
            >
              Soumettre
            </Link>
          </div>

          {/* ÉLÉMENT 4 : Événements & Conférences */}
          <div
            className='category-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-two-25 border border-neutral-30 hover-border-main-two-600 transition-2'
            data-aos='fade-up'
            data-aos-duration={800}
          >
            <span className='w-96 h-96 flex-center d-inline-flex bg-white text-main-two-600 text-40 rounded-circle box-shadow-md mb-24'>
              <img src='assets/images/icons/category-icon4.png' alt='' />
            </span>
            <h4 className='display-four mb-16 text-neutral-700'>
              Conférences & Ateliers
            </h4>
            <p className='text-neutral-500 text-lg text-line-2'>
              Participez aux conférences du samedi, tables rondes,
              masterclass et initiatives citoyennes.
            </p>
            <Link
              to='/evenements'
              className='py-12 px-24 bg-white rounded-8 border border-neutral-30 mt-28 fw-semibold text-main-two-600 hover-bg-main-two-600 hover-text-white'
            >
              Voir les événements
            </Link>
          </div>

          {/* ÉLÉMENT 5 : Coworking */}
          <div
            className='category-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-three-25 border border-neutral-30 hover-border-main-three-600 transition-2'
            data-aos='fade-up'
            data-aos-duration={400}
          >
            <span className='w-96 h-96 flex-center d-inline-flex bg-white text-main-three-600 text-40 rounded-circle box-shadow-md mb-24'>
              <img src='assets/images/icons/category-icon3.png' alt='' />
            </span>
            <h4 className='display-four mb-16 text-neutral-700'>
              Espace Coworking
            </h4>
            <p className='text-neutral-500 text-lg text-line-2'>
              Espaces modernes, collaboratifs, équipés pour associations,
              entrepreneurs et créatifs.
            </p>
            <Link
              to='/coworking'
              className='py-12 px-24 bg-white rounded-8 border border-neutral-30 mt-28 fw-semibold text-main-three-600 hover-bg-main-three-600 hover-text-white'
            >
              Réserver
            </Link>
          </div>

          {/* ÉLÉMENT 6 : Insertion & Formation */}
          <div
            className='category-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-two-25 border border-neutral-30 hover-border-main-two-600 transition-2'
            data-aos='fade-up'
            data-aos-duration={600}
          >
            <span className='w-96 h-96 flex-center d-inline-flex bg-white text-main-two-600 text-40 rounded-circle box-shadow-md mb-24'>
              <img src='assets/images/icons/category-icon2.png' alt='' />
            </span>
            <h4 className='display-four mb-16 text-neutral-700'>
              Insertion & Formations
            </h4>
            <p className='text-neutral-500 text-lg text-line-2'>
              Programmes d’insertion, stages, formations pratiques
              et appui à l’emploi des jeunes.
            </p>
            <Link
              to='/formations'
              className='py-12 px-24 bg-white rounded-8 border border-neutral-30 mt-28 fw-semibold text-main-two-600 hover-bg-main-two-600 hover-text-white'
            >
              Découvrir
            </Link>
          </div>

        </Slider>

        {/* ARROWS */}
        <div className='flex-align gap-16 mt-40 justify-content-center'>
          <button
            type='button'
            onClick={() => sliderRef.current.slickPrev()}
            className='slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white w-48 h-48'
          >
            <i className='ph ph-caret-left' />
          </button>

          <button
            type='button'
            onClick={() => sliderRef.current.slickNext()}
            className='slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white w-48 h-48'
          >
            <i className='ph ph-caret-right' />
          </button>
        </div>

      </div>
    </section>
  );
};

export default CategoryOne;
