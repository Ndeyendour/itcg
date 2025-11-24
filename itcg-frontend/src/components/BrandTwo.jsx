import Slider from "react-slick";

const BrandTwo = () => {
  const settings = {
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 900,
    dots: false,
    pauseOnHover: true,
    arrows: false,
    draggable: true,
    infinite: true,
    lazyLoad: "ondemand", // Lazy loading images
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 359,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  // Example brand logos (this could come from an API or dynamic data)
  const brandLogos = [
    "assets/images/thumbs/brand-img1.png",
    "assets/images/thumbs/brand-img2.png",
    "assets/images/thumbs/brand-img3.png",
    "assets/images/thumbs/brand-img4.png",
    "assets/images/thumbs/brand-img5.png",
    "assets/images/thumbs/brand-img6.png",
    "assets/images/thumbs/brand-img7.png",
    "assets/images/thumbs/brand-img3.png", // Duplicate example for infinity loop
  ];

  return (
    <div
      className="brand wow fadeInUpBig"
      data-wow-duration="1s"
      data-wow-delay=".5s"
    >
      <div className="container container--lg">
        <div className="brand-box py-80 px-16">
          <h5 className="mb-40 text-center text-neutral-500">
            TRUSTED BY OVER 17,300 GREAT TEAMS
          </h5>
          <div className="container">
            <Slider {...settings} className="brand-slider">
              {brandLogos.map((logo, index) => (
                <div key={index} className="brand-slider__item px-24">
                  <img
                    src={logo}
                    alt={`Brand logo ${index + 1}`} // Added alt text for accessibility
                    className="lazyload" // Optional: lazyload class
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandTwo;
