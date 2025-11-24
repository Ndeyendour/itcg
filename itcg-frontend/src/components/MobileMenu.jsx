// Structure complète du dashboard avec composants découpés
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const dashboardItems = [
  {
    title: 'Total Courses',
    count: '2000+',
    icon: 'assets/images/icons/dashbord-item1.png',
    bgClass: 'bg-main-600',
  },
  {
    title: 'Enrolled Courses',
    count: '900+',
    icon: 'assets/images/icons/dashbord-item2.png',
    bgClass: 'bg-success-600',
  },
  {
    title: 'Active Courses',
    count: '100+',
    icon: 'assets/images/icons/dashbord-item3.png',
    bgClass: 'bg-warning-600',
  },
  {
    title: 'Completed Courses',
    count: '1000+',
    icon: 'assets/images/icons/dashbord-item4.png',
    bgClass: 'bg-warning-600',
  },
  {
    title: 'Total Students',
    count: '88,000+',
    icon: 'assets/images/icons/dashbord-item5.png',
    bgClass: 'bg-main-600',
  },
  {
    title: 'Total Earnings',
    count: '$956,542.00',
    icon: 'assets/images/icons/dashbord-item6.png',
    bgClass: 'bg-success-600',
  },
];
const instructors = [
  {
    name: 'Kathryn Murphy',
    img: 'assets/images/thumbs/testi-img2.png',
    courses: 17,
    students: 2132,
    rating: '4.8(55K+ Students)'
  },
  {
    name: 'Leslie Alexander',
    img: 'assets/images/thumbs/user-two-img5.png',
    courses: 6,
    students: 234,
    rating: '4.8(55K+ Students)'
  },
  {
    name: 'Savannah Nguyen',
    img: 'assets/images/thumbs/user-two-img3.png',
    courses: 12,
    students: 113,
    rating: '4.8(55K+ Students)'
  },
  {
    name: 'Ralph Edwards',
    img: 'assets/images/thumbs/user-two-img1.png',
    courses: 13,
    students: 231,
    rating: '4.8(55K+ Students)'
  },
  {
    name: 'Jane Cooper',
    img: 'assets/images/thumbs/testimonial-five-img3.png',
    courses: 8,
    students: 190,
    rating: '4.8(55K+ Students)'
  },
  {
    name: 'Kristin Watson',
    img: 'assets/images/thumbs/reviewer-img4.png',
    courses: 1,
    students: 121,
    rating: '4.8(55K+ Students)'
  },
  {
    name: 'Wade Warren',
    img: 'assets/images/thumbs/reviewer-img3.png',
    courses: 5,
    students: 623,
    rating: '4.8(55K+ Students)'
  }
];
const recentCourses = [
  { title: 'Vuejs Courses', img: 'assets/images/thumbs/dashboard-img1.png', time: '5 hr 45 min', lessons: 10, students: 193 },
  { title: 'Swift Courses', img: 'assets/images/thumbs/dashboard-img2.png', time: '5 hr 45 min', lessons: 16, students: 193 },
  { title: 'Objective C Courses', img: 'assets/images/thumbs/dashboard-img3.png', time: '5 hr 45 min', lessons: 5, students: 542 },
  { title: 'NodeJS Courses', img: 'assets/images/thumbs/dashboard-img4.png', time: '5 hr 45 min', lessons: 20, students: 321 },
  { title: 'CSS3 Courses', img: 'assets/images/thumbs/dashboard-img5.png', time: '5 hr 45 min', lessons: 12, students: 113 },
  { title: 'Angular Courses', img: 'assets/images/thumbs/dashboard-img6.png', time: '5 hr 45 min', lessons: 8, students: 4734 },
  { title: 'Jango Courses', img: 'assets/images/thumbs/dashboard-img7.png', time: '5 hr 45 min', lessons: 7, students: 472 }
];

// Sidebar Component
const Sidebar = () => (
  <div className="dashbord bg-main-25 w-100 overflow-hidden">
      <div className="d-flex">
        {/* ======== Dashboard Sidebar start ======== */}
        <div className="dashboard-sidebar px-20 py-24 max-w-288-px bg-white w-100 border-end border-neutral-40 position-relative">
          <a href="#">
            <img src="assets/images/logo/logo.png" alt="Logo" />
          </a>
          <span className="w-100 bg-neutral-40 mb-24 mt-24 h-1"></span>
          <div className="overflow-x-auto">
            <div className="scrollbar min-w-max">
              <span className="text-neutral-500 fw-normal text-14 mb-8">
                Bienvenu Ndeye,
              </span>
              <ul>
                {[
                  {
                    label: 'Dashboard',
                    icon: 'ph-bold ph-house',
                    href: 'admin-dashbord.html',
                  },
                  {
                    label: 'My Profile',
                    icon: 'ph ph-user-circle',
                    href: 'my-profile.html',
                  },
                  {
                    label: 'Message',
                    icon: 'ph ph-chat-dots',
                    href: 'dashbord-message.html',
                  },
                  {
                    label: 'Courses',
                    icon: 'ph ph-watch',
                    href: 'dashbord-courses.html',
                  },
                  {
                    label: 'Wishlist',
                    icon: 'ph ph-bookmark-simple',
                    href: 'dashbord-wishlist.html',
                  },
                  {
                    label: 'Users',
                    icon: 'ph ph-sparkle',
                    href: 'deshbord-reviews.html',
                  },
                  {
                    label: 'Quiz Attempts',
                    icon: 'ph ph-seal-question',
                    href: 'dashbord-quiz-attempts.html',
                  },
                  {
                    label: 'Settings',
                    icon: 'ph ph-gear',
                    href: 'dashbord-settings.html',
                    isAdmin: true,
                  },
                ].map((item, index) => (
                  <React.Fragment key={index}>
                    {item.isAdmin && (
                      <li className="mb-8">
                        <span className="fw-normal text-14 text-neutral-500">Admin</span>
                      </li>
                    )}
                    <li className="mb-8">
                      <a
                        href={item.href}
                        className="fw-medium d-flex align-items-center text-14 gap-8 text-neutral-500 hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap"
                      >
                        <span className="text-16 text-main-600 item-hover__text transition-03">
                          <i className={item.icon}></i>
                        </span>
                        {item.label}
                      </a>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>

          <div className="position-absolute inset-block-end-0 inset-inline-start-0 pb-16 px-16 w-100">
            <a
              href="sign-in.html"
              className="text-14 fw-medium text-neutral-500 d-flex align-items-center gap-8 hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap bg-white"
            >
              <span className="text-16 text-main-600 item-hover__text transition-03">
                <i className="ph ph-sign-out"></i>
              </span>
              Logout
            </a>
          </div>
        </div>
        {/* ======== Dashboard Sidebar end ======== */}
      </div>
      <div className="dashbord-body flex-grow-1">
        <div className="px-24 py-16 bg-neutral-10 border-bottom border-neutral-40 w-100">
      <div className="d-flex align-items-center justify-content-between gap-24 w-100">
        <div className="d-flex align-items-center gap-24">
          <button
            type="button"
            className="toggle-dashbord-button text-neutral-500 text-28 line-height-1 d-lg-none d-block"
          >
            <i className="ph-bold ph-list"></i>
          </button>
          <div className="max-w-357-px position-relative d-sm-block d-none">
            <form action="#">
              <input
                type="text"
                placeholder="Search"
                className="ps-16 pe-36 py-9 border border-neutral-40 rounded-pill focus-visible-outline focus-border-main-600 text-14 line-height-1"
              />
              <button
                type="button"
                className="w-28 h-28 bg-main-600 text-white text-16 rounded-circle justify-content-center align-items-center d-flex position-absolute top-50-percent translate-middle-y inset-inline-end-0-px me-4"
              >
                <i className="ph-bold ph-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="d-flex align-items-center gap-16">
          <a
            href="#"
            className="px-20 py-10 border-main-600 border rounded-pill text-14 text-main-600 hover-bg-main-600 hover-text-white hover-border-600 d-lg-block d-none line-height-1"
          >
            Create a New Course
          </a>

          <div className="w-36 h-36 border-neutral-50 border rounded-pill justify-content-center align-items-center d-flex text-20 text-neutral-500 hover-bg-main-600 transition-03">
            <button type="button" className="hover-text-white transition-03">
              <i className="ph ph-translate"></i>
            </button>
          </div>

          {/* Notifications Dropdown */}
          <div className="position-relative">
            <div className="w-36 h-36 border-neutral-50 border rounded-pill justify-content-center align-items-center d-flex text-20 text-neutral-500 position-relative">
              <div>
                <button
                  className="dropdown-toggle w-36 h-36 border-neutral-50 border rounded-pill hover-bg-main-600 hover-text-white transition-03"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="ph ph-bell-simple"></i>
                </button>
                <ul className="dropdown-menu rounded-12">
                  {[
                    {
                      img: 'assets/images/thumbs/reviewer-img1.png',
                      name: 'Ronald Richards',
                      text: 'You can stitch between artboards',
                    },
                    {
                      img: 'assets/images/thumbs/reviewer-img4.png',
                      name: 'Arlene McCoy',
                      text: 'Invite you to prototyping',
                    },
                    {
                      img: 'assets/images/thumbs/instructor-details-thumb.png',
                      name: 'Annette Black',
                      text: 'Invite you to prototyping',
                    },
                  ].map((notif, index) => (
                    <li key={index}>
                      <a
                        className="dropdown-item d-flex align-items-center gap-12 px-16 py-12"
                        href="javascript:void(0)"
                      >
                        <div className="d-flex w-100 justify-content-between gap-12">
                          <div className="d-flex align-items-center gap-12">
                            <span className="w-36 h-36">
                              <img src={notif.img} alt={notif.name} />
                            </span>
                            <div>
                              <span className="text-md fw-semibold text-line-1">
                                {notif.name}
                              </span>
                              <p className="text-sm text-line-1 text-neutral-300">{notif.text}</p>
                            </div>
                          </div>
                          <span className="text-sm fw-medium text-neutral-400">23 Mins ago</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="position-absolute inset-inline-start-22px top--20-percent">
                <span className="bg-main-600 text-white w-16 h-16 rounded-circle text-9 d-flex justify-content-center align-items-center">
                  2
                </span>
              </div>
            </div>
          </div>

          {/* Chat icon */}
          <div className="w-36 h-36 border-neutral-50 border rounded-pill justify-content-center align-items-center d-flex text-20 text-neutral-500 hover-bg-main-600 transition-03">
            <button type="button" className="hover-text-white transition-03">
              <i className="ph ph-chat-dots"></i>
            </button>
          </div>

          {/* Profile Dropdown */}
          <div className="dropdown">
            <button
              className="dropdown-toggle w-36 h-36 border-neutral-50 border rounded-pill"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="assets/images/thumbs/testimonials-three-img1.png" alt="Profile" />
            </button>
            <ul className="dropdown-menu rounded-12">
              <li>
                <a
                  className="dropdown-item d-flex align-items-center gap-12 hover-text-main-600 transition-03"
                  href="my-profile.html"
                >
                  <span>
                    <i className="ph ph-user-circle"></i>
                  </span>
                  <span>My Profile</span>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item d-flex align-items-center gap-12 hover-text-main-600 transition-03"
                  href="dashbord-settings.html"
                >
                  <span>
                    <i className="ph ph-gear"></i>
                  </span>
                  <span>Settings</span>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item d-flex align-items-center gap-12 hover-text-main-600 transition-03"
                  href="sign-in.html"
                >
                  <span>
                    <i className="ph ph-power"></i>
                  </span>
                  <span>Log Out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* dashboard body */}
    <div className="px-24 py-24">
      <h4 className="fw-semibold text-neutral-500 text-20 ">Dashboard</h4>
      <br/>
      <br />
       <div className="row gy-4">
         <div className="row">
      {dashboardItems.map((item, index) => (
        <div key={index} className="col-xl-4 col-sm-6 mb-4">
          <div className="px-20 py-20 bg-white rounded-10">
            <div className="d-flex gap-16 justify-content-between mb-12">
              <div>
                <span className="fw-normal text-14 text-neutral-400 mb-4 d-block">
                  {item.title}
                </span>
                <h6 className="text-18 fw-semibold text-neutral-500 mb-0">
                  {item.count}
                </h6>
              </div>
              <span
                className={`w-44 h-44 ${item.bgClass} rounded-circle justify-content-center align-items-center d-flex`}
              >
                <img src={item.icon} alt={item.title} />
              </span>
            </div>
            <a
              href="#"
              className="text-12 fw-medium text-main-600 text-decoration-underline transition-03"
            >
              View all
            </a>
          </div>
        </div>
      ))}
    </div>
    <div className="col-xl-8 mb-4">
      <div className="bg-white px-20 py-20 rounded-10 z-n1">
        <div className="d-flex align-items-center justify-content-between gpa-24">
          <span className="text-16 fw-medium text-neutral-400">Overview Information</span>
          <div className="d-flex align-items-center gap-8">
            <span className="fw-medium text-12 text-neutral-400">Sort By :</span>
            <select className="form-select text-12 w-auto pe-26 border-neutral-40 border bg-main-25 px-16 py-8 fw-normal">
              <option value="1">Last 2 years</option>
              <option value="2">Last 3 years</option>
              <option value="3">Last 4 years</option>
              <option value="4">Last 1 years</option>
            </select>
          </div>
        </div>

        <span className="mt-20 mb-20 border-bottom-solid d-inline-block w-100"></span>

        <div id="react-chart">{/* You can place your chart component here */}</div>

        <div className="d-flex justify-content-center text-center mt-3">
          <ul className="d-flex align-items-center gap-24">
            <li className="text-14 fw-normal d-flex align-items-center gap-8 text-neutral-500">
              <span className="w-6 h-6 bg-main-600 rounded-circle z-1 flex-shrink-0"></span>
              Total Students
            </li>
            <li className="text-14 fw-normal d-flex align-items-center gap-8 text-neutral-500">
              <span className="w-6 h-6 bg-warning-600 rounded-circle z-1 flex-shrink-0"></span>
              Total Courses
            </li>
          </ul>
        </div>
      </div>
    </div>

                    <div className="col-xl-4 mb-4">
      <div className="px-20 py-20 bg-white rounded-10 z-n1">
        <div className="d-flex align-items-center justify-content-between gpa-24">
          <span className="text-14 fw-normal text-neutral-500">Reports</span>
          <div className="d-flex align-items-center gap-8">
            <span className="fw-normal text-12 text-neutral-400">Sort By :</span>
            <select className="form-select w-auto pe-26 border-neutral-40 border text-12 bg-main-25 px-16 py-8">
              <option value="1">Weekly</option>
              <option value="2">Yearly</option>
              <option value="3">Monthly</option>
              <option value="4">Daily</option>
            </select>
          </div>
        </div>

        <span className="mt-20 mb-20 border-bottom-solid d-inline-block w-100"></span>

        <div id="donutChart">{/* Your donut chart component can go here */}</div>

        <span className="mt-20 mb-20 border-bottom-solid d-inline-block w-100"></span>

        <div className="d-flex align-items-center flex-wrap gap-20">
          <ul>
            <li className="text-14 fw-normal text-neutral-400 d-flex flex-wrap align-items-center gap-12 mb-16">
              <span className="w-6 h-6 bg-primary-500 rounded-circle z-1"></span>
              Total Courses
            </li>
            <li className="text-14 fw-normal text-neutral-400 d-flex flex-wrap align-items-center gap-12">
              <span className="w-6 h-6 bg-purple-500 rounded-circle z-1"></span>
              Enrolled Courses
            </li>
          </ul>

          <span className="h-50-px bg-neutral-40 w-1"></span>

          <ul>
            <li className="text-14 fw-normal text-neutral-400 d-flex flex-wrap align-items-center gap-12 mb-16">
              <span className="w-6 h-6 bg-warning-700 rounded-circle z-1"></span>
              Active Courses
            </li>
            <li className="text-14 fw-normal text-neutral-400 d-flex flex-wrap align-items-center gap-12">
              <span className="w-6 h-6 bg-success-600 rounded-circle z-1"></span>
              Completed Courses
            </li>
          </ul>

          <span className="h-50-px bg-neutral-40 w-1"></span>

          <ul>
            <li className="text-14 fw-normal text-neutral-400 d-flex flex-wrap align-items-center gap-12 mb-16">
              <span className="w-6 h-6 bg-primary-700 rounded-circle z-1"></span>
              Total Students
            </li>
            <li className="text-14 fw-normal text-neutral-400 d-flex flex-wrap align-items-center gap-12">
              <span className="w-6 h-6 bg-warning-500 rounded-circle z-1"></span>
              Total Earnings
            </li>
          </ul>
        </div>

        <span className="mt-20 border-bottom-solid d-inline-block w-100"></span>
      </div>
      
    </div>
    
   
 <div className="col-xl-6 mb-4">
    <div className="px-24 py-24 bg-white rounded-10">
      <div className="d-flex align-items-center justify-content-between mb-24">
        <h6 className="mb-0 fw-medium text-16 text-neutral-500">Popular Instructor</h6>
        <a href="#" className="text-12 fw-medium text-main-600 hover-underline transition-03">View all</a>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-max w-100">
          <thead>
            <tr className="bg-main-25 border-bottom">
              <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Instructor</th>
              <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Courses</th>
              <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Students</th>
              <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Reviews</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((instructor, index) => (
              <tr key={index} className="hover-bg-neutral-20 border-bottom transition-03">
                <td className="py-22 px-20">
                  <div className="d-flex align-items-center gap-12">
                    <img src={instructor.img} alt={instructor.name} className="w-32 h-32" />
                    <span className="fw-medium text-14 text-neutral-500">{instructor.name}</span>
                  </div>
                </td>
                <td className="py-22 px-20 text-14 fw-normal text-neutral-500">{instructor.courses}</td>
                <td className="py-22 px-20 text-14 fw-normal text-neutral-500">{instructor.students}</td>
                <td className="py-22 px-20">
                  <div className="d-flex align-items-center gap-8 text-14 text-neutral-500">
                    <span className="text-20 text-warning-600">
                      <i className="ph-fill ph-star"></i>
                    </span>
                    {instructor.rating}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div className="col-xl-6 mb-4">
    <div className="px-24 py-24 bg-white rounded-10">
      <div className="d-flex align-items-center justify-content-between mb-24">
        <h6 className="mb-0 fw-medium text-16 text-neutral-500">Recent Course</h6>
        <a href="#" className="text-12 fw-medium text-main-600 hover-underline transition-03">View all</a>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-max w-100">
          <thead>
            <tr className="bg-main-25 border-bottom border-neutral-30">
              <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Course Title | Hours</th>
              <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Total Lesson</th>
              <th className="text-12 fw-medium text-neutral-500 py-16 px-20">Students</th>
            </tr>
          </thead>
          <tbody>
            {recentCourses.map((course, index) => (
              <tr key={index} className="hover-bg-neutral-20 border-bottom transition-03">
                <td className="py-22 px-20">
                  <div className="d-flex align-items-center gap-12">
                    <a href="#">
                      <img src={course.img} alt={course.title} className="w-48 h-32" />
                    </a>
                    <div>
                      <h6 className="fw-medium text-14 mb-0 text-neutral-500">{course.title}</h6>
                      <span className="fw-normal text-12 text-neutral-500">{course.time}</span>
                    </div>
                  </div>
                </td>
                <td className="py-22 px-20 text-14 fw-normal text-neutral-500">{course.lessons}</td>
                <td className="py-22 px-20 text-14 fw-normal text-neutral-500">{course.students}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
    </div>
        </div>
    </div>
    </div>
  
);

// Topbar Component
// const Topbar = () => (
//     <div className="dashbord-body flex-grow-1">
//     <div className="px-24 py-16 bg-neutral-10 border-bottom border-neutral-40 w-100">
//       <div className="d-flex align-items-center justify-content-between gap-24 w-100">
//         <div className="d-flex align-items-center gap-24">
//           <button
//             type="button"
//             className="toggle-dashbord-button text-neutral-500 text-28 line-height-1 d-lg-none d-block"
//           >
//             <i className="ph-bold ph-list"></i>
//           </button>
//           <div className="max-w-357-px position-relative d-sm-block d-none">
//             <form action="#">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="ps-16 pe-36 py-9 border border-neutral-40 rounded-pill focus-visible-outline focus-border-main-600 text-14 line-height-1"
//               />
//               <button
//                 type="button"
//                 className="w-28 h-28 bg-main-600 text-white text-16 rounded-circle justify-content-center align-items-center d-flex position-absolute top-50-percent translate-middle-y inset-inline-end-0-px me-4"
//               >
//                 <i className="ph-bold ph-magnifying-glass"></i>
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className="d-flex align-items-center gap-16">
//           <a
//             href="#"
//             className="px-20 py-10 border-main-600 border rounded-pill text-14 text-main-600 hover-bg-main-600 hover-text-white hover-border-600 d-lg-block d-none line-height-1"
//           >
//             Create a New Course
//           </a>

//           <div className="w-36 h-36 border-neutral-50 border rounded-pill justify-content-center align-items-center d-flex text-20 text-neutral-500 hover-bg-main-600 transition-03">
//             <button type="button" className="hover-text-white transition-03">
//               <i className="ph ph-translate"></i>
//             </button>
//           </div>

//           {/* Notifications Dropdown */}
//           <div className="position-relative">
//             <div className="w-36 h-36 border-neutral-50 border rounded-pill justify-content-center align-items-center d-flex text-20 text-neutral-500 position-relative">
//               <div>
//                 <button
//                   className="dropdown-toggle w-36 h-36 border-neutral-50 border rounded-pill hover-bg-main-600 hover-text-white transition-03"
//                   type="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   <i className="ph ph-bell-simple"></i>
//                 </button>
//                 <ul className="dropdown-menu rounded-12">
//                   {[
//                     {
//                       img: 'assets/images/thumbs/reviewer-img1.png',
//                       name: 'Ronald Richards',
//                       text: 'You can stitch between artboards',
//                     },
//                     {
//                       img: 'assets/images/thumbs/reviewer-img4.png',
//                       name: 'Arlene McCoy',
//                       text: 'Invite you to prototyping',
//                     },
//                     {
//                       img: 'assets/images/thumbs/instructor-details-thumb.png',
//                       name: 'Annette Black',
//                       text: 'Invite you to prototyping',
//                     },
//                   ].map((notif, index) => (
//                     <li key={index}>
//                       <a
//                         className="dropdown-item d-flex align-items-center gap-12 px-16 py-12"
//                         href="javascript:void(0)"
//                       >
//                         <div className="d-flex w-100 justify-content-between gap-12">
//                           <div className="d-flex align-items-center gap-12">
//                             <span className="w-36 h-36">
//                               <img src={notif.img} alt={notif.name} />
//                             </span>
//                             <div>
//                               <span className="text-md fw-semibold text-line-1">
//                                 {notif.name}
//                               </span>
//                               <p className="text-sm text-line-1 text-neutral-300">{notif.text}</p>
//                             </div>
//                           </div>
//                           <span className="text-sm fw-medium text-neutral-400">23 Mins ago</span>
//                         </div>
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="position-absolute inset-inline-start-22px top--20-percent">
//                 <span className="bg-main-600 text-white w-16 h-16 rounded-circle text-9 d-flex justify-content-center align-items-center">
//                   2
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Chat icon */}
//           <div className="w-36 h-36 border-neutral-50 border rounded-pill justify-content-center align-items-center d-flex text-20 text-neutral-500 hover-bg-main-600 transition-03">
//             <button type="button" className="hover-text-white transition-03">
//               <i className="ph ph-chat-dots"></i>
//             </button>
//           </div>

//           {/* Profile Dropdown */}
//           <div className="dropdown">
//             <button
//               className="dropdown-toggle w-36 h-36 border-neutral-50 border rounded-pill"
//               type="button"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               <img src="assets/images/thumbs/testimonials-three-img1.png" alt="Profile" />
//             </button>
//             <ul className="dropdown-menu rounded-12">
//               <li>
//                 <a
//                   className="dropdown-item d-flex align-items-center gap-12 hover-text-main-600 transition-03"
//                   href="my-profile.html"
//                 >
//                   <span>
//                     <i className="ph ph-user-circle"></i>
//                   </span>
//                   <span>My Profile</span>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className="dropdown-item d-flex align-items-center gap-12 hover-text-main-600 transition-03"
//                   href="dashbord-settings.html"
//                 >
//                   <span>
//                     <i className="ph ph-gear"></i>
//                   </span>
//                   <span>Settings</span>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className="dropdown-item d-flex align-items-center gap-12 hover-text-main-600 transition-03"
//                   href="sign-in.html"
//                 >
//                   <span>
//                     <i className="ph ph-power"></i>
//                   </span>
//                   <span>Log Out</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// DashboardCards Component
// const DashboardCards = () => {
//   const cards = [
//     { title: "Total Cours", value: "12", icon: "📘", color: "primary" },
//     { title: "Étudiants inscrits", value: "350", icon: "🎓", color: "success" },
//     { title: "Avis reçus", value: "128", icon: "⭐", color: "warning" },
//     { title: "Revenus", value: "$2,345", icon: "💰", color: "info" },
//   ];

//   return (
//     <div className="row g-4">
//       {cards.map((card, index) => (
//         <div className="col-md-3" key={index}>
//           <div className={`card text-white bg-${card.color} h-100`}>
//             <div className="card-body">
//               <div className="d-flex justify-content-between">
//                 <div>
//                   <h6 className="card-title">{card.title}</h6>
//                   <h4 className="card-text fw-bold">{card.value}</h4>
//                 </div>
//                 <div className="fs-1">{card.icon}</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// ChartSection Component (Mockup)
// const ChartSection = () => (
//   <div className="row mt-4">
//     <div className="col-md-8">
//       <div className="card h-100">
//         <div className="card-header">Vue d'ensemble des cours</div>
//         <div className="card-body text-center text-muted">[Graphique à insérer ici]</div>
//       </div>
//     </div>
//     <div className="col-md-4">
//       <div className="card h-100">
//         <div className="card-header">Répartition par type</div>
//         <div className="card-body text-center text-muted">[Camembert ici]</div>
//       </div>
//     </div>
//   </div>
// );

// TablesSection Component (Mockup)
// const TablesSection = () => (
//   <div className="row mt-4">
//     <div className="col-md-6">
//       <div className="card">
//         <div className="card-header">Instructeurs récents</div>
//         <div className="card-body">
//           <ul className="list-group list-group-flush">
//             <li className="list-group-item">John Doe</li>
//             <li className="list-group-item">Jane Smith</li>
//             <li className="list-group-item">Aliou Sarr</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     <div className="col-md-6">
//       <div className="card">
//         <div className="card-header">Derniers avis</div>
//         <div className="card-body">
//           <ul className="list-group list-group-flush">
//             <li className="list-group-item">Cours React - ⭐⭐⭐⭐☆</li>
//             <li className="list-group-item">Cours Node - ⭐⭐⭐⭐⭐</li>
//             <li className="list-group-item">Cours HTML - ⭐⭐⭐☆☆</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// Dashboard Container
const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
     
    </div>
  );
};

export default Dashboard;
