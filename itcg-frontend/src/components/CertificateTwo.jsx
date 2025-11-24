import { Link } from "react-router-dom";

const CertificateTwo = () => {
  const stages = [
    {
      title: "Création de l'Association",
      icon: "ph-medal",
      description: "Cette étape est cruciale pour la création de votre association : enregistrement, statut juridique, etc.",
      link: "/creation-association", // Lien vers une page dédiée à la création de l'association
    },
    {
      title: "Mise en Place des Activités",
      icon: "ph-clock",
      description: "Il s'agit d'organiser vos activités, de structurer vos projets et de préparer vos ressources.",
      link: "/mise-en-place-activites", // Lien vers une page dédiée à la mise en place des activités
    },
    {
      title: "Croissance et Mobilisation",
      icon: "ph-star",
      description: "Votre association commence à prendre de l'ampleur, avec une augmentation des bénévoles et des projets porteurs.",
      link: "/croissance-mobilisation", // Lien vers une page dédiée à la croissance et à la mobilisation
    },
    {
      title: "Impact et Pérennisation",
      icon: "ph-chart-line-up",
      description: "L'objectif ici est de pérenniser vos actions en mesurant l'impact et en consolidant les partenariats.",
      link: "/impact-perennisation", // Lien vers une page dédiée à l'impact et la pérennisation
    },
  ];

  return (
    <section className="certificate-two py-120 position-relative z-1 mash-bg-main mash-bg-main-two mash-reverse">
      <div className="section-heading text-center">
        <h2 className="mb-24 wow bounceIn">Outils et Ressources pour les Associations</h2>
        <p className="wow bounceInUp">
          Découvrez les outils et ressources mis à disposition pour soutenir l'évolution de votre association à chaque étape de son développement.
        </p>
      </div>

      <div className="position-relative">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6 pe-lg-5">
              {stages.map((stage, index) => (
                <div
                  key={index}
                  className="certificate-two-item animation-item border-bottom border-neutral-50 border-dashed border-0 mb-28 pb-28"
                  data-aos="fade-up"
                  data-aos-duration={200 * (index + 1)}
                >
                  <div className="flex-align gap-20 mb-12">
                    <span className="w-52 h-52 flex-center d-inline-flex bg-main-25 rounded-circle text-main-600 text-2xl">
                      <i className={`animate__wobble ph-bold ${stage.icon}`} />
                    </span>
                    <h5 className="mb-0">{stage.title}</h5>
                  </div>
                  <p className="text-neutral-700 text-line-2">{stage.description}</p>
                  <Link to={stage.link} className="d-inline-block mt-16 text-main-600 fw-semibold hover-underline">
                    En savoir plus <i className="ti-arrow-right ms-1"></i>
                  </Link>
                </div>
              ))}
            </div>
            <div className="col-lg-6">
              <div className="certificate-two__thumb">
                <img
                  src="assets/images/thumbs/certificate-two-img.png"
                  alt="Ressources pour les Associations"
                  data-tilt=""
                  data-tilt-max={10}
                  data-tilt-speed={500}
                  data-tilt-perspective={5000}
                  data-tilt-full-page-listening=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateTwo;
