import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const AboutFourV2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className='about-four py-120 position-relative z-1 overflow-hidden'>
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape one animation-scalation'
      />
      <div className='position-relative'>
        <div className='container'>
          <div className='row gy-xl-0 gy-5 flex-wrap-reverse align-items-center'>
            <div className='col-xl-6 pe-xl-5'>
              <div className='about-two__thumb position-relative pe-0 me-xl-5'>
                <img
                  src='assets/images/thumbs/about-four-img.png'
                  className='rounded-16 cover-img'
                  alt=''
                  data-tilt=''
                  data-tilt-max={6}
                  data-tilt-speed={500}
                  data-tilt-perspective={5000}
                  data-tilt-transition='1s'
                  data-tilt-full-page-listening=''
                />
                <div className='offer-message animation-item style-two px-24 py-12 inset-inline-end--64 rounded-6 border border-white bg-success-600 fw-medium flex-align d-inline-flex gap-16 box-shadow-lg animation-upDown'>
                  <span className='flex-shrink-0 w-48 h-48 bg-white text-success-600 text-2xl flex-center rounded-circle'>
                    <i className='animate__heartBeat ph-bold ph-users' />
                  </span>
                  <div>
                    <div ref={ref}>
                      {inView && (
                        <h1 className='text-white mb-1 text-2xl counter'>
                          <CountUp end={150} />+
                        </h1>
                      )}
                    </div>
                    <span className='text-white'>Associations accompagnées</span>
                  </div>
                </div>
                <div
                  className='d-sm-flex d-none position-absolute inset-block-end-0 inset-inline-start-0 me-lg-0 ms--150px px-24 py-12 rounded-12 bg-white fw-medium flex-align d-inline-flex gap-16 box-shadow-lg'
                  data-tilt=''
                  data-tilt-max={8}
                  data-tilt-speed={500}
                  data-tilt-perspective={5000}
                  data-tilt-transition='1s'
                  data-tilt-scale='1.04'
                >
                  <div className='text-center'>
                    <img
                      src='assets/images/thumbs/about-four-short-img.png'
                      className='mb-24'
                      alt=''
                    />
                    <div className='mt-24'>
                      <img
                        src='assets/images/shapes/excellator-shape.png'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='about-two-content'>
                <div className='mb-40'>
                  <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
                    <span className='text-main-600 text-2xl d-flex'>
                      <i className='ph-bold ph-buildings' />
                    </span>
                    <h5 className='text-main-600 mb-0'>
                      Centre d'innovation communautaire
                    </h5>
                  </div>
                  <h2 className='mb-24 wow bounceInRight'>
                    La Maison des Associations de Guédiawaye
                  </h2>
                  <p className='text-neutral-500 text-line-2 wow bounceInUp'>
                    La <strong>Maison des Associations de Guédiawaye (MAG)</strong> est un espace collaboratif dédié au développement du tissu associatif et entrepreneurial local. Nous offrons un cadre professionnel et des ressources adaptées pour accompagner la croissance des initiatives citoyennes.
                  </p>
                  <p className='text-neutral-500 text-line-2 wow bounceInUp'>
                    Notre mission est de <strong>soutenir, accompagner et valoriser</strong> les associations, entrepreneurs et porteurs de projets du territoire. À travers nos programmes d'incubation, formations et espaces de travail partagés, nous favorisons l'émergence de solutions innovantes pour le développement économique et social de Guédiawaye.
                  </p>
                </div>
                <div className='row gy-4 mt-40'>
                  <div className='col-sm-6'>
                    <div className='flex-align gap-16'>
                      <span className='w-60 h-60 bg-main-50 text-main-600 text-2xl flex-center rounded-circle flex-shrink-0'>
                        <i className='ph-bold ph-rocket-launch' />
                      </span>
                      <div>
                        <div ref={ref}>
                          {inView && (
                            <h3 className='mb-1 text-2xl counter'>
                              <CountUp end={45} />+
                            </h3>
                          )}
                        </div>
                        <span className='text-neutral-500'>Startups incubées</span>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='flex-align gap-16'>
                      <span className='w-60 h-60 bg-main-50 text-main-600 text-2xl flex-center rounded-circle flex-shrink-0'>
                        <i className='ph-bold ph-graduation-cap' />
                      </span>
                      <div>
                        <div ref={ref}>
                          {inView && (
                            <h3 className='mb-1 text-2xl counter'>
                              <CountUp end={300} />+
                            </h3>
                          )}
                        </div>
                        <span className='text-neutral-500'>Personnes formées</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='pt-40 border-top border-neutral-50 mt-40 border-dashed border-0'>
                  <Link
                    to='/a-propos'
                    className='btn btn-main rounded-pill flex-align d-inline-flex gap-8'
                  >
                    <i className='ph-bold ph-info d-flex text-lg' />
                    Découvrir nos activités
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

export default AboutFourV2;