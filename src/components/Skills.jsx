import skillsData from "../assets/skillData"; 

const Skills = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-12 md:px-24">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-indigo-700 mb-12">
          My Skills
        </h2>

        {/* Skills List */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <p className="text-lg text-gray-600 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
