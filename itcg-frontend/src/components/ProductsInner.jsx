import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactSlider from "react-slider";
import axios from "axios";

const ProductsInner = () => {
  const [values, setValues] = useState([100, 1000]);
  const [activeTab, setActiveTab] = useState('startups');
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [investors, setInvestors] = useState([]);
  const [organizations, setOrganizations] = useState([]);
const [loadingOrgs, setLoadingOrgs] = useState(false);
const [loadingInvestors, setLoadingInvestors] = useState(false);
// Fonction pour obtenir l'icône appropriée selon le type d'organisation
const getOrgIcon = (type) => {
  switch(type) {
    case 'Accelerator': return 'ph-rocket';
    case 'Incubator': return 'ph-seedling';
    case 'Corporate': return 'ph-buildings';
    case 'GovernmentBody': return 'ph-buildings';
    default: return 'ph-buildings';
  }
};

// Fonction pour obtenir la classe CSS du badge selon le type
const getOrgBadgeClass = (type) => {
  switch(type) {
    case 'Accelerator': return 'bg-info text-white';
    case 'Incubator': return 'bg-success text-white';
    case 'Corporate': return 'bg-primary text-white';
    case 'GovernmentBody': return 'bg-secondary text-white';
    default: return 'bg-light text-dark';
  }
};

// Fonctions utilitaires pour les investisseurs
const getInvestorIcon = (type) => {
  switch(type) {
    case 'Angel': return 'ph-angel';
    case 'VC': return 'ph-buildings';
    case 'Corporate': return 'ph-building-skyscraper';
    default: return 'ph-user';
  }
};

const getInvestorBadgeClass = (type) => {
  switch(type) {
    case 'Angel': return 'bg-warning text-dark';
    case 'VC': return 'bg-primary text-white';
    case 'Corporate': return 'bg-success text-white';
    default: return 'bg-secondary text-white';
  }
};

useEffect(() => {
  if (['accelerators', 'incubators', 'corporates', 'governmentBodies'].includes(activeTab)) {
    setLoadingOrgs(true);
    let type = '';
    
    switch(activeTab) {
      case 'accelerators': type = 'Accelerator'; break;
      case 'incubators': type = 'Incubator'; break;
      case 'corporates': type = 'Corporate'; break;
      case 'governmentBodies': type = 'GovernmentBody'; break;
      default: type = '';
    }

    axios.get(`https://itcg.onrender.com//api/organizations?type=${type}`)
      .then(response => {
        setOrganizations(response.data);
      })
      .catch(error => {
        console.error("Error fetching organizations:", error);
      })
      .finally(() => setLoadingOrgs(false));
  }
}, [activeTab]);
useEffect(() => {
  if (activeTab === 'investors') {
    setLoadingInvestors(true);
    axios.get('https://itcg.onrender.com//api/investors')
      .then(response => {
        console.log("Investors data:", response.data);
        setInvestors(response.data);
      })
      .catch(error => {
        console.error("Investors fetch error:", error);
      })
      .finally(() => setLoadingInvestors(false));
  }
}, [activeTab]);

  // Récupérer les mentors depuis l'API
useEffect(() => {
  if (activeTab === 'mentors') {
    setLoading(true);
    axios.get('https://itcg.onrender.com//api/mentors')
      .then(response => {
        console.log("Réponse API:", response.data); // Vérifiez les données reçues
        setMentors(response.data);
      })
      .catch(error => {
        console.error("Erreur API:", error.response || error); // Affichez l'erreur complète
        setMentors([]); // Réinitialisez les mentors en cas d'erreur
      })
      .finally(() => setLoading(false));
  }
}, [activeTab]);
  let [sidebarActive, setSidebarActive] = useState(false);
  let sidebarControl = () => {
    setSidebarActive(!sidebarActive);
  };

  const [startups, setStartups] = useState([]);

  useEffect(() => {
    axios.get("https://itcg.onrender.com//api/startups") // Remplace par ton URL si différent
      .then(res => setStartups(res.data))
      .catch(err => console.error("Erreur de chargement des startups :", err));
  }, []);

  return (
    <section
      className='course-list-view py-120 background-img bg-img'
      data-background-image='assets/images/bg/gradient-bg.png'
    >
      <div className={`side-overlay ${sidebarActive ? "show" : ""}`}></div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            <div
              className={`sidebar rounded-12 bg-white p-32 box-shadow-md ${
                sidebarActive ? "active" : ""
              }`}
            >
              <form action='#'>
                <div className='flex-between'>
                  <div className='flex-grow-1'>
                    <div className='flex-between'>
                      <h4 className='mb-0'>Filtres</h4>
                      <button
                        type='button'
                        onClick={sidebarControl}
                        className='sidebar-close text-xl text-neutral-500 d-lg-none hover-text-main-600'
                      >
                        <i className='ph-bold ph-x' />
                      </button>
                    </div>
                    <span className='d-block border border-neutral-30 border-dashed my-24' />
                  </div>
                </div>
                <div className='position-relative'>
                  <input
                    type='text'
                    className='common-input pe-48 rounded-pill bg-main-25'
                    placeholder='Enter Your Email...'
                  />
                  <button
                    type='submit'
                    className='text-xl position-absolute top-50 translate-middle-y inset-inline-end-0 me-4  w-40 h-40 bg-main-600 d-flex align-items-center justify-content-center text-white rounded-circle hover-bg-main-700'
                  >
                    <i className='ph-bold ph-magnifying-glass' />
                  </button>
                </div>
                <span className='d-block border border-neutral-30 border-dashed my-24' />
                <div className='d-flex flex-column gap-32'>
                  <div className='col-sm-12'>
                    <h6 className='text-lg mb-24 fw-semibold'>Genre</h6>
                    <div className='d-flex flex-column gap-16'>
                      <div className='form-check common-check common-radio mb-0'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='gender'
                          id='Male'
                        />
                        <label
                          className='form-check-label fw-normal flex-grow-1'
                          htmlFor='Male'
                        >
                          Accelerateur
                        </label>
                      </div>
                      <div className='form-check common-check common-radio mb-0'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='gender'
                          id='Female'
                        />
                        <label
                          className='form-check-label fw-normal flex-grow-1'
                          htmlFor='Female'
                        >
                          Incubateur
                        </label>
                      </div>
                      <div className='form-check common-check common-radio mb-0'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='gender'
                          id='kids'
                        />
                        <label
                          className='form-check-label fw-normal flex-grow-1'
                          htmlFor='kids'
                        >
                          Entreprise
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className=''>
                    <h6 className='text-lg mb-24 fw-semibold'>Categorie</h6>
                    <div className='d-flex flex-column gap-16'>
                      <div className='form-check common-check mb-0'>
                        <input
                          className='form-check-input bg-main-25'
                          type='checkbox'
                          name='tutorType'
                          id='All'
                        />
                        <label
                          className='form-check-label fw-normal flex-grow-1'
                          htmlFor='All'
                        >
                          Tous
                        </label>
                      </div>
                      <div className='form-check common-check mb-0'>
                        <input
                          className='form-check-input bg-main-25'
                          type='checkbox'
                          name='tutorType'
                          id='Shoes'
                        />
                        <label
                          className='form-check-label fw-normal flex-grow-1'
                          htmlFor='Shoes'
                        >
                          Startup
                        </label>
                      </div>
                      <div className='form-check common-check mb-0'>
                        <input
                          className='form-check-input bg-main-25'
                          type='checkbox'
                          name='tutorType'
                          id='Apparel'
                        />
                        <label
                          className='form-check-label fw-normal flex-grow-1'
                          htmlFor='Apparel'
                        >
                          Mentor
                        </label>
                      </div>
                      <div className='form-check common-check mb-0'>
                        <input
                          className='form-check-input bg-main-25'
                          type='checkbox'
                          name='tutorType'
                          id='Accessories'
                        />
                        <label
                          className='form-check-label fw-normal flex-grow-1'
                          htmlFor='Accessories'
                        >
                          Investisseur
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className=''>
                    <h6 className='text-lg mb-20 fw-medium'>Color</h6>
                    <div className='color-list d-flex flex-wrap align-items-center gap-12'>
                      <button
                        type='button'
                        className='color-list__button w-24 h-24 bg-color-black rounded-circle'
                      />
                      <button
                        type='button'
                        className='color-list__button w-24 h-24 bg-color-deep-green rounded-circle'
                      />
                      <button
                        type='button'
                        className='color-list__button w-24 h-24 bg-color-violet rounded-circle'
                      />
                      <button
                        type='button'
                        className='color-list__button w-24 h-24 bg-color-info rounded-circle'
                      />
                      <button
                        type='button'
                        className='color-list__button w-24 h-24 bg-color-light-green rounded-circle'
                      />
                      <button
                        type='button'
                        className='color-list__button w-24 h-24 bg-color-yellow rounded-circle'
                      />
                      <button
                        type='button'
                        className='color-list__button w-24 h-24 bg-color-danger rounded-circle'
                      />
                      <button
                        type='button'
                        className='color-list__button w-24 h-24 bg-color-blue rounded-circle'
                      />
                      <button
                        type='button'
                        className='color-list__button w-24 h-24 bg-color-paste rounded-circle'
                      />
                      <button
                        type='button'
                        className='color-list__button w-24 h-24 bg-color-warning rounded-circle'
                      />
                    </div>
                  </div>
                  <div className=''>
                    <div>
                      <h6 className='text-lg mb-20 fw-medium'>Pricing scale</h6>
                      <div className='custom--range'>
                        <ReactSlider
                          className='horizontal-slider'
                          thumbClassName='thumb'
                          trackClassName='track'
                          defaultValue={[100, 1000]}
                          min={0}
                          max={1000}
                          value={values}
                          onChange={(newValues) => setValues(newValues)}
                          pearling
                          minDistance={10}
                        />
                        <div className='custom--range__content'>
                          <input
                            type='text'
                            id='amount'
                            readOnly
                            className='custom--range__prices text-neutral-600 text-start text-md fw-medium w-100 text-center bg-transparent border-0 outline-0'
                            value={`$${values[0]} - $${values[1]}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=''>
                    <h6 className='text-lg mb-20 fw-medium'>Star Category</h6>
                    <div className='d-flex flex-column gap-16'>
                      <div className='flex-between gap-16'>
                        <div className='form-check common-check mb-0'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            name='categories'
                            id='star5'
                          />
                          <label
                            className='form-check-label fw-normal flex-grow-1 flex-align gap-8'
                            htmlFor='star5'
                          >
                            <span className='text-warning-600 text-xl d-flex'>
                              <i className='ph-fill ph-star' />
                            </span>
                            5 Star
                          </label>
                        </div>
                      </div>
                      <div className='flex-between gap-16'>
                        <div className='form-check common-check mb-0'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            name='categories'
                            id='star4'
                          />
                          <label
                            className='form-check-label fw-normal flex-grow-1 flex-align gap-8'
                            htmlFor='star4'
                          >
                            <span className='text-warning-600 text-xl d-flex'>
                              <i className='ph-fill ph-star' />
                            </span>
                            4 Star
                          </label>
                        </div>
                      </div>
                      <div className='flex-between gap-16'>
                        <div className='form-check common-check mb-0'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            name='categories'
                            id='star3'
                          />
                          <label
                            className='form-check-label fw-normal flex-grow-1 flex-align gap-8'
                            htmlFor='star3'
                          >
                            <span className='text-warning-600 text-xl d-flex'>
                              <i className='ph-fill ph-star' />
                            </span>
                            3 Star
                          </label>
                        </div>
                      </div>
                      <div className='flex-between gap-16'>
                        <div className='form-check common-check mb-0'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            name='categories'
                            id='star2'
                          />
                          <label
                            className='form-check-label fw-normal flex-grow-1 flex-align gap-8'
                            htmlFor='star2'
                          >
                            <span className='text-warning-600 text-xl d-flex'>
                              <i className='ph-fill ph-star' />
                            </span>
                            2 Star
                          </label>
                        </div>
                      </div>
                      <div className='flex-between gap-16'>
                        <div className='form-check common-check mb-0'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            name='categories'
                            id='star1s'
                          />
                          <label
                            className='form-check-label fw-normal flex-grow-1 flex-align gap-8'
                            htmlFor='star1s'
                          >
                            <span className='text-warning-600 text-xl d-flex'>
                              <i className='ph-fill ph-star' />
                            </span>
                            1 Star
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className='d-block border border-neutral-30 border-dashed my-32' />
                <button
                  type='reset'
                  className='btn btn-outline-main rounded-pill flex-center gap-16 fw-semibold w-100'
                >
                  <i className='ph-bold ph-arrow-clockwise d-flex text-lg' />
                  Reset Filters
                </button>
              </form>
            </div>
          </div>
          <div className='col-lg-9'>
            <div className='flex-between gap-16 flex-wrap mb-40'>
              <span className='text-neutral-500'>
                Showing 9 of 600 Results{" "}
              </span>
              <div className='flex-align gap-16'>
                <div className='flex-align gap-8'>
                  <span className='text-neutral-500 flex-shrink-0'>
                    Sort By :
                  </span>
                  <select className='form-select ps-20 pe-28 py-8 fw-medium rounded-pill bg-main-25 border border-neutral-30 text-neutral-700'>
                    <option value={1}>Newest</option>
                    <option value={1}>Trending</option>
                    <option value={1}>Popular</option>
                  </select>
                </div>
                <button
                  type='button'
                  onClick={sidebarControl}
                  className='list-bar-btn text-xl w-40 h-40 bg-main-600 text-white rounded-8 flex-center d-lg-none'
                >
                  <i className='ph-bold ph-funnel' />
                </button>
              </div>
            </div>
              <div className="border-bottom mb-4">
  <div className="d-flex overflow-auto px-2" style={{ whiteSpace: "nowrap" }}>
    <ul className="nav nav-tabs gap-3 border-0 flex-nowrap">
      <li className="nav-item position-relative">
              <button 
                className={`nav-link fw-bold ${activeTab === 'startups' ? 'active text-dark' : 'text-secondary'}`}
                onClick={() => setActiveTab('startups')}
              >
                Startups <span className="text-danger">(169685)</span>
                {activeTab === 'startups' && (
                  <div
                    className="position-absolute start-0 bottom-0 w-100"
                    style={{
                      height: "3px",
                      background: "linear-gradient(to right, orange, pink)",
                      borderRadius: "10px"
                    }}
                  ></div>
                )}
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'mentors' ? 'active text-dark fw-bold' : 'text-secondary'}`}
                onClick={() => setActiveTab('mentors')}
              >
                Mentors
                {activeTab === 'mentors' && (
                  <div
                    className="position-absolute start-0 bottom-0 w-100"
                    style={{
                      height: "3px",
                      background: "linear-gradient(to right, orange, pink)",
                      borderRadius: "10px"
                    }}
                  ></div>
                )}
              </button>
            </li>
<li className="nav-item">
  <button 
    className={`nav-link ${activeTab === 'investors' ? 'active text-dark fw-bold' : 'text-secondary'}`}
    onClick={() => setActiveTab('investors')}
  >
    Investors
    {activeTab === 'investors' && (
      <div
        className="position-absolute start-0 bottom-0 w-100"
        style={{
          height: "3px",
          background: "linear-gradient(to right, orange, pink)",
          borderRadius: "10px"
        }}
      ></div>
    )}
  </button>
</li>      
<li className="nav-item">
  <button 
    className={`nav-link ${activeTab === 'accelerators' ? 'active text-dark fw-bold' : 'text-secondary'}`}
    onClick={() => setActiveTab('accelerators')}
  >
    Accelerators
    {activeTab === 'accelerators' && (
      <div className="position-absolute start-0 bottom-0 w-100"
        style={{
          height: "3px",
          background: "linear-gradient(to right, orange, pink)",
          borderRadius: "10px"
        }}
      ></div>
    )}
  </button>
</li>

<li className="nav-item">
  <button 
    className={`nav-link ${activeTab === 'incubators' ? 'active text-dark fw-bold' : 'text-secondary'}`}
    onClick={() => setActiveTab('incubators')}
  >
    Incubators
    {activeTab === 'incubators' && (
      <div className="position-absolute start-0 bottom-0 w-100"
        style={{
          height: "3px",
          background: "linear-gradient(to right, orange, pink)",
          borderRadius: "10px"
        }}
      ></div>
    )}
  </button>
</li>

<li className="nav-item">
  <button 
    className={`nav-link ${activeTab === 'corporates' ? 'active text-dark fw-bold' : 'text-secondary'}`}
    onClick={() => setActiveTab('corporates')}
  >
    Corporates
    {activeTab === 'corporates' && (
      <div className="position-absolute start-0 bottom-0 w-100"
        style={{
          height: "3px",
          background: "linear-gradient(to right, orange, pink)",
          borderRadius: "10px"
        }}
      ></div>
    )}
  </button>
</li>

<li className="nav-item">
  <button 
    className={`nav-link ${activeTab === 'governmentBodies' ? 'active text-dark fw-bold' : 'text-secondary'}`}
    onClick={() => setActiveTab('governmentBodies')}
  >
    Government Bodies
    {activeTab === 'governmentBodies' && (
      <div className="position-absolute start-0 bottom-0 w-100"
        style={{
          height: "3px",
          background: "linear-gradient(to right, orange, pink)",
          borderRadius: "10px"
        }}
      ></div>
    )}
  </button>
</li>
    </ul>
  </div>
</div>

<br/>
<br/>
            <div className='row gy-4'>
  {activeTab === 'startups' && startups.map((startup, index) => (
    <div className="col-md-4 col-sm-6 col-xs-6" key={index}>
      <div className="scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md">
        <div className="course-item__thumb rounded-12 bg-main-25 overflow-hidden position-relative max-h-unset min-h-252">
          <Link
            to={`/startups/${startup._id}`}
            className="w-100 h-100 d-flex justify-content-center align-items-center min-h-inherit"
          >
            <img
              src={startup.logoUrl || "assets/images/thumbs/product-img1.png"}
              alt={startup.name}
              className="scale-hover-item__img rounded-12 transition-2"
              style={{ maxHeight: "150px", objectFit: "contain" }}
            />
          </Link>
          <div className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 d-flex align-items-center justify-content-between p-16">
            <button className="add-to-cart active-scale-08 w-40 h-40 rounded-8 d-flex justify-content-center align-items-center bg-white box-shadow-md text-neutral-500 text-lg hover-bg-main-100 hover-text-main-600 transition-2 ms-auto">
              <i className="ph ph-shopping-cart" />
            </button>
          </div>
        </div>
        <div className="pt-32 pb-24 px-16 position-relative">
          <div>
            <div className="d-flex align-items-center justify-content-between mb-16">
              <h5 className="mb-0">
                <Link to={`/startups/${startup._id}`} className="link text-line-1">
                  {startup.name}
                </Link>
              </h5>
              <span className="text-neutral-500">{startup.city || "Ville inconnue"}</span>
            </div>
            <div className="flex-between gap-8 flex-wrap">
              <div className="flex-align gap-4">
                <span className="badge bg-info text-white">
                  {startup.stage}
                </span>
              </div>
              <h6 className="text-main-600 mb-0">{startup.industry}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}

  {activeTab === 'mentors' && (
    <>
      {loading ? (
        <div className="text-center py-5">Chargement des mentors...</div>
      ) : mentors.length > 0 ? (
        mentors.map(mentor => (
          <div key={mentor._id} className='col-md-4 col-sm-6 col-xs-6 mb-4'>
            <div className='scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md'>
              <div className='course-item__thumb rounded-12 bg-main-25 overflow-hidden position-relative max-h-unset min-h-252'>
                <div className='w-100 h-100 d-flex justify-content-center align-items-center min-h-inherit'>
                  {mentor.photoUrl ? (
                    <img
                      src={mentor.photoUrl}
                      alt={mentor.fullName}
                      className='scale-hover-item__img rounded-12 transition-2'
                    />
                  ) : (
                    <div className="bg-light d-flex justify-content-center align-items-center w-100 h-100">
                      <i className="ph ph-user text-4xl text-muted"></i>
                    </div>
                  )}
                </div>
              </div>
              <div className='pt-32 pb-24 px-16 position-relative'>
                <div>
                  <div className='d-flex align-items-center justify-content-between mb-16'>
                    <h5 className='mb-0'>
                      <span className='link text-line-1'>
                        {mentor.fullName}
                      </span>
                    </h5>
                  </div>
                  <div className='flex-between gap-8 flex-wrap'>
                    <div className="w-100">
                      <p className="text-neutral-700 mb-2">
                        <i className="ph ph-map-pin me-2"></i>
                        {mentor.location || 'Non spécifié'}
                      </p>
                      <div className="d-flex flex-wrap gap-2">
                        {mentor.expertise?.slice(0, 3).map((skill, index) => (
                          <span key={index} className="badge bg-light text-dark">
                            {skill}
                          </span>
                        ))}
                        {mentor.expertise?.length > 3 && (
                          <span className="badge bg-light text-dark">
                            +{mentor.expertise.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-5">Aucun mentor trouvé</div>
      )}
    </>
  )}

  {activeTab === 'investors' && (
  <div className="row">
    {loadingInvestors ? (
      <div className="text-center py-5">Chargement des investisseurs...</div>
    ) : investors.length > 0 ? (
      investors.map(investor => (
        <div key={investor._id} className='col-md-4 col-sm-6 col-xs-6 mb-4'>
          <div className='scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md'>
            <div className='course-item__thumb rounded-12 bg-main-25 overflow-hidden position-relative max-h-unset min-h-252'>
              <div className='w-100 h-100 d-flex justify-content-center align-items-center min-h-inherit'>
                <div className="bg-light d-flex justify-content-center align-items-center w-100 h-100">
                  <i className={`ph ${getInvestorIcon(investor.type)} text-4xl text-muted`}></i>
                </div>
              </div>
            </div>
            <div className='pt-32 pb-24 px-16 position-relative'>
              <div>
                <div className='d-flex align-items-center justify-content-between mb-16'>
                  <h5 className='mb-0'>
                    <span className='link text-line-1'>
                      {investor.name}
                    </span>
                  </h5>
                  <span className={`badge ${getInvestorBadgeClass(investor.type)}`}>
                    {investor.type}
                  </span>
                </div>
                <div className='flex-between gap-8 flex-wrap'>
                  <div className="w-100">
                    <p className="text-neutral-700 mb-2">
                      <i className="ph ph-map-pin me-2"></i>
                      {investor.location || 'Non spécifié'}
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      {investor.sectorsInterestedIn?.slice(0, 3).map((sector, index) => (
                        <span key={index} className="badge bg-light text-dark">
                          {sector}
                        </span>
                      ))}
                      {investor.sectorsInterestedIn?.length > 3 && (
                        <span className="badge bg-light text-dark">
                          +{investor.sectorsInterestedIn.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="text-center py-5">Aucun investisseur trouvé</div>
    )}
  </div>
)}<br/>
{['accelerators', 'incubators', 'corporates', 'governmentBodies'].includes(activeTab) && (
  <div className="row">
    {loadingOrgs ? (
      <div className="text-center py-5">Chargement des organisations...</div>
    ) : organizations.length > 0 ? (
      organizations.map(org => (
        <div key={org._id} className='col-md-4 col-sm-6 col-xs-6 mb-4'>
          <div className='scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md'>
            <div className='course-item__thumb rounded-12 bg-main-25 overflow-hidden position-relative max-h-unset min-h-252'>
              <div className='w-100 h-100 d-flex justify-content-center align-items-center min-h-inherit'>
                <div className="bg-light d-flex justify-content-center align-items-center w-100 h-100">
                  <i className={`ph ${getOrgIcon(org.type)} text-4xl text-muted`}></i>
                </div>
              </div>
            </div>
            <div className='pt-32 pb-24 px-16 position-relative'>
              <div>
                <div className='d-flex align-items-center justify-content-between mb-16'>
                  <h5 className='mb-0'>
                    <span className='link text-line-1'>
                      {org.name}
                    </span>
                  </h5>
                  <span className={`badge ${getOrgBadgeClass(org.type)}`}>
                    {org.type}
                  </span>
                </div>
                <div className='flex-between gap-8 flex-wrap'>
                  <div className="w-100">
                    <p className="text-neutral-700 mb-2">
                      <i className="ph ph-map-pin me-2"></i>
                      {org.location || 'Non spécifié'}
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      {org.sectors?.slice(0, 3).map((sector, index) => (
                        <span key={index} className="badge bg-light text-dark">
                          {sector}
                        </span>
                      ))}
                      {org.sectors?.length > 3 && (
                        <span className="badge bg-light text-dark">
                          +{org.sectors.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="text-center py-5">Aucune organisation trouvée</div>
    )}
  </div>
)}
</div>
            <ul className='pagination mt-40 flex-align gap-12 flex-wrap justify-content-center'>
              <li className='page-item'>
                <Link
                  className='page-link text-neutral-700 fw-semibold w-40 h-40 bg-main-25 rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0'
                  to='#'
                >
                  <i className='ph-bold ph-caret-left' />
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link text-neutral-700 fw-semibold w-40 h-40 bg-main-25 rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0'
                  to='#'
                >
                  1
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link text-neutral-700 fw-semibold w-40 h-40 bg-main-25 rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0'
                  to='#'
                >
                  2
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link text-neutral-700 fw-semibold w-40 h-40 bg-main-25 rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0'
                  to='#'
                >
                  3
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link text-neutral-700 fw-semibold w-40 h-40 bg-main-25 rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0'
                  to='#'
                >
                  ...
                </Link>
              </li>
              <li className='page-item'>
                <Link
                  className='page-link text-neutral-700 fw-semibold w-40 h-40 bg-main-25 rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0'
                  to='#'
                >
                  <i className='ph-bold ph-caret-right' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsInner;
