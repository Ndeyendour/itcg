import { Link } from "react-router-dom";

const ComiteOrientationMAG = () => {
  return (
    <section className="government-board py-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="policy-document bg-white rounded-16 p-40 shadow-sm">
              <h1 className="mb-30 text-center">
                Comité d'Orientation de la MAG
              </h1>
              
              <div className="intro-section mb-40">
                <p className="lead-text">
                  Le Comité d'Orientation de la Maison des Associations de Guédiawaye assure la gouvernance et la stratégie de notre structure pour un impact optimal sur le territoire.
                </p>
              </div>

              <div className="board-composition mb-40">
                <h2 className="mb-20 section-title">Composition du Comité</h2>
                <div className="members-list bg-light-blue p-30 rounded-12">
                  <ul className="member-items">
                    <li className="member-item py-12 d-flex align-items-center">
                      <div className="member-badge bg-primary text-white rounded-circle me-15">1</div>
                      <div>
                        <h4 className="mb-0">Président du Comité</h4>
                        <p className="mb-0 text-muted">
                          Représentant de la Ville de Guédiawaye - <strong>Président</strong>
                        </p>
                      </div>
                    </li>
                    <li className="member-item py-12 d-flex align-items-center">
                      <div className="member-badge bg-primary text-white rounded-circle me-15">2</div>
                      <div>
                        <h4 className="mb-0">Directeur de la MAG</h4>
                        <p className="mb-0 text-muted">
                          Coordination générale - <strong>Membre permanent</strong>
                        </p>
                      </div>
                    </li>
                    <li className="member-item py-12 d-flex align-items-center">
                      <div className="member-badge bg-primary text-white rounded-circle me-15">3</div>
                      <div>
                        <h4 className="mb-0">Représentants associatifs</h4>
                        <p className="mb-0 text-muted">
                          5 représentants élus des associations membres - <strong>Membres</strong>
                        </p>
                      </div>
                    </li>
                    <li className="member-item py-12 d-flex align-items-center">
                      <div className="member-badge bg-primary text-white rounded-circle me-15">4</div>
                      <div>
                        <h4 className="mb-0">Experts techniques</h4>
                        <p className="mb-0 text-muted">
                          Entrepreneuriat, innovation sociale, développement local - <strong>Conseillers</strong>
                        </p>
                      </div>
                    </li>
                    <li className="member-item py-12 d-flex align-items-center">
                      <div className="member-badge bg-primary text-white rounded-circle me-15">5</div>
                      <div>
                        <h4 className="mb-0">Partenaires institutionnels</h4>
                        <p className="mb-0 text-muted">
                          Représentants des institutions partenaires - <strong>Membres invités</strong>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="tax-exemption mb-40">
                <h2 className="mb-20 section-title">Mission du Comité</h2>
                <div className="exemption-details bg-light-blue p-30 rounded-12">
                  <p className="mb-20">
                    Le Comité d'Orientation définit la stratégie globale de la MAG et veille à la cohérence des actions avec les besoins du territoire.
                  </p>
                  
                  <div className="eligibility-criteria mt-30">
                    <h4 className="mb-15">Principales responsabilités :</h4>
                    <ul className="criteria-list">
                      <li className="d-flex align-items-start mb-15">
                        <span className="criteria-icon text-primary me-10">✓</span>
                        <span>Validation du plan stratégique et des programmes d'activités</span>
                      </li>
                      <li className="d-flex align-items-start mb-15">
                        <span className="criteria-icon text-primary me-10">✓</span>
                        <span>Orientations pour le développement des services aux associations</span>
                      </li>
                      <li className="d-flex align-items-start mb-15">
                        <span className="criteria-icon text-primary me-10">✓</span>
                        <span>Suivi et évaluation de l'impact des actions menées</span>
                      </li>
                      <li className="d-flex align-items-start">
                        <span className="criteria-icon text-primary me-10">✓</span>
                        <span>
                          Développement des partenariats stratégiques et recherche de financements
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="application-process">
                <h2 className="mb-20 section-title">Comment participer au Comité</h2>
                <div className="process-steps">
                  <div className="step row g-4 mb-20">
                    <div className="col-md-2">
                      <div className="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center">
                        1
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="step-content bg-light p-20 rounded-12">
                        <h4>Adhésion à la MAG</h4>
                        <p className="mb-0">
                          Devenir membre de la Maison des Associations en remplissant le formulaire d'adhésion en ligne.
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
                        <h4>Participation active</h4>
                        <p className="mb-0">
                          Participer régulièrement aux activités et ateliers organisés par la MAG pendant au moins 6 mois.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="step row g-4 mb-20">
                    <div className="col-md-2">
                      <div className="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center">
                        3
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="step-content bg-light p-20 rounded-12">
                        <h4>Candidature</h4>
                        <p className="mb-0">
                          Soumettre sa candidature lors des élections annuelles des représentants associatifs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="step row g-4">
                    <div className="col-md-2">
                      <div className="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center">
                        4
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="step-content bg-light p-20 rounded-12">
                        <h4>Élection et mandat</h4>
                        <p className="mb-0">
                          Les représentants sont élus pour un mandat de 2 ans renouvelable une fois.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="meeting-schedule mt-40">
                <h2 className="mb-20 section-title">Calendrier des réunions</h2>
                <div className="schedule-details bg-light-blue p-30 rounded-12">
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="mb-15">Réunions ordinaires :</h5>
                      <ul>
                        <li className="mb-10">• Trimestrielles (4 fois par an)</li>
                        <li className="mb-10">• Dernier jeudi du mois</li>
                        <li>• 14h00 - Salle de réunion principale</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5 className="mb-15">Assemblée générale :</h5>
                      <ul>
                        <li className="mb-10">• Annuelle (décembre)</li>
                        <li>• Bilan et orientations pour l'année suivante</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cta-section text-center mt-50">
                <Link 
                  to="/devenir-membre" 
                  className="btn btn-primary btn-lg px-50 py-15"
                >
                  Devenir Membre
                </Link>
                <p className="mt-20 text-muted">
                  Pour plus d'informations : <a href="mailto:comite-orientation@mag-guediawaye.sn">comite-orientation@mag-guediawaye.sn</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComiteOrientationMAG;