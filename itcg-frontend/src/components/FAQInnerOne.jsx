const FAQMaisonAssociations = () => {
  return (
    <section className='faq-page py-120'>
      <div className='container'>
        <div className='section-heading text-center'>
          <div className='flex-align d-inline-flex gap-8 mb-16'>
            <span className='text-main-600 text-2xl d-flex'>
              <i className='ph-bold ph-question' />
            </span>
            <h5 className='text-main-600 mb-0'>Foire Aux Questions</h5>
          </div>
          <h2 className='mb-24'>Trouvez Réponses à Vos Questions</h2>
          <p className=''>
            Bienvenue dans notre section FAQ ! Vous trouverez ici les réponses aux questions les plus fréquemment posées sur nos services et activités.
          </p>
        </div>
        <div className='text-center mb-40'>
          <ul
            className='nav nav-pills common-tab custom-padding d-inline-flex gap-16 bg-white p-12 border border-neutral-30 rounded-pill'
            id='pills-tab'
            role='tablist'
          >
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8 active'
                id='pills-associations-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-associations'
                type='button'
                role='tab'
                aria-controls='pills-associations'
                aria-selected='true'
              >
                <i className='text-xl text-main-600 d-flex ph-bold ph-users' />
                Pour les Associations
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8'
                id='pills-entrepreneurs-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-entrepreneurs'
                type='button'
                role='tab'
                aria-controls='pills-entrepreneurs'
                aria-selected='false'
              >
                <i className='text-xl text-main-600 d-flex ph-bold ph-rocket-launch' />
                Pour les Entrepreneurs
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8'
                id='pills-partenaires-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-partenaires'
                type='button'
                role='tab'
                aria-controls='pills-partenaires'
                aria-selected='false'
              >
                <i className='text-xl text-main-600 d-flex ph-bold ph-handshake' />
                Pour les Partenaires
              </button>
            </li>
          </ul>
        </div>
        <div className='tab-content' id='pills-tabContent'>
          {/* ONGLET ASSOCIATIONS */}
          <div
            className='tab-pane fade show active'
            id='pills-associations'
            role='tabpanel'
            aria-labelledby='pills-associations-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div className='col-lg-6'>
                <div
                  className='accordion common-accordion'
                  id='accordionAssociationsOne'
                >
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseAssocOne'
                        aria-expanded='true'
                        aria-controls='collapseAssocOne'
                      >
                        Comment devenir membre de la Maison des Associations ?
                      </button>
                    </h2>
                    <div
                      id='collapseAssocOne'
                      className='accordion-collapse collapse show'
                      data-bs-parent='#accordionAssociationsOne'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          Pour devenir membre, il suffit de remplir le formulaire d'adhésion disponible sur notre site ou directement à l'accueil de la MAG. Votre demande sera étudiée par notre équipe dans les plus brefs délais.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseAssocTwo'
                        aria-expanded='false'
                        aria-controls='collapseAssocTwo'
                      >
                        Quels sont les horaires d'ouverture des espaces ?
                      </button>
                    </h2>
                    <div
                      id='collapseAssocTwo'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionAssociationsOne'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          La Maison des Associations est ouverte du lundi au vendredi de 8h à 18h, et le samedi de 9h à 13h pour les conférences et événements spéciaux.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseAssocThree'
                        aria-expanded='false'
                        aria-controls='collapseAssocThree'
                      >
                        Comment réserver la salle multifonctionnelle ?
                      </button>
                    </h2>
                    <div
                      id='collapseAssocThree'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionAssociationsOne'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          La réservation se fait via notre plateforme en ligne dans l'espace "Actualités et inscriptions" ou en contactant directement notre équipe d'accueil.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div
                  className='accordion common-accordion'
                  id='accordionAssociationsTwo'
                >
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseAssocFour'
                        aria-expanded='false'
                        aria-controls='collapseAssocFour'
                      >
                        Comment exprimer mes besoins en formation ?
                      </button>
                    </h2>
                    <div
                      id='collapseAssocFour'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionAssociationsTwo'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          Utilisez notre formulaire en ligne "Expression des besoins" disponible sur le site. Nous analysons régulièrement ces demandes pour adapter notre programme de formations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseAssocFive'
                        aria-expanded='false'
                        aria-controls='collapseAssocFive'
                      >
                        L'accès au coworking est-il payant ?
                      </button>
                    </h2>
                    <div
                      id='collapseAssocFive'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionAssociationsTwo'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          L'accès à l'espace de coworking est gratuit pour les associations membres de la MAG. Des formules d'abonnement sont disponibles pour les non-membres.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseAssocSix'
                        aria-expanded='true'
                        aria-controls='collapseAssocSix'
                      >
                        Comment participer aux Conférences du Samedi ?
                      </button>
                    </h2>
                    <div
                      id='collapseAssocSix'
                      className='accordion-collapse collapse show'
                      data-bs-parent='#accordionAssociationsTwo'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          L'inscription se fait en ligne via notre plateforme. Les conférences sont ouvertes à tous et généralement gratuites pour les membres.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ONGLET ENTREPRENEURS */}
          <div
            className='tab-pane fade'
            id='pills-entrepreneurs'
            role='tabpanel'
            aria-labelledby='pills-entrepreneurs-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div className='col-lg-6'>
                <div
                  className='accordion common-accordion'
                  id='accordionEntrepreneursOne'
                >
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseEntrepOne'
                        aria-expanded='false'
                        aria-controls='collapseEntrepOne'
                      >
                        Comment intégrer l'incubateur Tech & Art ?
                      </button>
                    </h2>
                    <div
                      id='collapseEntrepOne'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionEntrepreneursOne'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          Postulez via notre appel à projets en ligne. Les sélections se font sur dossier et pitch devant un comité d'experts plusieurs fois par an.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseEntrepTwo'
                        aria-expanded='false'
                        aria-controls='collapseEntrepTwo'
                      >
                        Quels types de projets sont éligibles ?
                      </button>
                    </h2>
                    <div
                      id='collapseEntrepTwo'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionEntrepreneursOne'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          Nous accompagnons les projets innovants dans les domaines du numérique, des arts, de l'économie sociale et solidaire, et du développement durable.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseEntrepThree'
                        aria-expanded='true'
                        aria-controls='collapseEntrepThree'
                      >
                        Quelle est la durée d'incubation ?
                      </button>
                    </h2>
                    <div
                      id='collapseEntrepThree'
                      className='accordion-collapse collapse show'
                      data-bs-parent='#accordionEntrepreneursOne'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          Le programme d'incubation dure généralement 6 à 12 mois, avec un suivi personnalisé adapté au rythme de développement de chaque projet.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div
                  className='accordion common-accordion'
                  id='accordionEntrepreneursTwo'
                >
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseEntrepFour'
                        aria-expanded='true'
                        aria-controls='collapseEntrepFour'
                      >
                        Quels services propose l'incubateur ?
                      </button>
                    </h2>
                    <div
                      id='collapseEntrepFour'
                      className='accordion-collapse collapse show'
                      data-bs-parent='#accordionEntrepreneursTwo'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          Mentorat expert, accès aux espaces de travail, formations thématiques, mise en réseau avec des partenaires, et accompagnement au financement.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseEntrepFive'
                        aria-expanded='false'
                        aria-controls='collapseEntrepFive'
                      >
                        L'incubateur est-il payant ?
                      </button>
                    </h2>
                    <div
                      id='collapseEntrepFive'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionEntrepreneursTwo'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          L'accompagnement est gratuit pour les projets sélectionnés. Nous fonctionnons sur le principe de l'équity-free pour préserver l'indépendance des porteurs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseEntrepSix'
                        aria-expanded='false'
                        aria-controls='collapseEntrepSix'
                      >
                        Y a-t-il un accompagnement après l'incubation ?
                      </button>
                    </h2>
                    <div
                      id='collapseEntrepSix'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionEntrepreneursTwo'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          Oui, nous proposons un programme de post-incubation avec un suivi allégé et un accès privilégié à notre réseau de partenaires et investisseurs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ONGLET PARTENAIRES */}
          <div
            className='tab-pane fade'
            id='pills-partenaires'
            role='tabpanel'
            aria-labelledby='pills-partenaires-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div className='col-lg-6'>
                <div
                  className='accordion common-accordion'
                  id='accordionPartenairesOne'
                >
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapsePartOne'
                        aria-expanded='false'
                        aria-controls='collapsePartOne'
                      >
                        Quels types de partenariats recherchez-vous ?
                      </button>
                    </h2>
                    <div
                      id='collapsePartOne'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionPartenairesOne'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          Nous cherchons des partenaires techniques, financiers et institutionnels pour nos programmes d'accompagnement, nos événements et le développement de nos infrastructures.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapsePartTwo'
                        aria-expanded='true'
                        aria-controls='collapsePartTwo'
                      >
                        Comment proposer un partenariat ?
                      </button>
                    </h2>
                    <div
                      id='collapsePartTwo'
                      className='accordion-collapse collapse show'
                      data-bs-parent='#accordionPartenairesOne'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          Contactez-nous via le formulaire dédié "Devenir partenaire" ou par email. Notre équipe vous recontactera pour une première rencontre.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapsePartThree'
                        aria-expanded='false'
                        aria-controls='collapsePartThree'
                      >
                        Peut-on co-organiser des événements ?
                      </button>
                    </h2>
                    <div
                      id='collapsePartThree'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionPartenairesOne'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          Absolument ! Nous sommes ouverts à la co-organisation d'événements, conférences et ateliers qui s'inscrivent dans notre mission de développement local.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div
                  className='accordion common-accordion'
                  id='accordionPartenairesTwo'
                >
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapsePartFour'
                        aria-expanded='true'
                        aria-controls='collapsePartFour'
                      >
                        Quels sont les avantages pour les partenaires ?
                      </button>
                    </h2>
                    <div
                      id='collapsePartFour'
                      className='accordion-collapse collapse show'
                      data-bs-parent='#accordionPartenairesTwo'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          Visibilité sur nos supports de communication, accès à notre réseau d'acteurs locaux, participation à nos instances de gouvernance, et impact social mesurable.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapsePartFive'
                        aria-expanded='false'
                        aria-controls='collapsePartFive'
                      >
                        Acceptez-vous les dons de matériel ?
                      </button>
                    </h2>
                    <div
                      id='collapsePartFive'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionPartenairesTwo'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          Oui, nous acceptons les dons de matériel informatique, de mobilier et d'équipements pour améliorer nos espaces et services aux associations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapsePartSix'
                        aria-expanded='false'
                        aria-controls='collapsePartSix'
                      >
                        Proposez-vous du mécénat de compétence ?
                      </button>
                    </h2>
                    <div
                      id='collapsePartSix'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionPartenairesTwo'
                    >
                      <div className='accordion-body'>
                        <p className='accordion-body__desc'>
                          Tout à fait ! Le mécénat de compétence est l'une des formes de partenariat que nous valorisons particulièrement pour l'expertise qu'il apporte à nos bénéficiaires.
                        </p>
                      </div>
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

export default FAQMaisonAssociations;