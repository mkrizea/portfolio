import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Portfolio",
    summary: "This site — a short introduction and a way to get in touch.",
    href: "https://github.com/mkrizea/portfolio",
  },
  {
    name: "ToDo List",
    summary: "A to-do list application.",
    href: "https://github.com/mkrizea/todo-list",
  },
  {
    name: "Blog App",
    summary: "A blog application.",
    href: "https://github.com/mkrizea/blog-app",
  },
];

function Projects() {
  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
        Projects
      </h1>
      <p className="mt-3 max-w-prose text-gray-600">
        Each card opens the GitHub repository in a new tab.
      </p>

      <ul className="mt-8 grid gap-4">
        {projects.map((project) => (
          <li key={project.name}>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-gray-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <span>
                <span className="block text-lg font-medium text-gray-900">
                  {project.name}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-gray-600">
                  {project.summary}
                </span>
                <span className="mt-3 block text-sm text-gray-500">
                  {project.href.replace(/^https?:\/\//, "")}
                </span>
              </span>
              <span className="mt-1 inline-flex shrink-0 items-center gap-1 text-sm font-medium text-gray-900">
                GitHub
                <ArrowUpRight
                  size={16}
                  aria-hidden
                  className="motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                />
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
