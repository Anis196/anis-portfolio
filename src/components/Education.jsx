import { Award, Calendar, GraduationCap, TrendingUp } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "JSPM's Rajarshi Shahu College of Engineering, Pune",
      duration: "Sep 2022 - Jun 2026*",
      cgpa: "9.7/10",
      description: "Specializing in Computer Engineering with exceptional academic performance. Currently pursuing advanced coursework in AI/ML, Data Structures, Algorithms, and Software Engineering.",
      highlights: [
        "Top 1% of the College",
        "Consistent academic excellence",
        "10 CGPA in FY & SY",
        "Leadership roles in student organizations"
      ]
    },
    {
      degree: "Higher Secondary Education (Science)",
      institution: "ASM's Geetamata Junior College, Pune",
      duration: "Sep 2020 - May 2022",
      cgpa: "85.83%",
      description: "Completed higher secondary education with Physics, Chemistry, Mathematics, and Computer Science. Achieved excellent results in state board examinations.",
      highlights: [
        "MHTCET: 97.14 Percentile - Among Top 3% in India",
        "Strong foundation in Mathematics and Science",
        "MHTCET All India Rank 6170 (2022)",
        "Merit-based college admission"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic journey marked by excellence, innovation, and continuous learning
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <GraduationCap className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                        <p className="text-lg text-gray-600 font-medium">{edu.institution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 lg:flex-col lg:items-end">
                    <div className="flex items-center text-gray-500">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm font-medium">{edu.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                        <Award size={16} className="mr-2" />
                        {edu.cgpa}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {edu.description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <TrendingUp size={20} className="mr-2 text-blue-600" />
                    Key Highlights
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {edu.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center bg-gray-50 rounded-lg p-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                        <span className="text-gray-700 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Academic Information */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
            <p className="text-lg mb-6 opacity-90">
              Consistently maintaining top academic performance while actively engaging in research, 
              leadership activities, and competitive programming.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">In top 5</div>
                <p className="text-sm opacity-80">Rankers in College</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">9.7</div>
                <p className="text-sm opacity-80">Current CGPA</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2026</div>
                <p className="text-sm opacity-80">Expected Graduation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;