function Projects() {
  const projects = [
    { name: "Portfolio", link: "https://github.com/mkrizea/portfolio" },
    { name: "ToDo List", link: "https://github.com/mkrizea/todo-list" },
    { name: "Blog App", link: "https://github.com/mkrizea/blog-app" },
  ];

  return (
    <section className="px-10 text-center">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            target="_blank"
          >
            {project.name}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;