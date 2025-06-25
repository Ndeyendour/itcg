import { Link } from "react-router-dom";

const FeaturesTwo = () => {
  return (
    <section className='features-two half-bg py-120 position-relative overflow-hidden'>
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
        <div className='section-heading style-flex'>
          <div className='section-heading__inner'>
            <h2 className='mb-24 wow bounceInLeft'>
              Catalyser l’innovation à Guédiawaye
            </h2>
          </div>
          <div className='section-heading__content wow bounceInRight'>
            <p className='text-line-2'>
              Accompagner les entrepreneurs dans la tech, l’art et la culture, pour faire de Guédiawaye un pôle d’innovation en Afrique de l’Ouest.
            </p>
            <Link
              to='/programmes'
              className='item-hover__text flex-align d-inline-flex gap-8 text-main-600 mt-24 hover-text-decoration-underline transition-1 fw-semibold'
            >
              Découvrir nos programmes
              <i className='ph ph-arrow-right' />
            </Link>
          </div>
        </div>

        <div className='row gy-4'>
          {/* Incubation Technologique */}
          <div
            className='col-lg-4 col-sm-6 col-xs-6'
            data-aos='fade-up'
            data-aos-duration={200}
          >
            <div className='text-center features-item item-hover animation-item bg-white border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600'>
              <span className='mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle'>
                <img
                  src='assets/images/icons/features-two-icon1.png'
                  className='animate__bounce'
                  alt=''
                />
              </span>
              <h4 className='mb-16 transition-1 item-hover__text'>
                Incubation Tech
              </h4>
              <p className='transition-1 item-hover__text text-line-2'>
                Un programme de 12 mois pour créer des startups technologiques durables avec des mentors expérimentés.
              </p>
              <span className='item-hover__bg w-48 h-1 bg-neutral-500 mt-32' />
            </div>
          </div>

          {/* Valorisation culturelle */}
          <div
            className='col-lg-4 col-sm-6 col-xs-6'
            data-aos='fade-up'
            data-aos-duration={400}
          >
            <div className='text-center features-item item-hover animation-item bg-white border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600'>
              <span className='mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle'>
                <img
                  src='assets/images/icons/features-two-icon2.png'
                  className='animate__bounce'
                  alt=''
                />
              </span>
              <h4 className='mb-16 transition-1 item-hover__text'>
                Culture & Création
              </h4>
              <p className='transition-1 item-hover__text text-line-2'>
                Soutien aux artistes et porteurs de projets culturels : espaces de création, gestion et marketing digital.
              </p>
              <span className='item-hover__bg w-48 h-1 bg-neutral-500 mt-32' />
            </div>
          </div>

          {/* Formation et insertion */}
          <div
            className='col-lg-4 col-sm-6 col-xs-6'
            data-aos='fade-up'
            data-aos-duration={600}
          >
            <div className='text-center features-item item-hover animation-item bg-white border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600'>
              <span className='mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle'>
                <img
                  src='assets/images/icons/features-two-icon3.png'
                  className='animate__bounce'
                  alt=''
                />
              </span>
              <h4 className='mb-16 transition-1 item-hover__text'>
                Formation & Insertion
              </h4>
              <p className='transition-1 item-hover__text text-line-2'>
                Des formations pratiques et certifiantes pour l’autonomie, l’emploi ou l’entrepreneuriat à Guédiawaye.
              </p>
              <span className='item-hover__bg w-48 h-1 bg-neutral-500 mt-32' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTwo;
