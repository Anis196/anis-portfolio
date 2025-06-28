import React from "react";
import {
  Award,
  Calendar,
  ExternalLink,
  BookOpen,
  Code,
  Globe,
  Zap,
} from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Programming in Java",
      provider: "NPTEL",
      description:
        "Comprehensive certification covering core Java programming concepts, object-oriented programming principles, and advanced Java features.",
      icon: Code,
      color: "from-orange-500 to-red-500",
      status: "Completed",
      skills: [
        "Java Programming",
        "OOP Concepts",
        "Data Structures",
        "Exception Handling",
      ],
      credentialUrl: "https://drive.google.com/file/d/1E65dnqQoWA-9421JVAsQa9l0TdR9lM2b/view?usp=sharing",
    },
    {
      title: "Computer Networks and Internet Protocol",
      provider: "NPTEL",
      description:
        "In-depth study of computer networking fundamentals, TCP/IP protocol suite, network security, and modern networking technologies.",
      icon: Globe,
      color: "from-blue-500 to-indigo-500",
      status: "Completed",
      skills: ["Network Protocols", "TCP/IP", "Network Security", "Routing"],
      credentialUrl: "https://drive.google.com/file/d/1aEPm-gJ81RnSzeEMqQcU5_yXQbqmMQeK/view?usp=sharing",
    },
    {
      title: "Postman API Fundamentals",
      provider: "Postman Student Expert",
      description:
        "Expertise in API testing, development, and documentation using Postman platform for modern software development workflows.",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      status: "Completed",
      skills: ["API Testing", "REST APIs", "API Documentation", "Automation"],
      credentialUrl: "https://drive.google.com/file/d/152RWGSSmROgsLTkzHUbp-XHhjOxDyzaQ/view?usp=sharing",
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Architecting",
      provider: "Amazon Web Services",
      description:
        "Comprehensive training in designing scalable, reliable, and secure applications on the AWS cloud infrastructure.",
      icon: Award,
      color: "from-yellow-500 to-yellow-700",
      status: "Completed",
      skills: [
        "Cloud Architecture",
        "AWS Core Services",
        "Design Patterns",
        "Scalability",
      ],
      credentialUrl: "https://www.credly.com/badges/c64ab2ff-23ad-48c5-8c16-419b7bfa5ee1/public_url", // replace with actual badge URL if available
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      provider: "Amazon Web Services",
      description:
        "Fundamental understanding of AWS cloud concepts, infrastructure, services, security, and compliance essentials.",
      icon: Award,
      color: "from-gray-500 to-gray-700",
      status: "Completed",
      skills: ["AWS Basics", "Cloud Computing", "IAM", "Core Services"],
      credentialUrl: "https://www.credly.com/badges/de534d7a-526c-471b-8f8d-1e2983c5abda/public_url ", // replace with actual badge URL if available
    },
    {
      title: "AWS Cloud Virtual Internship",
      provider: "Amazon Web Services",
      description:
        "Period: Completed a virtual internship involving hands-on projects in cloud architecture, compute, storage, and networking within AWS.",
      icon: Globe,
      color: "from-teal-500 to-blue-600",
      status: "Completed",
      skills: ["Cloud Projects", "EC2 & S3", "Networking", "IAM & Security"],
      credentialUrl: "https://drive.google.com/file/d/1EY8Z-CEj3rw7wGunb2ZVnrRcGt6qgGov/view?usp=sharing",
    },

    {
      title: "SpellBee Competition",
      provider: "International Level",
      description:
        "Achieved finalist status in international-level SpellBee competition, demonstrating exceptional English language proficiency and vocabulary skills.",
      icon: Award,
      color: "from-purple-500 to-pink-500",
      status: "Finalist",
      skills: [
        "English Proficiency",
        "Vocabulary",
        "Communication",
        "Public Speaking",
      ],
      credentialUrl: "https://drive.google.com/file/d/1NJ1nhWE6dLdHCShgvdJJv2YclZMqasUu/view?usp=sharing",
    },
    {
      title: "Java Spring Framework 6, Spring Boot 3, Spring AI",
      provider: "Telusko/Udemy",
      description:
        "Currently pursuing advanced certification in modern Java Spring ecosystem, including Spring Boot 3 and emerging Spring AI technologies.",
      icon: BookOpen,
      color: "from-indigo-500 to-purple-500",
      status: "Ongoing",
      skills: ["Spring Framework", "Spring Boot", "Spring AI", "Microservices"],
      credentialUrl: "#",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Ongoing":
        return "bg-blue-100 text-blue-800";
      case "Finalist":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return "✓";
      case "Ongoing":
        return "⏳";
      case "Finalist":
        return "🏆";
      default:
        return "📋";
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications and recognitions validating expertise in
            programming, networking, API development, and continuous learning
            journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${cert.color} p-6`}>
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{cert.title}</h3>
                        <p className="text-white/90 font-medium">
                          {cert.provider}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        cert.status
                      )} flex items-center`}
                    >
                      <span className="mr-1">{getStatusIcon(cert.status)}</span>
                      {cert.status}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Skills Covered
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center text-gray-500">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">Professional Certificate</span>
                    </div>
                    <a
                      href={cert.credentialUrl}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      View Credential
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certification Categories */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Certification Categories
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Programming
              </h4>
              <p className="text-gray-600 text-sm">Java, Spring Framework</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Networking
              </h4>
              <p className="text-gray-600 text-sm">
                Computer Networks, Protocols
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                API Development
              </h4>
              <p className="text-gray-600 text-sm">Postman, REST APIs</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Competition
              </h4>
              <p className="text-gray-600 text-sm">
                SpellBee, International Level
              </p>
            </div>
          </div>
        </div>

        {/* Certification Summary */}9
      </div>
    </section>
  );
};

export default Certifications;
