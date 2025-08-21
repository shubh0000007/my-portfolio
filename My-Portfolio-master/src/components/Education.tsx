import React from 'react';
import { motion } from 'framer-motion';
import { School } from 'lucide-react';
import { personalInfo } from '../config/personal-info';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            My Learning <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My academic path in data science and computer engineering
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-blue-500 to-blue-700 transform -translate-x-1/2"></div>

          {personalInfo.education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-10 flex items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="hidden md:block w-1/2"></div>
              <div className="hidden md:block relative">
                <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg">
                  <School className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <p className={`text-sm font-semibold text-blue-600 mb-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>{item.year}</p>
                <h3 className={`text-xl font-bold text-gray-900 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>{item.school}</h3>
                <p className={`text-lg font-medium text-gray-700 mt-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>{item.degree}</p>
                {item.description && <p className={`mt-2 text-gray-600 text-sm ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>{item.description}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 