import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const EventDetailsOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(1);

  return (
    <section className='regulation-support py-120 bg-white'>
      <div className='container container--lg'>
        <img
          src='assets/images/thumbs/finance-regulation-img.png'
          alt='Réglementation ITCG'
          className='rounded-12 cover-img'
        />
        
        <div className='container'>
          <div className='mt-60'>
            <div className='row gy-4'>
              <div className='col-lg-8'>
                <h1 className='display-4 mb-24 fw-semibold'>
                  Soutien à la Réglementation de l'ITCG
                </h1>
                <p className='text-neutral-700'>
                  L'Impôt sur les Transactions de Change (ITCG) joue un rôle clé dans la régulation des marchés financiers et la protection de l'économie nationale. Notre programme de formation et d'accompagnement vise à aider les professionnels et les entreprises à se conformer efficacement à cette réglementation.
                </p>
                
                <span className='d-block border-bottom border-top-0 border-dashed border-main-100 my-32' />
                
                <h2 className='mb-16'>Fondements de l'ITCG</h2>
                <ul className='list-dotted d-flex flex-column gap-16'>
                  <li>Comprendre le cadre légal et les textes réglementaires</li>
                  <li>Historique et objectifs de l'ITCG</li>
                  <li>Impact sur les transactions internationales</li>
                </ul>
                
                <span className='d-block border-bottom border-top-0 border-dashed border-main-100 my-32' />
                
                <h3 className='mb-16'>Obligations Déclaratives</h3>
                <ul className='list-dotted d-flex flex-column gap-16'>
                  <li>Procédures de déclaration des transactions</li>
                  <li>Calendrier et périodicité des déclarations</li>
                  <li>Documents justificatifs requis</li>
                </ul>
                
                <div className='my-32'>
                  <div className='row gy-4'>
                    <div className='col-6'>
                      <img
                        src='assets/images/thumbs/tax-documentation-img1.png'
                        alt='Documentation ITCG'
                        className='rounded-16 cover-img'
                      />
                    </div>
                    <div className='col-6'>
                      <img
                        src='assets/images/thumbs/tax-process-img2.png'
                        alt='Processus ITCG'
                        className='rounded-16 cover-img'
                      />
                    </div>
                  </div>
                </div>
                
                <h4 className='mb-16'>Calcul et Paiement</h4>
                <ul className='list-dotted d-flex flex-column gap-16'>
                  <li>Méthodes de calcul de l'impôt</li>
                  <li>Taux applicables selon les types de transactions</li>
                  <li>Modalités de paiement et voies de recours</li>
                </ul>
                
                <span className='d-block border-bottom border-top-0 border-dashed border-main-100 my-32' />
                
                <h5 className='mb-16'>Conformité et Contrôles</h5>
                <ul className='list-dotted d-flex flex-column gap-16'>
                  <li>Préparation aux contrôles fiscaux</li>
                  <li>Gestion des redressements</li>
                  <li>Bonnes pratiques pour éviter les sanctions</li>
                </ul>
                
                <div className='position-relative my-32'>
                  <img
                    src='assets/images/thumbs/tax-regulation-video-thumb.png'
                    className='rounded-12 cover-img'
                    alt='Vidéo explicative ITCG'
                  />
                  <span
                    onClick={() => setIsOpen(true)}
                    className='play-button position-absolute start-50 top-50 translate-middle z-1 w-72 h-72 flex-center bg-main-600 text-white rounded-circle text-2xl'
                  >
                    <i className='ph-fill ph-play' />
                  </span>
                </div>
                
                <h6 className='mb-16'>Avantages de Notre Accompagnement</h6>
                <ul className='list-dotted d-flex flex-column gap-16'>
                  <li>
                    <strong>Expertise actualisée</strong> : Accès aux dernières modifications réglementaires
                  </li>
                  <li>
                    <strong>Outils pratiques</strong> : Modèles de documents et calculateurs automatisés
                  </li>
                  <li>
                    <strong>Support continu</strong> : Assistance technique après la formation
                  </li>
                  <li>
                    <strong>Réseau professionnel</strong> : Échanges avec d'autres experts en fiscalité
                  </li>
                </ul>
              </div>
              
              <div className='col-lg-4'>
                <div className='bg-white box-shadow-md rounded-12 p-12 d-flex flex-column gap-12 border border-neutral-30'>
                  <div className='rounded-12 overflow-hidden'>
                    <div className='position-relative'>
                      <img
                        src='assets/images/thumbs/tax-workshop-img.png'
                        className='rounded-12 cover-img'
                        alt='Atelier ITCG'
                      />
                      <h3 className='text-white bg-main-600 mb-0 px-32 py-16 rounded-top-start-8px position-absolute inset-inline-end-0 inset-block-end-0 fw-medium'>
                        Formation Professionnelle
                      </h3>
                    </div>
                  </div>
                  
                  <div className='rounded-12 bg-main-25 p-24'>
                    <div className='flex-between flex-wrap gap-16 border-bottom border-dashed border-neutral-40 pb-16 mb-16'>
                      <div className='flex-align gap-12'>
                        <i className='ph-bold ph-calendar-dot text-neutral-700 text-2xl' />
                        <span className='text-neutral-700 text-lg'>Prochaine session</span>
                      </div>
                      <span className='text-lg fw-medium'>15/09/2023</span>
                    </div>
                    
                    <div className='flex-between flex-wrap gap-16 border-bottom border-dashed border-neutral-40 pb-16 mb-16'>
                      <div className='flex-align gap-12'>
                        <i className='ph-bold ph-clock text-neutral-700 text-2xl' />
                        <span className='text-neutral-700 text-lg'>Horaires</span>
                      </div>
                      <span className='text-lg fw-medium'>09h - 17h</span>
                    </div>
                    
                    <div className='flex-between flex-wrap gap-16 border-bottom border-dashed border-neutral-40 pb-16 mb-16'>
                      <div className='flex-align gap-12'>
                        <i className='ph-bold ph-map-pin-line text-neutral-700 text-2xl' />
                        <span className='text-neutral-700 text-lg'>Format</span>
                      </div>
                      <span className='text-lg fw-medium'>Hybride (Présentiel/En ligne)</span>
                    </div>
                    
                    <div className='flex-between flex-wrap gap-16'>
                      <div className='flex-align gap-12'>
                        <i className='ph-bold ph-users-three text-neutral-700 text-2xl' />
                        <span className='text-neutral-700 text-lg'>Places restantes</span>
                      </div>
                      <span className='text-lg fw-medium'>12/25</span>
                    </div>
                  </div>
                  
                  <div className='rounded-12 bg-main-25 p-24'>
                    <h4 className='mb-16'>Tarifs</h4>
                    <div className='flex-between flex-wrap gap-16 mb-24'>
                      <span className='text-neutral-700'>Participation standard</span>
                      <span className='fw-semibold'>500€</span>
                    </div>
                    <div className='flex-between flex-wrap gap-16 mb-24'>
                      <span className='text-neutral-700'>Membres associés</span>
                      <span className='fw-semibold'>400€</span>
                    </div>
                    <div className='flex-between flex-wrap gap-16'>
                      <span className='text-neutral-700'>Étudiants</span>
                      <span className='fw-semibold'>250€</span>
                    </div>
                  </div>
                  
                  <Link to='/inscription' className='btn btn-main rounded-pill flex-center gap-8'>
                    S'inscrire maintenant
                    <i className='ph-bold ph-arrow-up-right text-lg' />
                  </Link>
                  
                  <div className='mt-24'>
                    <h5 className='mb-16'>Ressources Utiles</h5>
                    <ul className='resource-list'>
                      <li className='mb-12'>
                        <Link to='/guide-itcg' className='text-neutral-700 hover-text-main-600 d-flex align-items-center gap-8'>
                          <i className='ph ph-file-pdf text-main-600' />
                          Guide complet ITCG 2023
                        </Link>
                      </li>
                      <li className='mb-12'>
                        <Link to='/calculateur' className='text-neutral-700 hover-text-main-600 d-flex align-items-center gap-8'>
                          <i className='ph ph-calculator text-main-600' />
                          Calculateur ITCG
                        </Link>
                      </li>
                      <li>
                        <Link to='/faq' className='text-neutral-700 hover-text-main-600 d-flex align-items-center gap-8'>
                          <i className='ph ph-question text-main-600' />
                          Foire aux questions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XxVg_s8xAms'
        onClose={() => setIsOpen(false)}
        allowFullScreen
      />
    </section>
  );
};

export default EventDetailsOne;