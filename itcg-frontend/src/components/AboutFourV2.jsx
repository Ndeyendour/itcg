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
                    <i className='animate__heartBeat ph-bold ph-certificate' />
                  </span>
                  <div>
                    <div ref={ref}>
                      {inView && (
                        <h1 className='text-white mb-1 text-2xl counter'>
                          <CountUp end={12} />K
                        </h1>
                      )}
                    </div>
                    <span className='text-white'>Startups reconnues</span>
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
                      <i className='ph-bold ph-book' />
                    </span>
                    <h5 className='text-main-600 mb-0'>
                      Reconnaissance officielle par le itcg
                    </h5>
                  </div>
                  <h2 className='mb-24 wow bounceInRight'>
                    Reconnaissance itcg pour Startups
                  </h2>
                  <p className='text-neutral-500 text-line-2 wow bounceInUp'>
                    Dans le cadre de l'initiative <strong>itcg</strong>, les entreprises innovantes peuvent obtenir une reconnaissance officielle du <strong>itcg</strong> (Department for Promotion of Industry and Internal Trade). Cette reconnaissance donne accès à de nombreux avantages : exonérations fiscales, conformité réglementaire allégée, procédures simplifiées pour les dépôts de propriété intellectuelle (DPI), et opportunités de financement.
                  </p>
                  <p className='text-neutral-500 text-line-2 wow bounceInUp'>
                    L’objectif est d’encourager l’entrepreneuriat en Inde et de faciliter la croissance rapide des startups à fort potentiel. En obtenant cette reconnaissance, vous gagnez en crédibilité et en visibilité auprès d’investisseurs, partenaires et clients.
                  </p>
                </div>
                <div className='pt-40 border-top border-neutral-50 mt-40 border-dashed border-0'>
                  <Link
                    to='/reconnaissance-itcg'
                    className='btn btn-main rounded-pill flex-align d-inline-flex gap-8'
                  >
                    <i className='ph-bold ph-magnifying-glass d-flex text-lg' />
                    En savoir plus
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
