import backgroundImage from '../../../assets/images/middle-background.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { services } from 'utils/data';

const OurService = () => {
  return (
    <section
      className="relative bg-cover bg-center h-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative z-10  ">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-secondary font-semibold mb-2">
              Lorem ipsum dolor
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-gray-base mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded hover:bg-blue-800 transition">
              Learn More
            </button>
          </div>

          <div className="lg:w-1/2 w-full">
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2.5 },
              }}
              className="w-full"
            >
              {services.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative h-72 rounded overflow-hidden group shadow-md">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                      <p className="text-white font-semibold text-lg">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
