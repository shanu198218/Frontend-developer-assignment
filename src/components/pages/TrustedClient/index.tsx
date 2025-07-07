import { clients } from 'utils/data';

const TrustedClients = () => {
  return (
    <section className="bg-base py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-orange-600 font-semibold mb-2">
          Lorem ipsum dolor sit amet
        </p>
        <h2 className="text-3xl font-bold text-primary mb-10">
          Our Trusted Clients
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center w-[120px] h-[80px]"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-full max-w-full object-contain hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
