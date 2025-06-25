const FaqOne = () => {
  return (
    <section className='faq py-120 position-relative'>
      <div className='container'>
        <div className='row gy-4 align-items-center'>
          <div className='col-lg-6 d-lg-block d-none'>
            <div className='faq-thumb'>
              <img
                src='assets/images/thumbs/faq-img.png'
                alt='Initiatives ITCG'
                data-tilt=''
                data-tilt-max={6}
                data-tilt-speed={500}
                data-tilt-perspective={5000}
                data-tilt-full-page-listening=''
              />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='faq-content'>
              <div className='mb-40'>
                <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
                  <span className='text-main-600 text-2xl d-flex'>
                    <i className='ph-bold ph-lightbulb' />
                  </span>
                  <h5 className='text-main-600 mb-0'>
                    Initiatives Clés de l'ITCG
                  </h5>
                </div>
                <h2 className='mb-24 wow bounceIn'>
                  Favoriser l’innovation et l’esprit d’entreprise
                </h2>
                <p className='text-neutral-500 text-line-2  wow bounceInUp'>
                  L’ITCG met en œuvre plusieurs initiatives stratégiques pour renforcer
                  l’écosystème des startups et soutenir les entrepreneurs dans leur
                  développement.
                </p>
              </div>
              <div className='accordion common-accordion' id='accordionExample'>
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
                      Reconnaissance officielle des startups
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='accordion-body__desc'>
                        Accès à des avantages fiscaux, à un accompagnement réglementaire
                        et à des opportunités de financement.
                      </p>
                    </div>
                  </div>
                </div>

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
                      Accélération de la propriété intellectuelle
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='accordion-body__desc'>
                        Procédures simplifiées pour l’enregistrement des brevets,
                        marques et droits d’auteur.
                      </p>
                    </div>
                  </div>
                </div>

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
                      Programmes de mentorat
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='accordion-body__desc'>
                        Mise en relation avec des experts, des investisseurs et des
                        incubateurs spécialisés pour accompagner les startups.
                      </p>
                    </div>
                  </div>
                </div>

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
                      Soutien financier ciblé
                    </button>
                  </h2>
                  <div
                    id='collapseFour'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='accordion-body__desc'>
                        Financements publics et privés dédiés aux projets innovants à fort
                        potentiel, facilitant le passage de l’idée à la réalisation.
                      </p>
                    </div>
                  </div>
                </div>

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
                      Création de pôles d’innovation
                    </button>
                  </h2>
                  <div
                    id='collapseFive'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='accordion-body__desc'>
                        Espaces de travail collaboratifs et ressources partagées pour les
                        jeunes entreprises technologiques et innovantes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqOne;
