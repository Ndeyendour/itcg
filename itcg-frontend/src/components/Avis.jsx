import { Link } from "react-router-dom";

const Avis = () => {
  return (
    <section className="government-board py-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="policy-document bg-white rounded-16 p-40 shadow-sm">
              <h1 className="mb-30 text-center">
                Conseil Interministériel pour les Startups
              </h1>
              
              <div className="intro-section mb-40">
                <p className="lead-text">
                  Le Conseil Interministériel établi par le Département de la Politique Industrielle et de la Promotion (DIPP) valide les startups pour l'octroi d'avantages fiscaux.
                </p>
              </div>

              <div className="board-composition mb-40">
                <h2 className="mb-20 section-title">Composition du Conseil</h2>
                <div className="members-list bg-light-blue p-30 rounded-12">
                  <ul className="member-items">
                    <li className="member-item py-12 d-flex align-items-center">
                      <div className="member-badge bg-primary text-white rounded-circle me-15">1</div>
                      <div>
                        <h4 className="mb-0">Secrétaire adjoint</h4>
                        <p className="mb-0 text-muted">
                          Département de la promotion de l'industrie et du commerce intérieur - <strong>Organisateur</strong>
                        </p>
                      </div>
                    </li>
                    <li className="member-item py-12 d-flex align-items-center">
                      <div className="member-badge bg-primary text-white rounded-circle me-15">2</div>
                      <div>
                        <h4 className="mb-0">Représentant</h4>
                        <p className="mb-0 text-muted">
                          Département de biotechnologie - <strong>Membre</strong>
                        </p>
                      </div>
                    </li>
                    <li className="member-item py-12 d-flex align-items-center">
                      <div className="member-badge bg-primary text-white rounded-circle me-15">3</div>
                      <div>
                        <h4 className="mb-0">Représentant</h4>
                        <p className="mb-0 text-muted">
                          Département des sciences et de la technologie - <strong>Membre</strong>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="tax-exemption mb-40">
                <h2 className="mb-20 section-title">Exonération fiscale (Article 80-IAC)</h2>
                <div className="exemption-details bg-light-blue p-30 rounded-12">
                  <p className="mb-20">
                    Le conseil valide les startups pour l'exonération de l'impôt sur le revenu des bénéfices en vertu de l'article 80-IAC de la Loi de l'impôt sur le revenu.
                  </p>
                  
                  <div className="eligibility-criteria mt-30">
                    <h4 className="mb-15">Conditions d'éligibilité :</h4>
                    <ul className="criteria-list">
                      <li className="d-flex align-items-start mb-15">
                        <span className="criteria-icon text-primary me-10">✓</span>
                        <span>Structure juridique : Société à responsabilité limitée ou société par actions</span>
                      </li>
                      <li className="d-flex align-items-start mb-15">
                        <span className="criteria-icon text-primary me-10">✓</span>
                        <span>Date d'incorporation : Entre le 1er avril 2016 et le 1er avril 2030</span>
                      </li>
                      <li className="d-flex align-items-start">
                        <span className="criteria-icon text-primary me-10">✓</span>
                        <span>
                          Activité : Innovation, développement ou amélioration de produits/processus/services, 
                          ou modèle commercial évolutif avec fort potentiel de création d'emplois ou de richesse
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="application-process">
                <h2 className="mb-20 section-title">Processus de demande</h2>
                <div className="process-steps">
                  <div className="step row g-4 mb-20">
                    <div className="col-md-2">
                      <div className="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center">
                        1
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="step-content bg-light p-20 rounded-12">
                        <h4>Reconnaissance DIPP</h4>
                        <p className="mb-0">
                          Obtenez d'abord la reconnaissance officielle en tant que startup auprès du Département de la Politique Industrielle et de la Promotion.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="step row g-4 mb-20">
                    <div className="col-md-2">
                      <div className="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center">
                        2
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="step-content bg-light p-20 rounded-12">
                        <h4>Soumission de la demande</h4>
                        <p className="mb-0">
                          Soumettez votre demande complète via le portail en ligne avec tous les documents justificatifs requis.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="step row g-4">
                    <div className="col-md-2">
                      <div className="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center">
                        3
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="step-content bg-light p-20 rounded-12">
                        <h4>Évaluation et validation</h4>
                        <p className="mb-0">
                          Le Conseil interministériel évaluera votre demande lors de sa prochaine réunion et vous informera de sa décision.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cta-section text-center mt-50">
                <Link 
                  to="/application-form" 
                  className="btn btn-primary btn-lg px-50 py-15"
                >
                  Commencer la demande
                </Link>
                <p className="mt-20 text-muted">
                  Pour toute question, contactez-nous à <a href="mailto:startup-80iac@gov.in">startup-80iac@gov.in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Avis;