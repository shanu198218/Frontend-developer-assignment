import React from 'react';
import contactPerson from '../../../assets/images/contact-us/contact-us-avatar.png';
import ContactForm from './contact-form';
import backgroundImage from '../../../assets/images/contact-us/background.png';
const ContactUs = () => {
  return (
    <section
      className="relative bg-cover bg-left h-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-7xl bg-none mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src={contactPerson}
            alt="Contact Person"
            className="md:w-[333px] w-full h-[478px] object-cover"
          />
        </div>

        <div>
          <h2 className="md:text-3xl text-xl text-center font-bold text-primary mb-4">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
