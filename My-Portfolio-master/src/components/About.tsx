import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Rocket, Scale, Milestone } from 'lucide-react';
import { personalInfo } from '../config/personal-info';

const About: React.FC = () => {
  const values = [
    {
      icon: BrainCircuit,
      title: 'Data-Driven Insights',
      description: 'I transform complex datasets into actionable insights that drive strategic business decisions.'
    },
    {
      icon: Rocket,
      title: 'Scalable Solutions',
      description: 'I build robust, scalable data pipelines and ML systems that grow with business needs.'
    },
    {
      icon: Scale,
      title: 'Research Excellence',
      description: 'I conduct rigorous research and publish findings that contribute to the field of AI/ML.'
    },
    {
      icon: Milestone,
      title: 'Continuous Learning',
      description: 'I stay current with emerging technologies and methodologies in data science and AI.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about data analysis and driven by curiosity to create meaningful insights from complex datasets
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
            <div className="space-y-4 text-gray-600">
              {personalInfo.about.story.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl">
              <img 
                src={personalInfo.about.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">My Core Principles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:from-blue-50 hover:to-blue-50"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 