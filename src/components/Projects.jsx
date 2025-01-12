import projectsData from "../assets/projectsData"; // adjust the path accordingly

const Projects = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-12 md:px-24">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                {project.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center mb-6">
                {project.description}
              </p>
              <div className="flex justify-center space-x-4 mt-auto">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-full font-medium hover:bg-indigo-700 transition duration-300"
                  >
                    View Project
                  </a>
                )}
                {project.githublink && (
                  <a
                    href={project.githublink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800 transition duration-300"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
