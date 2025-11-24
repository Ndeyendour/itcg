const FaqOne = () => {
  return (
    <section className='faq py-120 position-relative'>
      <div className='container'>
        <div className='row gy-4 align-items-center'>

          {/* IMAGE */}
          <div className='col-lg-6 d-lg-block d-none'>
            <div className='faq-thumb'>
              <img
                src='assets/images/thumbs/faq-img.png'
                alt='Maison des Associations de Guédiawaye'
                data-tilt=''
                data-tilt-max={6}
                data-tilt-speed={500}
                data-tilt-perspective={5000}
                data-tilt-full-page-listening=''
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className='col-lg-6'>
            <div className='faq-content'>

              {/* HEADING */}
              <div className='mb-40'>
                <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
                  <span className='text-main-600 text-2xl d-flex'>
                    <i className='ph-bold ph-lightbulb' />
                  </span>
                  <h5 className='text-main-600 mb-0'>
                    Initiatives Clés de la MAG
                  </h5>
                </div>

                <h2 className='mb-24 wow bounceIn'>
                  Renforcer les associations, encourager l’innovation et soutenir les initiatives locales
                </h2>

                <p className='text-neutral-500 text-line-2 wow bounceInUp'>
                  La Maison des Associations de Guédiawaye met en place plusieurs actions
                  pour accompagner les organisations communautaires, les jeunes entrepreneurs
                  et les porteurs de projets dans leur développement.
                </p>
              </div>

              {/* ACCORDION */}
              <div className='accordion common-accordion' id='accordionExample'>

                {/* ITEM 1 */}
                <div className='accordion-item' data-aos='fade-up-left' data-aos-duration={400}>
                  <h2 className='accordion-header'>
                    <button
                      className='accordion-button'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                      Renforcement des capacités associatives
                    </button>
                  </h2>

                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='accordion-body__desc'>
                        Formations, ateliers, coaching organisationnel et appui à la gestion
                        pour aider les associations à se structurer et à améliorer leur impact.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ITEM 2 */}
                <div className='accordion-item' data-aos='fade-up-left' data-aos-duration={600}>
                  <h2 className='accordion-header'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                      Accompagnement à l’entrepreneuriat & incubation
                    </button>
                  </h2>

                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='accordion-body__desc'>
                        Mise en place d'un incubateur Tech & Art, mentorat, conseils techniques,
                        et soutien à la création de startups locales innovantes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ITEM 3 */}
                <div className='accordion-item' data-aos='fade-up-left' data-aos-duration={800}>
                  <h2 className='accordion-header'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      Expression des besoins des organisations
                    </button>
                  </h2>

                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='accordion-body__desc'>
                        Un formulaire en ligne permet aux associations de partager leurs besoins
                        en formation, accompagnement, matériel ou partenariat.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ITEM 4 */}
                <div className='accordion-item' data-aos='fade-up-left' data-aos-duration={1000}>
                  <h2 className='accordion-header'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFour'
                      aria-expanded='false'
                      aria-controls='collapseFour'
                    >
                      Espaces de coworking & salles collaboratives
                    </button>
                  </h2>

                  <div
                    id='collapseFour'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='accordion-body__desc'>
                        Postes de travail, bureaux partagés, salles de réunion et espaces
                        créatifs disponibles pour les associations et les entrepreneurs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ITEM 5 */}
                <div className='accordion-item' data-aos='fade-up-left' data-aos-duration={1200}>
                  <h2 className='accordion-header'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFive'
                      aria-expanded='false'
                      aria-controls='collapseFive'
                    >
                      Conférences, ateliers et événements ouverts
                    </button>
                  </h2>

                  <div
                    id='collapseFive'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='accordion-body__desc'>
                        La MAG organise régulièrement des conférences thématiques du samedi,
                        des panels, des ateliers de formation et des forums citoyens.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
              {/* END ACCORDION */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqOne;
