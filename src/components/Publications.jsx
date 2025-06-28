import React from "react";
import { FileText, ExternalLink, Users, Calendar, Award } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title:
        "Hierarchical Bayesian Inference and Advanced Multivariate Computational Paradigms for Precision-Enhanced Personalization in Multi-Entity Culinary Ordering Systems",
      authors: [
        "Anis Shaikh",
        "Sanika Jachak",
        "Omkar Maurya",
        "Aditya Bhagat",
        "Shwetal Raipure",
      ],
      journal: "IEEE Conference Proceedings",
      date: "Sep 2024",
      doi: "10.1109/ICONAT61936.2024.10774696",
      type: "Conference Paper",
      abstract:
        "This research presents a novel approach to personalization in culinary ordering systems using hierarchical Bayesian inference and advanced multivariate computational paradigms. The study demonstrates significant improvements in recommendation accuracy and user satisfaction through sophisticated mathematical modeling.",
      keywords: [
        "Bayesian Inference",
        "Machine Learning",
        "Personalization",
        "Computational Paradigms",
        "Culinary Systems",
      ],
      impact: {
        views: "16+",
        conference_location: "GOA, India",
        conference: "ICONAT 2024",
      },
    },
  ];

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Publications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contributing to academic research with innovative solutions in AI/ML
            and computational paradigms
          </p>
        </div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <FileText className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                        {pub.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          <span>{pub.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Award size={16} className="mr-2" />
                          <span>{pub.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Paper
                  </a>
                </div>

                {/* Authors */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Users size={20} className="mr-2 text-blue-600" />
                    Authors
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pub.authors.map((author, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          author === "Anis Shaikh"
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {author}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Abstract */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Abstract
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {pub.abstract}
                  </p>
                </div>

                {/* Keywords */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Keywords
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pub.keywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Publication Details */}
                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Publication Details
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Journal:</span>
                        <span className="font-medium text-gray-900">
                          {pub.journal}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">DOI:</span>
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline font-mono text-xs font-medium"
                          title="View DOI link"
                        >
                          {pub.doi}
                        </a>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-500">Conference:</span>
                        <span className="font-medium text-gray-900">
                          {pub.impact.conference}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Information
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center bg-gray-50 rounded-lg p-3">
                        <div className="text-xl font-bold text-blue-600">
                          {pub.impact.views}
                        </div>
                        <div className="text-xs text-gray-500">Views</div>
                      </div>
                      <div className="text-center bg-gray-50 rounded-lg p-3">
                        <div className="text-xl font-bold text-green-600">
                          {pub.impact.conference_location}
                        </div>
                        <div className="text-xs text-gray-500">Conference Location</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Focus */}
      </div>
    </section>
  );
};

export default Publications;
