import workerImage from '../../../assets/images/why-choose-us.png'; // Adjust the path as necessary
import { features } from 'utils/data';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 w-full">
          <p className="text-secondary font-semibold mb-2">
            Lorem ipsum dolor sit
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Why Choose Us
          </h2>
          <img
            src={workerImage}
            alt="Construction Worker"
            className="w-full h-auto"
          />
        </div>

        <div className="lg:w-1/2 w-full ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="border border-blue-base p-6 rounded-md shadow-sm bg-white hover:shadow-md transition"
              >
                <h3 className="text-primary font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-base text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
