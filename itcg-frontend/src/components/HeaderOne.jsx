import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Select from "react-select";

const HeaderTwo = () => {
  let { pathname } = useLocation();
  const [scroll, setScroll] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const [selectedOption, setSelectedOption] = useState(null);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    if (!isMenuActive) {
      document.body.classList.add("scroll-hide-sm");
    } else {
      document.body.classList.remove("scroll-hide-sm");
    }
  };

  const closeMenu = () => {
    setIsMenuActive(false);
    document.body.classList.remove("scroll-hide-sm");
  };

  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmenuClick = (index) => {
    if (windowWidth < 992) {
      setActiveSubmenu((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  // Nouveau menuItems selon le header précédent
 const menuItems = [
    {
      label: "À propos",
      links: [
        { to: "/about-Two", label: "Initiative ITCG" },
        // { to: "#", label: "Demander le logo ITCG" },
        { to: "/blog", label: "Bulletin d'information" },
        { to: "/faq", label: "Questions fréquentes (FAQ)" },
        { to: "/plan-itcg.pdf", label: "Plan d'action d'ITCG", external: true },
        { to: "/contact", label: "Contactez-nous" },
        { to: "#", label: "Évolution d'ITCG | Rapport sur 5 ans" },
        { to: "#", label: "ITCG | Perspectives d’avenir" },
      ],
    },
    {
      label: "Reconnaissance",
      links: [
        // { to: "#", label: "Prabhaav | Livre de faits – 9 ans" },
        { to: "/about-four", label: "Reconnaissance et avantages de l’ITCG" },
        { to: "/reconnaissance", label: "Demander la reconnaissance ITCG" },
        { to: "/garantie", label: "Demander des exonérations fiscales" },
        { to: "/verifier-le-certificat", label: "Vérifier/Télécharger le certificat" },
        // { to: "#", label: "Accéder/Modifier les détails du certificat" },
        { to: "#", label: "Directives de reconnaissance ITCG" },
        { to: "/avis", label: "Notifications d’exonération d’impôt sur le revenu" },
        // { to: "#", label: "Registre de l’écosystème des startups Bharat" },
      ],
    },
    {
      label: "Financement",
      links: [
        { to: "/about", label: "Programme de fonds d’amorçage ITCG" },
        // { to: "#", label: "ITCG Investor Connect" },
        { to: "/privacy-policy", label: "Schéma de garantie de crédit pour startups" },
        { to: "/about", label: "Guide de financement" },
        { to: "/privacy-policy", label: "Programmes et politiques" },
      ],
    },
    {
      label: "Régime",
      links: [
        { to: "/event-details", label: "Support réglementaire ITCG" },
        { to: "/privacy-policy", label: "Programmes et politiques du gouvernement central" },
        { to: "/about-three", label: "Entrepreneuriat féminin" },
        { to: "/instructor-two", label: "Cadre des incubateurs" },
        { to: "/privacy-policy", label: "Découvrez les politiques startup de votre État/UT" },
      ],
    },
    {
      label: "Accès au marché",
      links: [
        { to: "#", label: "Programmes et défis" },
        { to: "/gotomarketguide", label: "Guide Go-to-Market" },
        { to: "#", label: "Engagement international" },
        { to: "#", label: "Achats par le gouvernement" },
        { to: "#", label: "Partenariat avec nous" },
      ],
    },
    {
      label: "Initiative",
      links: [
        // { to: "#", label: "Prix Nationaux des Startups 5.0" },
        // { to: "#", label: "BRICS 2025" },
        { to: "#", label: "Journée Nationale des Startups 2025" },
        { to: "#", label: "Classement des Écosystèmes Startup des États" },
        // { to: "#", label: "Forum Startup de l'Organisation de Coopération de Shanghai (OCS)" },
        { to: "/about", label: "Programme de Financement Seed itcg" },
        { to: "#", label: "Plateforme de Mentorat" },
        // { to: "#", label: "Startup Investor Connect" },
      ],
    },
    {
      label: "Ressources",
      links: [
        { to: "/course-list-view", label: "Formation en ligne" },
        { to: "#", label: "Services partenaires pour startups enregistrées" },
        { to: "#", label: "Rapports d’études de marché" },
        { to: "#", label: "Droits de propriété intellectuelle" },
        { to: "#", label: "Banque d’idées startup" },
        { to: "/blog", label: "Blogs itcg" },
        { to: "#", label: "Guide du startup" },
        { to: "#", label: "Explorer plus" },
      ],
    },
    {
      label: "Réseau",
      links: [
        { to: "#", label: "Plateforme de mentorat MAG" },
        { to: "/product", label: "Startups" },
        { to: "#", label: "Mentors" },
        { to: "#", label: "Incubateurs" },
        { to: "#", label: "Investisseurs" },
        { to: "#", label: "Entreprises/Accélérateurs" },
        { to: "#", label: "Organismes gouvernementaux" },
        { to: "#", label: "Carte de l’écosystème" },
      ],
    },
  ];

  return (
    <>
      <div className={`side-overlay ${isMenuActive ? "show" : ""}`}></div>

      {/* header top */}
      <div className='header-top bg-main-25 border-bottom border-neutral-20'>
        <div className='container'>
          <div className='flex-between gap-24'>
            {/* Logo Start */}
            <div className='logo'>
              <Link to='/' className='link'>
                <img src='assets/images/logo/logo.png' alt='Logo' />
              </Link>
            </div>
            {/* Logo End  */}
            {/* Search Start */}
            <div className='d-md-flex d-none bg-white  rounded-pill p-8 ps-24 pe-56 position-relative d-flex align-items-center  min-w-320 max-w-708 w-100'>
              <form action='#' className='  w-100 ms-5'>
                <input
                  type='text'
                  className='common-input border-0 px-0 py-10'
                  placeholder='Search...'
                />
                <button
                  type='submit'
                  className='w-44 h-44 bg-main-600 hover-bg-main-700 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8'
                >
                  <i className='ph-bold ph-magnifying-glass' />
                </button>
              </form>
            </div>
            {/* Search End */}
            {/* Buttons Start */}
            <div className='d-lg-flex d-none flex-align flex-md-nowrap flex-wrap gap-16 flex-shrink-0'>
              <Link
                to='/sign-in'
                className='btn btn-outline-main rounded-pill flex-align gap-8'
              >
                Sign In
                <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
              </Link>
              <Link
                to='/sign-up'
                className='btn btn-main rounded-pill flex-align gap-8'
              >
                Sign Up
                <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
              </Link>
            </div>
            <Link
              to='/login'
              className='d-lg-none flex-shrink-0 w-52 h-52 bg-white hover-bg-main-600 border border-neutral-30 rounded-circle flex-center text-2xl text-neutral-500 hover-text-white hover-border-main-600'
            >
              <i className='ph ph-user-circle' />
            </Link>
            {/* Buttons End */}
          </div>
        </div>
      </div>

      {/* header */}
      <header
        className={`header border-bottom-0 bg-white ${
          scroll ? "fixed-header" : ""
        }`}
      >
        <div className='container'>
          <nav className='header-inner flex-between gap-8'>
            {/* Menu Start  */}
            <div className='header-menu d-lg-block d-none'>
              <ul className='nav-menu flex-align'>
                {menuItems.map((item, index) =>
                  item.links ? (
                    <li
                      key={`menu-item-${index}`}
                      className='nav-menu__item has-submenu'
                    >
                      <Link to='#' className='nav-menu__link'>
                        {item.label}
                      </Link>
                      <ul className={`nav-submenu scroll-sm`}>
                        {item.links.map((link, linkIndex) => (
                          <li
                            key={`submenu-item-${linkIndex}`}
                            className={`nav-submenu__item ${
                              pathname === link.to && "activePage"
                            }`}
                          >
                           {link.external ? (
  <a
    href={link.to}
    target='_blank'
    rel='noopener noreferrer'
    className='nav-submenu__link hover-bg-neutral-30'
  >
    {link.label}
  </a>
) : (
  <Link
    to={link.to}
    className='nav-submenu__link hover-bg-neutral-30'
  >
    {link.label}
  </Link>
)}

                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li
                      key={`menu-item-${index}`}
                      className='nav-menu__item active'
                    >
                      <Link to={item.to} className='nav-menu__link'>
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            {/* Menu End  */}
          </nav>
        </div>
      </header>

      <div
        className={`mobile-menu scroll-sm d-lg-none d-block ${
          isMenuActive ? "active" : ""
        }`}
      >
        <button type='button' className='close-button' onClick={closeMenu}>
          <i className='ph ph-x' />{" "}
        </button>
        <div className='mobile-menu__inner'>
          <Link to='/' className='mobile-menu__logo'>
            <img src='assets/images/logo/logo.png' alt='Logo' />
          </Link>
          <div className='mobile-menu__menu'>
            <ul className='nav-menu flex-align nav-menu--mobile'>
              {menuItems.map((item, index) =>
                item.links ? (
                  <li
                    key={`menu-item-${index}`}
                    className={`nav-menu__item has-submenu ${
                      activeSubmenu === index ? "activePage" : ""
                    }`}
                    onClick={() => handleSubmenuClick(index)}
                  >
                    <span className='nav-menu__link'>{item.label}</span>
                    <ul className={`nav-submenu scroll-sm`}>
                      {item.links.map((link, linkIndex) => (
                        <li key={linkIndex} className='nav-submenu__item'>
                          {link.external ? (
  <a
    href={link.to}
    target='_blank'
    rel='noopener noreferrer'
    className='nav-submenu__link hover-bg-neutral-30'
  >
    {link.label}
  </a>
) : (
  <Link
    to={link.to}
    className='nav-submenu__link hover-bg-neutral-30'
  >
    {link.label}
  </Link>
)}

                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className='nav-menu__item' key={index}>
                    <Link to={item.to} className='nav-menu__link'>
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTwo;