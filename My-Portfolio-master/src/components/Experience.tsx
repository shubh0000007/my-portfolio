import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Award } from 'lucide-react';
import { personalInfo } from '../config/personal-info';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Work <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey in data analysis and machine learning
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full"></div>

          <div className="space-y-12">
            {personalInfo.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className="ml-16 flex-1">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                        <div className="flex items-center gap-4 text-gray-600">
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-4 lg:mt-0">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {exp.description}
                      </p>
                    </div>

                    {/* Key Achievements */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-blue-600" />
                        Key Achievements
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {exp.title === "Data Analyst Intern" ? (
                          <>
                            <div className="bg-blue-50 rounded-lg p-4">
                              <div className="text-2xl font-bold text-blue-600">30%</div>
                              <div className="text-sm text-gray-600">Reduction in data retrieval time</div>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-4">
                              <div className="text-2xl font-bold text-blue-600">20%</div>
                              <div className="text-sm text-gray-600">Reduction in reporting time</div>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-4">
                              <div className="text-2xl font-bold text-blue-600">83%</div>
                              <div className="text-sm text-gray-600">Loan eligibility model accuracy</div>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-4">
                              <div className="text-2xl font-bold text-blue-600">25%</div>
                              <div className="text-sm text-gray-600">Reduction in data processing time</div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="bg-blue-50 rounded-lg p-4">
                              <div className="text-2xl font-bold text-blue-600">86%</div>
                              <div className="text-sm text-gray-600">Churn prediction accuracy</div>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-4">
                              <div className="text-2xl font-bold text-blue-600">15%</div>
                              <div className="text-sm text-gray-600">Improvement in retention strategy</div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 border border-gray-100 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking for New Opportunities</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm actively seeking roles where I can leverage my data analysis skills to drive business impact and create meaningful insights.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300"
            >
              Let's Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 