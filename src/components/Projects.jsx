import { Award, Brain, ChevronRight, Code, ExternalLink, Github, Heart, Shield } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Holisticare",
      subtitle: "AI-Powered Wellness Assistant",
      category: "Healthcare AI",
      hackathon: "Avinya 3.0 Hackathon Winner (2nd Place)",
      description: "A comprehensive wellness assistant that generates personalized fitness and mental health prompts with 85%+ accuracy, leveraging user input history and behavioral patterns.",
      longDescription: "Holisticare represents a breakthrough in personalized healthcare technology. By combining advanced AI techniques with user behavioral analysis, the system creates tailored wellness recommendations that adapt to individual needs and preferences in real-time.",
      technologies: ["Next.js", "React.js", "Flask", "Langflow AI", "Google Generative AI"],
      features: [
        "Built a full-stack wellness assistant with 85%+ accuracy in personalized recommendations",
        "Integrated Langflow-driven AI chains with Google's Generative AI for emotion-sensitive conversations",
        "Implemented real-time sentiment detection using NLP and event-based API coordination",
        "Developed responsive and context-aware user interaction system",
        "Created adaptive tone and intent modification based on user emotional state"
      ],
      achievements: ["2nd Place among 350+ teams", "85%+ recommendation accuracy", "Real-time sentiment analysis"],
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      github: "https://github.com/Anis196/Avinya3.0-Hackathon",
      demo: "#"
    },
    {
      title: "BiteSense",
      subtitle: "Snake Bite Classification System",
      category: "Medical AI",
      hackathon: "Deep Learning Research Project",
      description: "Advanced deep learning model using ResNet50 and TensorFlow-GPU for accurate detection of poisonous vs non-poisonous snake bites from medical wound imagery.",
      longDescription: "BiteSense addresses a critical medical emergency scenario by providing rapid, accurate classification of snake bite severity. The system uses state-of-the-art computer vision techniques to analyze wound imagery and provide immediate guidance to medical professionals.",
      technologies: ["Python", "TensorFlow-GPU", "ResNet50", "Keras", "OpenCV", "NumPy", "CUDA"],
      features: [
        "Built and trained deep learning classification model using ResNet50 and TensorFlow-GPU",
        "Enabled accurate detection of poisonous vs non-poisonous snake bites from medical imagery",
        "Applied transfer learning and augmentation to boost model generalization on unseen data",
        "Improved prediction robustness through advanced data preprocessing techniques",
        "Integrated GPU acceleration (CUDA) and mixed precision training for optimal performance",
        "Achieved real-time image classification capability for emergency medical scenarios"
      ],
      achievements: ["Real-time classification", "GPU-accelerated performance", "Transfer learning optimization"],
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      github: "https://github.com/Anis196/BiteSense",
      demo: ""
    },
    {
      title: "SoWell",
      subtitle: "Anonymous AI Therapist",
      category: "Mental Health AI",
      hackathon: "Anonymous Real-time Video+Chat Therapy System",
      description: "Real-time facial emotion recognition system integrated with AI therapy, providing personalized mental health support through advanced computer vision and NLP.",
      longDescription: "SoWell revolutionizes mental health support by combining facial emotion recognition with AI-powered therapeutic conversations. The system provides anonymous, accessible mental health assistance with real-time emotional understanding.",
      technologies: ["Python", "Flask", "OpenCV", "DeepFace", "Google Generative AI", "LangChain", "JavaScript", "MTCNN"],
      features: [
        "Developed real-time facial emotion recognition pipeline using MTCNN and DeepFace",
        "Implemented user sentiment detection to trigger responsive UI changes",
        "Enhanced AI response capability with better emotional understanding",
        "Integrated LangChain with Google Generative AI for adaptive conversations",
        "Built personalized chatbot tone and guidance based on real-time emotional inputs",
        "Created anonymous and secure therapy session environment"
      ],
      achievements: ["Real-time emotion detection", "Adaptive AI responses", "Anonymous therapy sessions"],
      icon: Brain,
      color: "from-purple-500 to-indigo-500",
      github: "https://github.com/Anis196/SoWell_Personal_Therapist",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative AI/ML projects showcasing expertise in healthcare technology, computer vision, and intelligent systems
          </p>
        </div>

        {/* Project Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  activeProject === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon size={18} className="mr-2" />
                {project.title}
              </button>
            );
          })}
        </div>

        {/* Active Project Display */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          {projects.map((project, index) => {
            if (index !== activeProject) return null;
            
            const Icon = project.icon;
            return (
              <div key={index} className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Project Info */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center mr-4`}>
                        <Icon className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-1">{project.title}</h3>
                        <p className="text-xl text-gray-600 font-medium">{project.subtitle}</p>
                      </div>
                    </div>

                    <div className="flex items-center mb-6">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Award size={16} className="mr-2" />
                        {project.hackathon}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {project.longDescription}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Code size={20} className="mr-2 text-blue-600" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                      >
                        <Github size={20} className="mr-2" />
                        View Code
                      </a>
                      <a
                        href={project.demo}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
                      >
                        <ExternalLink size={20} className="mr-2" />
                        Live Demo
                      </a>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <ChevronRight size={20} className="mr-2 text-green-600" />
                        Key Features & Implementation
                      </h4>
                      <ul className="space-y-3">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Award size={20} className="mr-2 text-green-600" />
                        Key Achievements
                      </h4>
                      <div className="grid gap-3">
                        {project.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3"></div>
                            <span className="text-gray-700 font-medium text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Stats */}
        {/* <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Project Impact</h3>
            <p className="text-lg mb-6 opacity-90">
              Developing cutting-edge AI solutions that address real-world challenges in healthcare, wellness, and emergency response
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Brain className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold mb-1">3</div>
                <p className="text-sm opacity-80">AI Projects</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold mb-1">2nd</div>
                <p className="text-sm opacity-80">Place Winner</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Cpu className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold mb-1">85%+</div>
                <p className="text-sm opacity-80">AI Accuracy</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Database className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold mb-1">10+</div>
                <p className="text-sm opacity-80">Technologies</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;