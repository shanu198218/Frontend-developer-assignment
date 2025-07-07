import { projects } from 'utils/data';

const OurProduct = () => {
  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-6 text-start">
        <p className="text-secondary font-semibold mb-2">
          Lorem ipsum dolor sit amet
        </p>
        <h2 className="text-3xl font-bold text-primary mb-10">Our Products</h2>

        <div className="grid  sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-items-center">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className=" rounded overflow-hidden transition hover:shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-primary font-semibold text-sm">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProduct;
