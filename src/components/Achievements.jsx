import { Award, Calendar, Star, Target, Trophy, Zap } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Avinya 3.0 National Hackathon",
      subtitle: "2nd Rank Winner",
      description: "Secured 2nd place among 350+ teams in a nationwide innovation challenge with the Holisticare project.",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
      stats: "350+ Teams",
      category: "Hackathon",
      year: "2024",
      details: [
        "Built AI-powered wellness assistant",
        "Achieved 85%+ recommendation accuracy",
        "Implemented real-time sentiment analysis",
        "Competed against top engineering colleges nationwide"
      ]
    },
    {
      title: "Smart India Hackathon 2024",
      subtitle: "National Finalist",
      description: "Ranked among the Top 7 out of 500+ teams (semi-finals) across India for solving drone-based intelligent system for Apple Orchard Management in Himachal Pradesh.",
      icon: Award,
      color: "from-blue-500 to-indigo-500",
      stats: "Top 7/500+",
      category: "National Competition",
      year: "2024",
      details: [
        "Developed drone-based agricultural solution",
        "Problem Statement ID: 1611",
        "Created prototype demonstration video",
        "Advanced to national semi-finals",
        "Focused on AI-driven orchard management"
      ]
    },
    {
      title: "GATE 2025 Qualified",
      subtitle: "Computer Science Stream",
      description: "Scored 393 with an All India Rank (AIR) under 15,000 in the Computer Science and Information Technology stream.",
      icon: Star,
      color: "from-green-500 to-emerald-500",
      stats: "AIR < 15,000",
      category: "Academic Achievement",
      year: "2025",
      details: [
        "Score: 393 out of 1000",
        "All India Rank under 15,000",
        "Computer Science & IT stream",
        "Qualified for M.Tech admissions",
        "Demonstrates strong technical foundation"
      ]
    }
  ];

  const otherAchievements = [
    
    {
      title: "Problems Solver",
      description: "Solved 500+ problems across platforms such as LeetCode, Codeforces, and code360, focusing on data structures, algorithms, database and system design.",
      icon: Target,
      stats: "500+ Problems",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Academic Excellence",
      description: "Maintaining exceptional CGPA of 9.7/10 in Computer Engineering at JSPM's RSCOE, Pune. Had 10 CGPA in FY & SY.",
      icon: Zap,
      stats: "9.7/10 CGPA"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition and accolades earned through dedication, innovation, and excellence in academics and competitive programming
          </p>
        </div>

        {/* Major Achievements */}
        <div className="space-y-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex items-start mb-6 lg:mb-0 lg:flex-1">
                      <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center mr-6 flex-shrink-0`}>
                        <Icon className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold text-gray-900">{achievement.title}</h3>
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                            {achievement.category}
                          </span>
                        </div>
                        <p className="text-xl text-gray-600 font-semibold mb-3">{achievement.subtitle}</p>
                        <p className="text-gray-600 leading-relaxed mb-6">{achievement.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights</h4>
                            <ul className="space-y-2">
                              {achievement.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-700 text-sm">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
                      <div className={`bg-gradient-to-r ${achievement.color} text-white px-6 py-3 rounded-full mb-3`}>
                        <div className="text-lg font-bold">{achievement.stats}</div>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm font-medium">{achievement.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Other Notable Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Other Notable Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {otherAchievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{achievement.description}</p>
                  <div className="bg-white rounded-full px-4 py-2 inline-block">
                    <span className="text-blue-600 font-bold text-sm">{achievement.stats}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievement Summary */}
        
      </div>
    </section>
  );
};

export default Achievements;