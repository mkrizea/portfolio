function Projects() {
  const projects = [
    { name: "Dashboard App", link: "#" },
    { name: "UI Clone", link: "#" },
    { name: "Portfolio Website", link: "#" },
  ];

  return (
    <section className="py-10 px-10">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            className="p-6 bg-white rounded shadow hover:shadow-lg transition"
          >
            {project.name}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;