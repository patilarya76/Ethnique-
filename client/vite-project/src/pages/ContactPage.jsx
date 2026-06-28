const ContactPage = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">

      <h1 className="text-4xl font-serif mb-10">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <h3>Email</h3>
          <p>support@ethniquebyjayant.com</p>

          <h3 className="mt-6">
            WhatsApp
          </h3>

          <p>+91 XXXXX XXXXX</p>
        </div>

        <form className="space-y-4">

          <input
            placeholder="Name"
            className="w-full border p-3 rounded"
          />

          <input
            placeholder="Email"
            className="w-full border p-3 rounded"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full border p-3 rounded"
          />

          <button
            className="
            bg-[#8C2F4D]
            text-white
            px-6
            py-3
            rounded
          "
          >
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
};

export default ContactPage;