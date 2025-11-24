import { useInView } from "react-intersection-observer";

const CounterThreeV2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className='counter-three py-120 bg-main-25'>
      <div className='container'>
        <div className='p-16 rounded-16 bg-white'>
           <div className='text-center mb-40'>
        <h3 className='text-neutral-700 mb-16'>La MAG en Chiffres</h3>
        <p className='text-neutral-500'>Quelques indicateurs de notre action sur le territoire</p>
      </div>
          <div className='row gy-4 justify-content-center'>

            {/* Row 1: 3 éléments */}
            <div className='col-xl-4 col-sm-6' data-aos='fade-up' data-aos-duration={200}>
              <div className='counter-three-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-25 border border-neutral-30'>
                <span className='w-80 h-80 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md mb-24'>
                  <i className='animate__wobble ph ph-users' />
                </span>
                <div ref={ref}>
                  <h3 className='display-four mb-16 text-neutral-700 counter'>150+ Associations</h3>
                </div>
                <span className='text-neutral-500 text-lg'>
                  <small>Accompagnées dans leur développement et renforcement de capacités depuis notre création.</small>
                </span>
              </div>
            </div>

            <div className='col-xl-4 col-sm-6' data-aos='fade-up' data-aos-duration={400}>
              <div className='counter-three-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-two-25 border border-neutral-30'>
                <span className='w-80 h-80 flex-center d-inline-flex bg-white text-main-two-600 text-40 rounded-circle box-shadow-md mb-24'>
                  <i className='animate__wobble ph ph-rocket-launch' />
                </span>
                <div>
                  <h3 className='display-four mb-16 text-neutral-700 counter'>45+ Startups</h3>
                </div>
                <span className='text-neutral-500 text-lg'>
                  <small>Incubées dans notre programme Tech & Art, créant de l'innovation locale et des emplois.</small>
                </span>
              </div>
            </div>

            <div className='col-xl-4 col-sm-6' data-aos='fade-up' data-aos-duration={600}>
              <div className='counter-three-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-25 border border-neutral-30'>
                <span className='w-80 h-80 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md mb-24'>
                  <i className='animate__wobble ph ph-graduation-cap' />
                </span>
                <div>
                  <h3 className='display-four mb-16 text-neutral-700 counter'>300+ Formés</h3>
                </div>
                <span className='text-neutral-500 text-lg'>
                  <small>Personnes formées dans nos ateliers et programmes de renforcement de capacités professionnelles.</small>
                </span>
              </div>
            </div>

            {/* Row 2: 2 éléments centrés */}
            <div className='col-xl-4 col-sm-6' data-aos='fade-up' data-aos-duration={800}>
              <div className='counter-three-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-two-25 border border-neutral-30'>
                <span className='w-80 h-80 flex-center d-inline-flex bg-white text-main-two-600 text-40 rounded-circle box-shadow-md mb-24'>
                  <i className='animate__wobble ph ph-handshake' />
                </span>
                <div>
                  <h3 className='display-four mb-16 text-neutral-700 counter'>25 Partenaires</h3>
                </div>
                <span className='text-neutral-500 text-lg'>
                  <small>Institutionnels et techniques qui soutiennent nos actions et programmes d'accompagnement.</small>
                </span>
              </div>
            </div>

            <div className='col-xl-4 col-sm-6' data-aos='fade-up' data-aos-duration={1000}>
              <div className='counter-three-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-25 border border-neutral-30'>
                <span className='w-80 h-80 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md mb-24'>
                  <i className='animate__wobble ph ph-calendar-check' />
                </span>
                <div>
                  <h3 className='display-four mb-16 text-neutral-700 counter'>50+ Événements</h3>
                </div>
                <span className='text-neutral-500 text-lg'>
                  <small>Organisés chaque année : conférences, ateliers, forums et rencontres professionnelles.</small>
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterThreeV2;