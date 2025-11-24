import { Link } from "react-router-dom";

const FooterThree = () => {
  return (
    <footer className='footer bg-neutral-900 position-relative z-1'>
      <img src='assets/images/shapes/shape2.png' alt='' className='shape five animation-scalation' />
      <img src='assets/images/shapes/shape6.png' alt='' className='shape one animation-scalation' />

      <div className='py-120'>
        <div className='container container-two'>
          <div className='row gy-5'>

            {/* Liens rapides */}
            <div className='col-lg-3 col-sm-6' data-aos='fade-up' data-aos-duration={400}>
              <div className='footer-item'>
                <h4 className='footer-item__title fw-medium text-white mb-32'>Navigation</h4>
                <ul className='footer-menu'>
                  <li className='mb-16'><Link to='/about' className='text-white hover-text-main-600 hover-text-decoration-underline'>À propos</Link></li>
                  <li className='mb-16'><Link to='/programmes' className='text-white hover-text-main-600 hover-text-decoration-underline'>Programmes</Link></li>
                  <li className='mb-16'><Link to='/equipe' className='text-white hover-text-main-600 hover-text-decoration-underline'>Notre équipe</Link></li>
                  <li className='mb-16'><Link to='/faq' className='text-white hover-text-main-600 hover-text-decoration-underline'>FAQ</Link></li>
                  <li className='mb-0'><Link to='/actualites' className='text-white hover-text-main-600 hover-text-decoration-underline'>Actualités</Link></li>
                </ul>
              </div>
            </div>

            {/* Catégories */}
            <div className='col-lg-3 col-sm-6' data-aos='fade-up' data-aos-duration={600}>
              <div className='footer-item'>
                <h4 className='footer-item__title fw-medium text-white mb-32'>Formations</h4>
                <ul className='footer-menu'>
                  <li className='mb-16'><Link to='/programmes/design-graphique' className='text-white hover-text-main-600 hover-text-decoration-underline'>Design graphique</Link></li>
                  <li className='mb-16'><Link to='/programmes/developpement-web' className='text-white hover-text-main-600 hover-text-decoration-underline'>Développement web</Link></li>
                  <li className='mb-16'><Link to='/programmes/audiovisuel' className='text-white hover-text-main-600 hover-text-decoration-underline'>Audiovisuel</Link></li>
                  <li className='mb-16'><Link to='/programmes/entrepreneuriat' className='text-white hover-text-main-600 hover-text-decoration-underline'>Entrepreneuriat culturel</Link></li>
                  <li className='mb-0'><Link to='/programmes/inclusion-numerique' className='text-white hover-text-main-600 hover-text-decoration-underline'>Inclusion numérique</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className='col-lg-3 col-sm-6' data-aos='fade-up' data-aos-duration={800}>
              <div className='footer-item'>
                <h4 className='footer-item__title fw-medium text-white mb-32'>Contact</h4>

                <div className='flex-align gap-20 mb-24'>
                  <span className='icon d-flex text-32 text-main-600'><i className='ph ph-phone' /></span>
                  <div>
                    <a href='tel:+221771234567' className='text-white d-block hover-text-main-600 mb-4'>+221 77 123 45 67</a>
                    <a href='tel:+221763456789' className='text-white d-block hover-text-main-600'>+221 76 345 67 89</a>
                  </div>
                </div>

                <div className='flex-align gap-20 mb-24'>
                  <span className='icon d-flex text-32 text-main-600'><i className='ph ph-envelope-open' /></span>
                  <div>
                    <a href='mailto:contact@maison-des-assos.sn' className='text-white d-block hover-text-main-600 mb-4'>contact@maison-des-assos.sn</a>
                    <a href='mailto:info@maison-des-assos.sn' className='text-white d-block hover-text-main-600'>info@maison-des-assos.sn</a>
                  </div>
                </div>

                <div className='flex-align gap-20'>
                  <span className='icon d-flex text-32 text-main-600'><i className='ph ph-map-trifold' /></span>
                  <div>
                    <span className='text-white d-block mb-4'>Dakar, Sénégal</span>
                    <span className='text-white d-block'>Maison des Associations - Centre de Formation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className='col-lg-3 col-sm-6' data-aos='fade-up' data-aos-duration={1000}>
              <div className='footer-item'>
                <h4 className='footer-item__title fw-medium text-white mb-32'>Newsletter</h4>
                <p className='text-white'>Inscrivez-vous pour recevoir les actualités de nos programmes et ateliers</p>
                <form action='#' className='mt-24 position-relative'>
                  <input
                    type='email'
                    className='form-control bg-neutral-700 placeholder-white shadow-none border border-neutral-700 text-white rounded-pill h-52 ps-24 pe-48 focus-border-main-600'
                    placeholder='Votre e-mail...'
                  />
                  <button
                    type='submit'
                    className='w-36 h-36 flex-center rounded-circle bg-main-600 text-white hover-bg-main-800 position-absolute top-50 translate-middle-y inset-inline-end-0 me-8'
                  >
                    <i className='ph ph-paper-plane-tilt' />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className='container'>
        <div className='bottom-footer border-top border-dashed border-neutral-600 py-32'>
          <div className='container container-two'>
            <div className='bottom-footer__inner flex-between gap-16 flex-wrap'>

              <div className='footer-item__logo mb-0' data-aos='zoom-in-right'>
                <Link to='/'>
                  <img src='assets/images/logo/logo-maison-des-assos-white.png' alt='Logo Maison des Associations' />
                </Link>
              </div>

              <p className='text-white text-line-1 fw-normal' data-aos='zoom-in'>
                © {new Date().getFullYear()} <span className='fw-semibold'>Maison des Associations de Dakar</span>. Tous droits réservés.
              </p>

              <ul className='social-list flex-align gap-24' data-aos='zoom-in-left'>
                <li className='social-list__item'>
                  <a href='https://facebook.com/maison-des-assos' target='_blank' rel='noopener noreferrer' className='text-white text-2xl hover-text-main-two-600'>
                    <i className='ph-bold ph-facebook-logo' />
                  </a>
                </li>
                <li className='social-list__item'>
                  <a href='https://instagram.com/maison-des-assos' target='_blank' rel='noopener noreferrer' className='text-white text-2xl hover-text-main-two-600'>
                    <i className='ph-bold ph-instagram-logo' />
                  </a>
                </li>
                <li className='social-list__item'>
                  <a href='https://www.linkedin.com/company/maison-des-assos' target='_blank' rel='noopener noreferrer' className='text-white text-2xl hover-text-main-two-600'>
                    <i className='ph-bold ph-linkedin-logo' />
                  </a>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
