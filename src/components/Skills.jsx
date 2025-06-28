import { Brain, Code, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-700 to-purple-600",
      skills: [
        { name: "C/C++", category: "Expert" },
        { name: "Java", category: "Expert" },
        { name: "Python", category: "Advanced" },
        { name: "JavaScript", category: "Intermediate" },
      ],
    },
    {
      title: "AI & ML Technologies",
      icon: Brain,
      color: "from-green-700 to-emerald-600",
      skills: [
        { name: "TensorFlow", category: "Advanced" },
        { name: "OpenCV", category: "Advanced" },
        { name: "Google AI", category: "Advanced" },
        { name: "Langflow AI", category: "Intermediate" },
      ],
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "from-orange-700 to-red-600",
      skills: [
        { name: "HTML/CSS", category: "Intermediate" },
        { name: "React.js", category: "Beginner" },
        { name: "Flask", category: "Intermediate" },
        { name: "SpringBoot", category: "Intermediate" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "from-purple-700 to-pink-600",
      skills: [
        { name: "Git/GitHub", category: "Expert" },
        { name: "VS Code", category: "Expert" },
        { name: "Postman", category: "Intermediate" },
        { name: "AWS S3, EC2", category: "Beginner" },
        { name: "Docker", category: "Beginner" },
        { name: "Kubernetes", category: "Beginner" },
        { name: "MySQL", category: "Intermediate" },
        { name: "Canva", category: "Intermediate" },
        { name: "Figma", category: "Beginner" },
        { name: "Jupyter Notebook", category: "Intermediate" },
        { name: "PyCharm", category: "Intermediate" },
        { name: "Eclipse", category: "Intermediate" },
        { name: "IntelliJ IDEA", category: "Intermediate" },
      ],
    },
  ];

  const getCategoryBadgeColor = (category) => {
    switch (category) {
      case 'Expert': return 'bg-green-100 text-green-800 border-green-300';
      case 'Advanced': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Beginner': return 'bg-gray-100 text-gray-800 border-gray-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Technical Skills</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive skillset built across programming, machine learning, development frameworks, and modern tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 animate-fade-in-up"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${category.color} p-5 rounded-t-2xl flex items-center`}>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 animate-float">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium border ${getCategoryBadgeColor(skill.category)}`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tailwind Animation Utility */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out both;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
