import { Link } from "react-router-dom";

const BlogGridInner = () => {
  return (
    <div className='blog-page-section py-120'>
      <div className='container'>
        <div className='flex-between gap-16 flex-wrap mb-40'>
          <span className='text-neutral-500'>Showing 9 of 600 Results </span>
          <div className='flex-align gap-16'>
            <div className='flex-align gap-8'>
              <span className='text-neutral-500 flex-shrink-0'>Sort By :</span>
              <select className='form-select ps-20 pe-28 py-8 fw-medium rounded-pill bg-main-25 border border-neutral-30 text-neutral-700'>
                <option value={1}>Newest</option>
                <option value={1}>Trending</option>
                <option value={1}>Popular</option>
              </select>
            </div>
            <button
              type='button'
              className='list-bar-btn text-xl w-40 h-40 bg-main-600 text-white rounded-8 flex-center d-lg-none'
            >
              <i className='ph-bold ph-funnel' />
            </button>
          </div>
        </div>
        <div className='row gy-4'>
          <div className='col-lg-4 col-sm-6'>
            <div className='scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30'>
              <div className='course-item__thumb rounded-12 overflow-hidden position-relative'>
                <Link to='/blog-details' className='w-100 h-100'>
                  <img
                    src='assets/images/thumbs/maison-association-1.png'
                    alt='Evenement Associatif'
                    className='scale-hover-item__img rounded-12 cover-img transition-2'
                  />
                </Link>
                <div className='position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-three-600 text-white fw-medium'>
                  <h3 className='mb-0 text-white fw-medium'>15</h3>
                  NOV
                </div>
              </div>
              <div className='pt-32 pb-24 px-16 position-relative'>
                <h4 className='mb-28'>
                  <Link to='/blog-details' className='link text-line-2'>
                    Ateliers pour les bénévoles : Renforcer l'engagement associatif
                  </Link>
                </h4>
                <div className='flex-align gap-14 flex-wrap my-20'>
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 text-2xl d-flex'>
                      <i className='ph ph-user-circle' />
                    </span>
                    <span className='text-neutral-500 text-lg'>Par Maison des Associations</span>
                  </div>
                  <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 text-2xl d-flex'>
                      <i className='ph-bold ph-eye' />
                    </span>
                    <span className='text-neutral-500 text-lg'>450 Views</span>
                  </div>
                  <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 text-2xl d-flex'>
                      <i className='ph ph-chat-dots' />
                    </span>
                    <span className='text-neutral-500 text-lg'>12 Comments</span>
                  </div>
                </div>
                <div className='flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                  <Link
                    to='/blog-details'
                    className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                    tabIndex={0}
                  >
                    Lire la suite
                    <i className='ph ph-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Ajout d'autres éléments similaires */}
          
          <div className='col-lg-4 col-sm-6'>
            <div className='scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30'>
              <div className='course-item__thumb rounded-12 overflow-hidden position-relative'>
                <Link to='/blog-details' className='w-100 h-100'>
                  <img
                    src='assets/images/thumbs/maison-association-2.png'
                    alt='Evenement Associatif'
                    className='scale-hover-item__img rounded-12 cover-img transition-2'
                  />
                </Link>
                <div className='position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-three-600 text-white fw-medium'>
                  <h3 className='mb-0 text-white fw-medium'>20</h3>
                  NOV
                </div>
              </div>
              <div className='pt-32 pb-24 px-16 position-relative'>
                <h4 className='mb-28'>
                  <Link to='/blog-details' className='link text-line-2'>
                    Les nouvelles initiatives solidaires dans notre région
                  </Link>
                </h4>
                <div className='flex-align gap-14 flex-wrap my-20'>
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 text-2xl d-flex'>
                      <i className='ph ph-user-circle' />
                    </span>
                    <span className='text-neutral-500 text-lg'>Par Maison des Associations</span>
                  </div>
                  <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 text-2xl d-flex'>
                      <i className='ph-bold ph-eye' />
                    </span>
                    <span className='text-neutral-500 text-lg'>300 Views</span>
                  </div>
                  <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 text-2xl d-flex'>
                      <i className='ph ph-chat-dots' />
                    </span>
                    <span className='text-neutral-500 text-lg'>15 Comments</span>
                  </div>
                </div>
                <div className='flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                  <Link
                    to='/blog-details'
                    className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                    tabIndex={0}
                  >
                    Lire la suite
                    <i className='ph ph-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
                   <div className='col-lg-4 col-sm-6'>
            <div className='scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30'>
              <div className='course-item__thumb rounded-12 overflow-hidden position-relative'>
                <Link to='/blog-details' className='w-100 h-100'>
                  <img
                    src='assets/images/thumbs/maison-association-3.png'
                    alt='Initiative solidaire'
                    className='scale-hover-item__img rounded-12 cover-img transition-2'
                  />
                </Link>
                <div className='position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-three-600 text-white fw-medium'>
                  <h3 className='mb-0 text-white fw-medium'>05</h3>
                  NOV
                </div>
              </div>
              <div className='pt-32 pb-24 px-16 position-relative'>
                <h4 className='mb-28'>
                  <Link to='/blog-details' className='link text-line-2'>
                    Soutien aux familles : Projets de solidarité locale
                  </Link>
                </h4>
                <div className='flex-align gap-14 flex-wrap my-20'>
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 text-2xl d-flex'>
                      <i className='ph ph-user-circle' />
                    </span>
                    <span className='text-neutral-500 text-lg'>Par Maison des Associations</span>
                  </div>
                  <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 text-2xl d-flex'>
                      <i className='ph-bold ph-eye' />
                    </span>
                    <span className='text-neutral-500 text-lg'>850 Views</span>
                  </div>
                  <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 text-2xl d-flex'>
                      <i className='ph ph-chat-dots' />
                    </span>
                    <span className='text-neutral-500 text-lg'>30 Comments</span>
                  </div>
                </div>
                <div className='flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                  <Link
                    to='/blog-details'
                    className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                    tabIndex={0}
                  >
                    Lire la suite
                    <i className='ph ph-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-sm-6'>
            <div className='scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30'>
              <div className='course-item__thumb rounded-12 overflow-hidden position-relative'>
                <Link to='/blog-details' className='w-100 h-100'>
                  <img
                    src='assets/images/thumbs/maison-association-4.png'
                    alt='Soutien aux bénévoles'
                    className='scale-hover-item__img rounded-12 cover-img transition-2'
                  />
                </Link>
                <div className='position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-three-600 text-white fw-medium'>
                  <h3 className='mb-0 text-white fw-medium'>10</h3>
                  NOV
                </div>
              </div>
              <div className='pt-32 pb-24 px-16 position-relative'>
                <h4 className='mb-28'>
                  <Link to='/blog-details' className='link text-line-2'>
                    Comment soutenir les bénévoles de votre association ?
                  </Link>
                </h4>
                <div className='flex-align gap-14 flex-wrap my-20'>
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 text-2xl d-flex'>
                      <i className='ph ph-user-circle' />
                    </span>
                    <span className='text-neutral-500 text-lg'>Par Maison des Associations</span>
                  </div>
                  <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 text-2xl d-flex'>
                      <i className='ph-bold ph-eye' />
                    </span>
                    <span className='text-neutral-500 text-lg'>560 Views</span>
                  </div>
                  <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 text-2xl d-flex'>
                      <i className='ph ph-chat-dots' />
                    </span>
                    <span className='text-neutral-500 text-lg'>22 Comments</span>
                  </div>
                </div>
                <div className='flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                  <Link
                    to='/blog-details'
                    className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                    tabIndex={0}
                  >
                    Lire la suite
                    <i className='ph ph-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-sm-6'>
            <div className='scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30'>
              <div className='course-item__thumb rounded-12 overflow-hidden position-relative'>
                <Link to='/blog-details' className='w-100 h-100'>
                  <img
                    src='assets/images/thumbs/maison-association-5.png'
                    alt='Jeune public et culture'
                    className='scale-hover-item__img rounded-12 cover-img transition-2'
                  />
                </Link>
                <div className='position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-three-600 text-white fw-medium'>
                  <h3 className='mb-0 text-white fw-medium'>03</h3>
                  NOV
                </div>
              </div>
              <div className='pt-32 pb-24 px-16 position-relative'>
                <h4 className='mb-28'>
                  <Link to='/blog-details' className='link text-line-2'>
                    L'impact de la culture sur les jeunes : Programme 2024
                  </Link>
                </h4>
                <div className='flex-align gap-14 flex-wrap my-20'>
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 text-2xl d-flex'>
                      <i className='ph ph-user-circle' />
                    </span>
                    <span className='text-neutral-500 text-lg'>Par Maison des Associations</span>
                  </div>
                  <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 text-2xl d-flex'>
                      <i className='ph-bold ph-eye' />
                    </span>
                    <span className='text-neutral-500 text-lg'>720 Views</span>
                  </div>
                  <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 text-2xl d-flex'>
                      <i className='ph ph-chat-dots' />
                    </span>
                    <span className='text-neutral-500 text-lg'>18 Comments</span>
                  </div>
                </div>
                <div className='flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                  <Link
                    to='/blog-details'
                    className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                    tabIndex={0}
                  >
                    Lire la suite
                    <i className='ph ph-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-sm-6'>
            <div className='scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30'>
              <div className='course-item__thumb rounded-12 overflow-hidden position-relative'>
                <Link to='/blog-details' className='w-100 h-100'>
                  <img
                    src='assets/images/thumbs/maison-association-6.png'
                    alt='Formations gratuites'
                    className='scale-hover-item__img rounded-12 cover-img transition-2'
                  />
                </Link>
                <div className='position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-three-600 text-white fw-medium'>
                  <h3 className='mb-0 text-white fw-medium'>19</h3>
                  NOV
                </div>
              </div>
              <div className='pt-32 pb-24 px-16 position-relative'>
                <h4 className='mb-28'>
                  <Link to='/blog-details' className='link text-line-2'>
                    Formations gratuites pour les associations : Comment en bénéficier ?
                  </Link>
                </h4>
                <div className='flex-align gap-14 flex-wrap my-20'>
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 text-2xl d-flex'>
                      <i className='ph ph-user-circle' />
                    </span>
                    <span className='text-neutral-500 text-lg'>Par Maison des Associations</span>
                  </div>
                  <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 text-2xl d-flex'>
                      <i className='ph-bold ph-eye' />
                    </span>
                    <span className='text-neutral-500 text-lg'>890 Views</span>
                  </div>
                  <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 text-2xl d-flex'>
                      <i className='ph ph-chat-dots' />
                    </span>
                    <span className='text-neutral-500 text-lg'>12 Comments</span>
                  </div>
                </div>
                <div className='flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                  <Link
                    to='/blog-details'
                    className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                    tabIndex={0}
                  >
                    Lire la suite
                    <i className='ph ph-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>


        </div>

        {/* Pagination */}
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
  );
};

export default BlogGridInner;
