const ContactForm = () => {
  return (
    <form className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full border border-gray-300 p-2 rounded"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full border border-gray-300 p-2 rounded"
        required
      />
      <textarea
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
