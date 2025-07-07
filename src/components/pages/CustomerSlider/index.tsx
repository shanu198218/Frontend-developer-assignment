import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonials } from 'utils/data';

const CustomPrevArrow = ({ onClick }: any) => (
  <div
    className="slick-arrow md:left-[-45px] left-[-10px] text-black flex items-center justify-center rounded-full cursor-pointer z-10 absolute top-1/2 -translate-y-1/2"
    onClick={onClick}
  >
    <i className="ri-arrow-left-s-line md:text-4xl text-xl"></i>
  </div>
);

const CustomNextArrow = ({ onClick }: any) => (
  <div
    className="slick-arrow md:right-[-45px] right-[-10px] text-black flex items-center justify-center rounded-full cursor-pointer z-10 absolute top-1/2 -translate-y-1/2"
    onClick={onClick}
  >
    <i className="ri-arrow-right-s-line md:text-4xl text-xl"></i>
  </div>
);

const CustomerSlider = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,

    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    customPaging: () => (
      <div className="w-3 h-3 rounded-full active:bg-secondary bg-secondary/45   mx-1 transition-all duration-300"></div>
    ),
    appendDots: (dots: any) => (
      <div>
        <ul className="flex justify-center mt-6">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-accent py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <p className="text-sm text-orange-500">Lorem ipsum dolor sit amet</p>
        <h2 className="text-3xl font-bold text-primary">
          Appreciated By Our Customers
        </h2>
      </div>

      <div className="max-w-6xl mx-auto w-full relative">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-3">
              <div className="bg-white p-6 my-6 rounded shadow-md min-h-[250px] relative">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.title}</p>
                    <div className="text-orange-500 text-sm mt-1">
                      {'★'.repeat(t.stars)}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{t.quote}</p>
                <div className="absolute top-4 right-4 text-gray-300 text-5xl">
                  &#10077;
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerSlider;
