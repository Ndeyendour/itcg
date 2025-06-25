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
          <div className='row gy-4 justify-content-center'>

            {/* Row 1: 3 éléments */}
            <div className='col-xl-4 col-sm-6' data-aos='fade-up' data-aos-duration={200}>
              <div className='counter-three-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-25 border border-neutral-30'>
                <span className='w-80 h-80 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md mb-24'>
                  <i className='animate__wobble ph ph-calendar-blank' />
                </span>
                <div ref={ref}>
                  <h5 className='display-four mb-16 text-neutral-700 counter'>Âge de l'entreprise</h5>
                </div>
                <span className='text-neutral-500 text-lg'>
                 
                  <small>La durée d'existence et d'exploitation ne doit pas dépasser 10 ans à compter de la date de constitution.</small>
                </span>
              </div>
            </div>

            <div className='col-xl-4 col-sm-6' data-aos='fade-up' data-aos-duration={400}>
              <div className='counter-three-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-two-25 border border-neutral-30'>
                <span className='w-80 h-80 flex-center d-inline-flex bg-white text-main-two-600 text-40 rounded-circle box-shadow-md mb-24'>
                  <i className='animate__wobble ph ph-buildings' />
                </span>
                <div>
                  <h5 className='display-four mb-16 text-neutral-700 counter'>Type de compagnie</h5>
                </div>
                <span className='text-neutral-500 text-lg'>
                  
                  <small>Constituée en société à responsabilité limitée, en société de personnes enregistrée ou en société à responsabilité limitée</small>
                </span>
              </div>
            </div>

            <div className='col-xl-4 col-sm-6' data-aos='fade-up' data-aos-duration={600}>
              <div className='counter-three-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-25 border border-neutral-30'>
                <span className='w-80 h-80 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md mb-24'>
                  <i className='animate__wobble ph ph-currency-inr' />
                </span>
                <div>
                  <h5 className='display-four mb-16 text-neutral-700 counter'>Chiffre d'affaires</h5>
                </div>
                <span className='text-neutral-500 text-lg'>
                  <small>Devrait avoir un chiffre d'affaires annuel ne dépassant pas Rs. 100 crore pour l'un des exercices depuis sa constitution.</small>
                </span>
              </div>
            </div>

            {/* Row 2: 2 éléments centrés */}
            <div className='col-xl-4 col-sm-6' data-aos='fade-up' data-aos-duration={800}>
              <div className='counter-three-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-two-25 border border-neutral-30'>
                <span className='w-80 h-80 flex-center d-inline-flex bg-white text-main-two-600 text-40 rounded-circle box-shadow-md mb-24'>
                  <i className='animate__wobble ph ph-split-horizontal' />
                </span>
                <div>
                  <h5 className='display-four mb-16 text-neutral-700 counter'>Entité d'origine</h5>
                </div>
                <span className='text-neutral-500 text-lg'>
                  <small>Une entité ne doit pas avoir été formée par la scission ou la reconstruction d’une entreprise déjà existante.</small>
                </span>
              </div>
            </div>

            <div className='col-xl-4 col-sm-6' data-aos='fade-up' data-aos-duration={1000}>
              <div className='counter-three-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-25 border border-neutral-30'>
                <span className='w-80 h-80 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md mb-24'>
                  <i className='animate__wobble ph ph-lightbulb' />
                </span>
                <div>
                  <h5 className='display-four mb-16 text-neutral-700 counter'>Innovant et évolutif</h5>
                </div>
                <span className='text-neutral-500 text-lg'>
                  <small>Doit travailler au développement ou à l'amélioration d'un produit, d'un processus ou d'un service et/ou avoir un modèle commercial évolutif avec un fort potentiel de création de richesse et d'emplois.</small>
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
