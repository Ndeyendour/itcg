import { Link } from "react-router-dom";

const Certificatcheck = () => {
  return (
    <section className='certificate-check py-120'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='certificate-form border border-neutral-30 rounded-12 bg-white p-40'>
              <h2 className='text-center mb-40'>Vérifier / Télécharger le certificat</h2>
              
              <div className="directives-box bg-main-25 p-24 rounded-12 mb-40">
                <h5 className='mb-20'>DIRECTIVES</h5>
                <ul className='list-dotted d-flex flex-column gap-16'>
                  <li>Veuillez sélectionner le type de certificat.</li>
                  <li>Saisissez le numéro de certificat correct conformément au format décrit, par exemple, Certificat de reconnaissance : DIPP260 et Admissibilité 80IAC : DIPP260.</li>
                  <li>Pour de meilleurs résultats, veuillez fournir le numéro ou le nom du certificat.</li>
                  <li>
                    Le certificat de reconnaissance de démarrage est accessible via Digi Locker 
                    (<Link to="#" className="text-main-600 hover-text-decoration-underline">Cliquez ici pour connaître les directives</Link>)
                  </li>
                  <li>
                    Pour modifier vos détails de reconnaissance du certificat DPIIT, veuillez suivre le document fourni 
                    (<Link to="#" className="text-main-600 hover-text-decoration-underline">Cliquez ici pour en savoir plus</Link>).
                  </li>
                </ul>
              </div>

              <form>
                <div className="form-group mb-24">
                  <label htmlFor="certificateType" className="form-label fw-medium mb-12">
                    Sélectionnez le type de certificat*
                  </label>
                  <select 
                    id="certificateType" 
                    className="form-select py-16 px-20 rounded-12 border-neutral-30"
                    required
                  >
                    <option value="">Sélectionner</option>
                    <option value="reconnaissance">Certificat de reconnaissance</option>
                    <option value="admissibilite">Admissibilité 80IAC</option>
                    <option value="autre">Autre type de certificat</option>
                  </select>
                </div>

                <div className="form-group mb-24">
                  <label htmlFor="certificateNumber" className="form-label fw-medium mb-12">
                    Numéro de certificat*
                  </label>
                  <input 
                    type="text" 
                    id="certificateNumber" 
                    className="form-control py-16 px-20 rounded-12 border-neutral-30"
                    placeholder="Ex: DIPP260"
                    required
                  />
                </div>

                <div className="form-group mb-32">
                  <label htmlFor="email" className="form-label fw-medium mb-12">
                    Entrer votre Email*
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="form-control py-16 px-20 rounded-12 border-neutral-30"
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-main rounded-pill px-40 py-16">
                    Soumettre
                  </button>
                </div>
              </form>

              <div className="subscription-box mt-40 p-24 bg-main-25 rounded-12">
                <h5 className='mb-16'>S'abonner aux mises à jour</h5>
                <p className='mb-20'>Recevez les dernières informations sur les certificats directement dans votre boîte de réception.</p>
                <div className="d-flex gap-16">
                  <input 
                    type="email" 
                    className="form-control flex-grow-1 py-16 px-20 rounded-12 border-neutral-30"
                    placeholder="Entrez votre email"
                  />
                  <button className="btn btn-outline-main rounded-pill px-24 py-16">
                    S'abonner
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificatcheck;