import { Link } from "react-router-dom";

const CertificateOne = () => {
  return (
    <div className='certificate'>
      <div className='container container--lg'>
        <div className='certificate-box px-16 bg-main-600 rounded-16'>
          <div className='container'>
            <div className='position-relative py-80'>
              <div className='row align-items-center'>
                <div className='col-xl-6'>
                  <div className='certificate__content'>
                    <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                      <span className='w-8 h-8 bg-white rounded-circle' />
                      <h5 className='text-white mb-0'>Obtenez votre certificat</h5>
                    </div>
                    <h2 className='text-white mb-40 fw-medium wow bounceIn'>
                      Obtenez votre certificat d'engagement solidaire avec la Maison des Associations
                    </h2>
                    <Link
                      to='/certificate-application'
                      className='btn btn-white rounded-pill flex-align d-inline-flex gap-8 hover-bg-main-800 wow bounceInUp'
                    >
                      Commencez maintenant
                      <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                    </Link>
                  </div>
                </div>
                <div className='col-xl-6 d-xl-block d-none'>
                  <div className='certificate__thumb' data-aos='fade-up-left'>
                    <img
                      src='assets/images/thumbs/maison-association-certificat.png'
                      alt='Certificat engagement solidaire'
                      data-tilt=''
                      data-tilt-max={8}
                      data-tilt-speed={500}
                      data-tilt-perspective={5000}
                      data-tilt-full-page-listening=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateOne;
