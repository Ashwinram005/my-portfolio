import projectsData from "../assets/projectsData"; // adjust the path accordingly

const Projects = () => {
  return (
    <div className="bg-gray-200 py-16 px-6 sm:px-12 md:px-24">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-indigo-700 mb-8 text-center">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-700 hover:text-indigo-800"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
