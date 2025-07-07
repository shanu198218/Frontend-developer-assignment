import React, { useRef } from 'react';
import emailjs from 'emailjs-com'; // or '@emailjs/browser' if using Vite
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
      )

      .then(
        (result) => {
          toast.success('✅ Message sent successfully!');
          form.current?.reset();
        },
        (error) => {
          toast.error('❌ Failed to send message. Please try again.');
          console.error(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow space-y-4"
    >
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        className="w-full border border-gray-300 p-2 rounded"
        required
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        className="w-full border border-gray-300 p-2 rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="w-full border border-gray-300 p-2 rounded"
        rows={4}
        required
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
