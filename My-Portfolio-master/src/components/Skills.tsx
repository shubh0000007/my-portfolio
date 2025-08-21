import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../config/personal-info';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Core Programming',
      skills: personalInfo.skills.programming,
      color: 'from-blue-500 to-blue-700',
      icon: '💻'
    },
    {
      title: 'AI & Machine Learning',
      skills: personalInfo.skills.ml_dl,
      color: 'from-purple-500 to-purple-700',
      icon: '🤖'
    },
    {
      title: 'Advanced Analytics',
      skills: personalInfo.skills.analytics,
      color: 'from-green-500 to-green-700',
      icon: '📊'
    },
    {
      title: 'Visualization & BI',
      skills: personalInfo.skills.visualization,
      color: 'from-orange-500 to-orange-700',
      icon: '🎨'
    },
    {
      title: 'Cloud & Infrastructure',
      skills: personalInfo.skills.cloud_devops,
      color: 'from-indigo-500 to-indigo-700',
      icon: '☁️'
    },
    {
      title: 'Data Engineering',
      skills: personalInfo.skills.databases,
      color: 'from-red-500 to-red-700',
      icon: '⚡'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and methodologies I use to transform data into actionable insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className={`px-3 py-2 bg-gradient-to-r ${category.color} bg-opacity-10 text-gray-700 rounded-lg text-sm font-medium border border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:scale-105`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* What's Next Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 text-white text-center border border-white/10 shadow-2xl">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Continuous Innovation</h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Currently mastering advanced ML architectures, real-time streaming analytics, 
              and cloud-native data engineering. Every project is an opportunity to push boundaries!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">Advanced ML</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">Real-time Analytics</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">Cloud Engineering</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
