import skillsData from "../assets/skillData"; 

const Skills = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-12 md:px-24">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
          My Skills
        </h2>

        {/* Skills List */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition duration-200 transform hover:scale-105"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4 transition-transform duration-200 hover:scale-110"
              />
              <p className="text-base md:text-lg text-gray-700 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
