import {
  Bot,
  Briefcase,
  Calendar,
  Lightbulb,
  PenTool,
  Users,
} from "lucide-react";
import websiteLogo from './website-logo.png';
const Experience = () => {
  const experiences = [
    {
      title: "Student Chapter President",
      organization: "Association for Computing Machinery RSCOE",
      website: "https://rscoe.acm.org/",
      duration: "Aug 2023 - Sep 2025*",
      type: "Leadership Role",
      icon: Users,
      description:
        "Leading the ACM Student Chapter with a focus on enhancing student engagement and organizing technical events.",
      responsibilities: [
        "Led and coordinated multiple events and symposiums, enhancing engagement and outreach",
        "Started as a Content & Documentation Team member, handling event planning",
        "Managed report writing and official correspondence",
        "Supervised teams of 60+ student volunteers",
        "Organized technical workshops and coding competitions",
        "Built partnerships with industry professionals",
      ],
      skills: [
        "Leadership",
        "Event Management",
        "Team Coordination",
        "Public Speaking",
      ],
      achievements: [
        "Increased chapter membership by 40%",
        "Organized 5+ major technical events",
        "Established industry mentorship program",
      ],
    },
    {
      title: "Digital Content & Automation Associate",
      organization: "Kala Avishkar College Magazine Team",
      duration: "2023 - 2024",
      type: "Technical Role",
      icon: Bot,
      description:
        "Leveraged AI-powered tools to optimize content creation and design processes for the college magazine.",
      responsibilities: [
        "Utilized AI-powered tools (ChatGPT, Copilot, Gemini) to optimize content structuring",
        "Enhanced visual design and image generation using AI tools",
        "Integrated automation with creative problem-solving techniques",
        "Improved efficiency, scalability, and originality of content production",
        "Streamlined workflow processes for magazine publication",
        "Collaborated with editorial team on content strategy",
      ],
      skills: [
        "AI Tools",
        "Content Creation",
        "Automation",
        "Visual Design",
        "Workflow Optimization",
      ],
      achievements: [
        "Reduced content creation time by 60%",
        "Improved content quality and consistency",
        "Implemented automated design workflows",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leadership and technical experience gained through active
            involvement in student organizations and innovative projects
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start mb-4 lg:mb-0">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mr-4 flex-shrink-0 overflow-hidden">
                      {exp.title === "Student Chapter President" ? (
                        <img
                          src={websiteLogo}
                          alt="ACM Logo"
                          className="h-30 w-30 object-contain"
                        />
                      ) : (
                        <exp.icon className="text-white" size={38} />
                      )}
                    </div>

                    <div>
  <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.title}</h3>
  <p className="text-lg text-gray-600 font-medium">{exp.organization}</p>

  {exp.website && (
    <a
      href={exp.website}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 text-sm font-medium inline-flex items-center hover:underline mb-1"
      title={`Visit ${exp.organization} website`}
      aria-label={`Visit ${exp.organization} website`}
      style={{ textDecoration: 'none' }}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
      </svg>
      {exp.website.replace(/^https?:\/\//, '')}
    </a>
  )}

  <div className="flex items-center text-gray-500">
    <Calendar size={16} className="mr-2" />
    <span className="text-sm font-medium">{exp.duration}</span>
  </div>
</div>

                  </div>

                  <div className="flex items-center">
                    <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {exp.description}
                </p>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Briefcase size={20} className="mr-2 text-blue-600" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills & Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <PenTool size={20} className="mr-2 text-green-600" />
                      Skills Developed
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Lightbulb size={20} className="mr-2 text-yellow-600" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Experience Summary
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Combining leadership excellence with technical innovation to drive
              meaningful impact in academic and professional settings.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-blue-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">2+</div>
                <p className="text-gray-600">Years of Leadership</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="text-green-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">5+</div>
                <p className="text-gray-600">Technial Events Organized</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Bot className="text-purple-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">60%</div>
                <p className="text-gray-600">Efficiency Improvement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
