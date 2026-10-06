import { Link } from "react-router-dom";

const focuses = [
  {
    title: "React, Next.js, TypeScript",
    text: "4+ years building front-end products with this stack.",
  },
  {
    title: "User experience",
    text: "High-quality interfaces shaped from product requirements.",
  },
  {
    title: "Collaboration",
    text: "Scalable front-end work with cross-functional teams.",
  },
];

const actionClass =
  "inline-flex min-h-11 items-center justify-center rounded-lg px-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

function About() {
  return (
    <section>
      <p className="text-sm font-medium text-blue-700">
        Front-End Developer
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900">
        Hello, I am Maria Krizea
      </h1>
      <div className="mt-5 max-w-prose space-y-4 text-base leading-relaxed text-gray-700">
        <p>
          Front-End Developer with 4+ years of professional experience
          specializing in React, Next.js and TypeScript. Strong focus on
          building high-quality user experiences, translating product
          requirements into effective solutions, and contributing to scalable
          front-end development in collaborative, cross-functional teams.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/projects"
          className={`${actionClass} bg-gray-900 text-white hover:bg-gray-800`}
        >
          View projects
        </Link>
        <Link
          to="/contact"
          className={`${actionClass} border border-gray-300 bg-white text-gray-900 hover:bg-gray-100`}
        >
          Get in touch
        </Link>
      </div>

      <h2 className="mt-12 text-sm font-medium tracking-wide text-gray-500 uppercase">
        Focus
      </h2>
      <ul className="mt-3 grid gap-3 sm:grid-cols-3">
        {focuses.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl border border-gray-200 bg-white p-4"
          >
            <h3 className="font-medium text-gray-900">{item.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default About;
