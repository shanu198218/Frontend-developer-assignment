import heroImage from '../../../assets/images/cabin.png';
import backgroundImage from '../../../assets/images/background.jpg';
import { StatCard } from '../../Common/Cards/status-card';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative z-10  flex flex-col justify-between h-full min-h-screen">
        {/* Content Row */}
        <div className="flex flex-col   lg:flex-row items-center justify-between flex-grow">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className=" max-w-7xl mx-auto px-16 py-20  space-y-6 text-center lg:text-left">
              <p className="text-orange-600 font-bold ">
                Innovative, Reliable, and Sustainable
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
                Innovative Cabins for <br /> Modern Needs
              </h1>
              <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-primary text-white px-6 py-3 font-semibold rounded hover:bg-blue-800 transition">
                Explore Our Products
              </button>
            </div>

            {/* Stats Section */}
            <div className="bg-primary text-white xl:w-3/2 w-full  h-24 py-3 px-4">
              <div className="max-w-lg mx-auto flex flex-row items-center justify-center  text-center md:mt-2">
                <StatCard
                  iconClass="ri-user-heart-fill"
                  value="1000 +"
                  label="Happy Customers"
                />
                <StatCard
                  iconClass="ri-file-list-3-fill"
                  value="500 +"
                  label="Projects Done"
                />
                <StatCard
                  iconClass="ri-award-fill"
                  value="30 +"
                  label="Years of Experience"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img
              src={heroImage}
              alt="Cabin Image"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
