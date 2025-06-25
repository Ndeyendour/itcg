const InfoSectionOne = () => {
  return (
    <section className='info py-40 bg-main-600'>
      <div className='container'>
        <div className='row gy-4'>
          <div
            className='col-xl-3 col-sm-6'
            data-aos='fade-up'
            data-aos-duration={200}
          >
            <div className='info-item animation-item flex-align gap-20'>
              <span className='w-60 h-60 flex-center bg-white text-main-600 text-28 rounded-circle flex-shrink-0'>
                <i className='animate__heartBeat ph-bold ph-lightbulb' />
              </span>
              <div className='flex-grow-1'>
                <h5 className='mb-8 text-white fw-medium'>
                  Innovation locale
                </h5>
                <span className='text-sm text-white'>
                  Valoriser la technologie, l’art et la culture de Guédiawaye
                </span>
              </div>
            </div>
          </div>

          <div
            className='col-xl-3 col-sm-6'
            data-aos='fade-up'
            data-aos-duration={400}
          >
            <div className='info-item animation-item flex-align gap-20'>
              <span className='w-60 h-60 flex-center bg-white text-main-600 text-28 rounded-circle flex-shrink-0'>
                <i className='animate__heartBeat ph-bold ph-users' />
              </span>
              <div className='flex-grow-1'>
                <h5 className='mb-8 text-white fw-medium'>
                  Accompagnement expert
                </h5>
                <span className='text-sm text-white'>
                  Mentors, formateurs et experts à votre service
                </span>
              </div>
            </div>
          </div>

          <div
            className='col-xl-3 col-sm-6'
            data-aos='fade-up'
            data-aos-duration={600}
          >
            <div className='info-item animation-item flex-align gap-20'>
              <span className='w-60 h-60 flex-center bg-white text-main-600 text-28 rounded-circle flex-shrink-0'>
                <i className='animate__heartBeat ph-bold ph-briefcase' />
              </span>
              <div className='flex-grow-1'>
                <h5 className='mb-8 text-white fw-medium'>Insertion durable</h5>
                <span className='text-sm text-white'>
                  Des programmes concrets pour l’emploi des jeunes
                </span>
              </div>
            </div>
          </div>

          <div
            className='col-xl-3 col-sm-6'
            data-aos='fade-up'
            data-aos-duration={800}
          >
            <div className='info-item animation-item flex-align gap-20'>
              <span className='w-60 h-60 flex-center bg-white text-main-600 text-28 rounded-circle flex-shrink-0'>
                <i className='animate__heartBeat ph-bold ph-certificate' />
              </span>
              <div className='flex-grow-1'>
                <h5 className='mb-8 text-white fw-medium'>
                  Certification reconnue
                </h5>
                <span className='text-sm text-white'>
                  Formations certifiantes avec des partenaires de renom
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSectionOne;
