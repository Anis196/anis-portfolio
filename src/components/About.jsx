import { Award, Heart, Lightbulb, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-justify">
              I'm Anis Shaikh, a dedicated Computer Engineering student at JSPM's Rajarshi Shahu College 
              of Engineering, Pune, with an exceptional CGPA of 9.7/10. My journey in technology is 
              driven by a deep passion for artificial intelligence, machine learning, and innovative 
              software development.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-justify">
              As a competitive programmer with a LeetCode rating of 1410 and 450+ problems solved 
              across various coding platforms on varied topics including data structures, algorithms, 
              databases and system design, I have honed my problem-solving skills and analytical thinking.
              I thrive on challenging algorithmic problems. My experience spans from leading the 
              ACM Student Chapter to developing cutting-edge AI applications that have earned 
              recognition in national hackathons.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-justify">
              I believe in the power of technology to solve real-world problems and am committed 
              to contributing meaningfully to the field of computer science through research, 
              innovation, and continuous learning.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Excellence</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Academic & Technical</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Leadership</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">ACM President</p>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Core Values & Interests</h4>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <Lightbulb className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">Innovation</h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Constantly exploring new technologies and creative solutions to complex problems
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                    <Target className="text-green-600 dark:text-green-400" size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">Research</h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Contributing to academic research in AI/ML with published papers
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                    <Heart className="text-purple-600 dark:text-purple-400" size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">Impact</h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Building applications that make a positive difference in people's lives
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Facts</h5>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Location:</span>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Pune, India</p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Focus:</span>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Java Backend/System Design</p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Role:</span>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Student Leader</p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Goal:</span>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Tech Innovation and Lifelong Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
