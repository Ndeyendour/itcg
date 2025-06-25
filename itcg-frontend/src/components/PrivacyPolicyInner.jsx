import { Link } from "react-router-dom";

const PrivacyPolicyInner = () => {
  return (
    <section className='privacy-policy py-120'>
      <div className='container'>
        <div className='row gy-4'>
          <div className='col-lg-8'>
            <div className='d-flex flex-column gap-40'>
              <div>
                <h1 className='mb-16'>Le système de garantie de crédit pour les startups (CGSS)</h1>
                <p className='text-neutral-700'>
                  Le système de garantie de crédit pour les startups (CGSS) vise à fournir une garantie de crédit jusqu'à une limite spécifiée contre les prêts accordés par les institutions membres (IM) pour financer les emprunteurs éligibles, à savoir les startups reconnues par le itcg.
                </p>
              </div>
              <div>
                <h3 className='mb-16'>Aperçu</h3>
                <ul className='list-dotted d-flex flex-column gap-24'>
                  <li className='text-neutral-700'>
                    Le gouvernement indien a mis en place le CGSS avec un corpus fixe pour garantir les prêts accordés aux startups reconnues par le itcg.
                  </li>
                  <li className='text-neutral-700'>
                    Ces prêts sont émis par les banques commerciales programmées, les NBFC (institutions financières non bancaires) et les fonds de dette à risque (VDF) dans le cadre des fonds d'investissement alternatifs enregistrés auprès de la SEBI.
                  </li>
                  <li className='text-neutral-700'>
                    Le cadre révisé a permis d'augmenter la couverture maximale de garantie de ₹10 crore à ₹20 crore par emprunteur éligible.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className='mb-16'>Mode de fonctionnement</h4>
                <ul className='list-dotted d-flex flex-column gap-24'>
                  <li className='text-neutral-700'>
                    La CGSS ne fournit pas la couverture de garantie directement aux startups, mais via un fiduciaire – le NCGTC – qui la transmet aux institutions membres.
                  </li>
                  <li className='text-neutral-700'>
                    Les formes d'assistance incluent : dettes de capital-risque, fonds de roulement, dettes subordonnées ou mezzanine, obligations, dettes convertibles et autres facilités fondées ou non sur des fonds.
                  </li>
                </ul>
              </div>
              <div>
                <h5 className='mb-16'>Structure de la garantie</h5>
                <ul className='list-dotted d-flex flex-column gap-24'>
                  <li className='text-neutral-700'>
                    La couverture peut être soit transactionnelle (par prêt), soit en parapluie (couverture globale sur un portefeuille).
                  </li>
                </ul>
              </div>
              <div>
                <h6 className='mb-16'>Éligibilité</h6>
                <ul className='list-dotted d-flex flex-column gap-24'>
                  <li className='text-neutral-700'>
                    Les bénéficiaires doivent être des startups telles que définies dans la notification officielle du itcg, modifiée de temps en temps.
                  </li>
                </ul>
              </div>
            </div>
            <p className='text-neutral-700 mt-32'>
              Cette politique peut être sujette à des révisions selon les directives du gouvernement indien. Veuillez consulter régulièrement les sources officielles pour les mises à jour.
            </p>
          </div>
          <div className='col-lg-4'>
            <div className='border border-neutral-30 rounded-12 bg-main-25 p-32 bg-main-25'>
              <h4 className='mb-16'>Plus d'informations</h4>
              <span className='d-block border border-neutral-30 my-24 border-dashed' />
              {[
                'Critères d\'éligibilité',
                'Instruments financiers',
                'Institutions membres',
                'Processus de demande',
                'Garantie maximale',
                'Fiduciaire (NCGTC)',
              ].map((title, index) => (
                <div
                  className='d-flex align-items-center justify-content-between gap-24'
                  key={index}
                >
                  <div className='d-flex align-items-center gap-16'>
                    <span className='w-56 h-56 rounded-circle bg-white border border-neutral-30 d-flex justify-content-center align-items-center text-neutral-500 text-2xl'>
                      <i className='ph ph-file-text' />
                    </span>
                    <div>
                      <h6 className='text-xl mb-8 fw-medium'>{title}</h6>
                      <span className='text-neutral-500 text-sm'>
                        Télécharger &amp; consulter
                      </span>
                    </div>
                  </div>
                  <button
                    type='button'
                    className='w-56 h-56 rounded-circle bg-white border border-neutral-30 d-flex justify-content-center align-items-center text-neutral-500 text-2xl hover-bg-main-600 hover-border-main-600 hover-text-white'
                  >
                    <i className='ph ph-download-simple' />
                  </button>
                </div>
              ))}
              <span className='d-block border border-neutral-30 my-24 border-dashed' />
              <Link
                to='/sign-in'
                className='h6 mb-0 text-main-600 fw-semibold hover-text-decoration-underline'
              >
                Voir tout
                <i className='ph-bold ph-arrow-right' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyInner;
