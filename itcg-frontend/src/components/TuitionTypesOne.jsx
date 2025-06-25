import { Link } from "react-router-dom";

const TuitionTypesOne = () => {
  return (
    <section className='tuition-types py-120 position-relative z-1 mash-bg-main mash-main-style-two mash-bg-main-two mash-two-style-two overflow-hidden'>
      <div className='container'>
        <div className='section-heading text-center'>
          <div className='flex-align d-inline-flex gap-8 mb-16'>
            <span className='text-main-600 text-2xl d-flex'>
              <i className='ph-bold ph-book-open' />
            </span>
            <h5 className='text-main-600 mb-0'>Financement</h5>
          </div>
          <h2 className='mb-24'>Programmes de Financement ITCG</h2>
          <p>
            Explorez les opportunités offertes par l'ITCG pour soutenir le développement de votre startup à chaque étape de sa croissance.
          </p>
        </div>

        <div className='row gy-4'>
          {/* Item 1 */}
          <div className='col-xl-3 col-lg-4 col-sm-6 col-xs-6 wow bounceIn'>
            <div className='tuition-types-item animation-item h-100 text-center px-16 py-60 rounded-12 bg-white box-shadow-md transition-2 item-hover hover-bg-main-600'>
              <span className='w-96 h-96 flex-center d-inline-flex bg-main-25 text-main-600 text-40 rounded-circle item-hover__bg'>
                <span className='animate__wobble'>
                  <i className='ph ph-house-line' />
                </span>
              </span>
              <h4 className='display-four mb-0 mt-32 text-neutral-700 item-hover__text transition-2'>
                Fonds d’Amorçage
              </h4>
              <Link
                to='/financement'
                className='d-inline-block mt-16 text-main-600 fw-semibold hover-underline'
              >
                En savoir plus <i className='ti-arrow-right ms-1'></i>
              </Link>
            </div>
          </div>

          {/* Item 2 */}
          <div className='col-xl-3 col-lg-4 col-sm-6 col-xs-6 wow bounceIn'>
            <div className='tuition-types-item animation-item h-100 text-center px-16 py-60 rounded-12 bg-white box-shadow-md transition-2 item-hover hover-bg-main-600'>
              <span className='w-96 h-96 flex-center d-inline-flex bg-main-two-25 text-main-two-600 text-40 rounded-circle item-hover__bg'>
                <span className='animate__wobble'>
                  <i className='ph ph-wifi-high' />
                </span>
              </span>
              <h4 className='display-four mb-0 mt-32 text-neutral-700 item-hover__text transition-2'>
                Guide du Financement
              </h4>
              <Link
                to='/guide-financement'
                className='d-inline-block mt-16 text-main-600 fw-semibold hover-underline'
              >
                En savoir plus <i className='ti-arrow-right ms-1'></i>
              </Link>
            </div>
          </div>

          {/* Item 3 */}
          <div className='col-xl-3 col-lg-4 col-sm-6 col-xs-6 wow bounceIn'>
            <div className='tuition-types-item animation-item h-100 text-center px-16 py-60 rounded-12 bg-white box-shadow-md transition-2 item-hover hover-bg-main-600'>
              <span className='w-96 h-96 flex-center d-inline-flex bg-main-three-25 text-main-three-600 text-40 rounded-circle item-hover__bg'>
                <span className='animate__wobble'>
                  <i className='ph ph-users' />
                </span>
              </span>
              <h4 className='display-four mb-0 mt-32 text-neutral-700 item-hover__text transition-2'>
                Connect Investisseurs
              </h4>
              <Link
                to='/connect-investisseurs'
                className='d-inline-block mt-16 text-main-600 fw-semibold hover-underline'
              >
                En savoir plus <i className='ti-arrow-right ms-1'></i>
              </Link>
            </div>
          </div>

          {/* Item 4 */}
          <div className='col-xl-3 col-lg-4 col-sm-6 col-xs-6 wow bounceIn'>
            <div className='tuition-types-item animation-item h-100 text-center px-16 py-60 rounded-12 bg-white box-shadow-md transition-2 item-hover hover-bg-main-600'>
              <span className='w-96 h-96 flex-center d-inline-flex bg-main-two-25 text-main-two-600 text-40 rounded-circle item-hover__bg'>
                <span className='animate__wobble'>
                  <i className='ph ph-users-three' />
                </span>
              </span>
              <h4 className='display-four mb-0 mt-32 text-neutral-700 item-hover__text transition-2'>
                Fonds ITCG d’Investissement
              </h4>
              <Link
                to='/fonds-investissement'
                className='d-inline-block mt-16 text-main-600 fw-semibold hover-underline'
              >
                En savoir plus <i className='ti-arrow-right ms-1'></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TuitionTypesOne;
