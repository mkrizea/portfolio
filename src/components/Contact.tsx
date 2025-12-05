import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto text-center px-6"
    >
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>

      <p className="text-gray-700 mb-8">
        Feel free to reach out for collaboration or inquiries.
      </p>

      <ul className="space-y-4 text-lg text-gray-800">
        <li className="flex items-center justify-center gap-3">
          <Mail className="text-blue-600" size={22} />
          mariakrizea@gmail.com
        </li>

        <li className="flex items-center justify-center gap-3">
          <Linkedin className="text-blue-600" size={22} />
          <a
            href="https://www.linkedin.com/in/maria-krizea/"
            target="_blank"
            className="hover:text-blue-700"
          >
            LinkedIn
          </a>
        </li>

        <li className="flex items-center justify-center gap-3">
          <Github className="text-blue-600" size={22} />
          <a
            href="https://github.com/mkrizea"
            target="_blank"
            className="hover:text-blue-700"
          >
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
