function Contact() {
  return (
    <section className="py-10 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Name" className="p-3 border rounded" />
        <input
          type="email"
          placeholder="Email"
          className="p-3 border rounded"
        />
        <textarea
          placeholder="Message"
          className="p-3 border rounded"
        ></textarea>
        <button className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
