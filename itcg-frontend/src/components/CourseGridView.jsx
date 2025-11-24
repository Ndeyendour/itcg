import { Link } from "react-router-dom";

const CourseGridView = () => {
  return (
    <section className="course-grid-view py-120">
      <div className="container">
        <div className="section-heading text-center">
          <div className="flex-align d-inline-flex gap-8 mb-16">
            <span className="text-main-600 text-2xl d-flex">
              <i className="ph-bold ph-book-open" />
            </span>
          </div>
          <h2 className="mb-24">Écosystème des Startups - MAG</h2>
          <p>
            Rassembler la communauté des startups locales et internationales grâce à des connexions, du mentorat, et des opportunités de financement et de collaboration.
          </p>
        </div>
        <div className="row gy-4">
          {/* Item 1: Mentorat et Croissance */}
          <div className="col-lg-4 col-sm-6">
            <div className="course-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
              <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <Link to="/course-details" className="w-100 h-100">
                  <img
                    src="assets/images/thumbs/course-img1.png"
                    alt="Mentorat et Croissance"
                    className="course-item__img rounded-12 cover-img transition-2"
                  />
                </Link>
                <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                  <span className="text-lg fw-medium">MAG Mentorat</span>
                </div>
                <button
                  type="button"
                  className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2"
                >
                  <i className="ph ph-heart" />
                </button>
              </div>
              <div className="course-item__content">
                <h4 className="mb-28">
                  <p>
                    Le programme MAG Mentorat fournit une assistance personnalisée pour le développement des startups locales, avec des conseils pratiques et un soutien stratégique pour chaque étape de la croissance.
                  </p>
                </h4>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                  <Link
                    to="/apply-admission"
                    className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                    tabIndex={0}
                  >
                    S'inscrire
                    <i className="ph ph-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Item 2: Programme de Financement */}
          <div className="col-lg-4 col-sm-6">
            <div className="course-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
              <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <Link to="/course-details" className="w-100 h-100">
                  <img
                    src="assets/images/thumbs/course-img2.png"
                    alt="Programme de Financement"
                    className="course-item__img rounded-12 cover-img transition-2"
                  />
                </Link>
                <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                  <span className="text-lg fw-medium">Fonds de Soutien</span>
                </div>
                <button
                  type="button"
                  className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2"
                >
                  <i className="ph ph-heart" />
                </button>
              </div>
              <div className="course-item__content">
                <h4 className="mb-28">
                  <p>
                    Le programme de financement MAG offre des subventions et des investissements pour les projets innovants, soutenant les jeunes entreprises à chaque étape de leur développement.
                  </p>
                </h4>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                  <Link
                    to="/apply-admission"
                    className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                    tabIndex={0}
                  >
                    S'inscrire
                    <i className="ph ph-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Item 3: Réseau de Partenaires */}
          <div className="col-lg-4 col-sm-6">
            <div className="course-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30">
              <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                <Link to="/course-details" className="w-100 h-100">
                  <img
                    src="assets/images/thumbs/course-img3.png"
                    alt="Réseau de Partenaires"
                    className="course-item__img rounded-12 cover-img transition-2"
                  />
                </Link>
                <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                  <span className="text-lg fw-medium">Réseau MAG</span>
                </div>
                <button
                  type="button"
                  className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2"
                >
                  <i className="ph ph-heart" />
                </button>
              </div>
              <div className="course-item__content">
                <h4 className="mb-28">
                  <p>
                    Le Réseau MAG met en relation des startups, des investisseurs, des mentors et des décideurs pour favoriser la collaboration, l'innovation et la croissance.
                  </p>
                </h4>
                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                  <Link
                    to="/apply-admission"
                    className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                    tabIndex={0}
                  >
                    S'inscrire
                    <i className="ph ph-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CourseGridView;
