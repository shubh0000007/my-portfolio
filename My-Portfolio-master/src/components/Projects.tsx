import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Smartphone, Globe, Star } from 'lucide-react';
import { personalInfo } from '../config/personal-info';

const Projects: React.FC = () => {
  const getIconForCategory = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return Code;
      case 'Data Analytics':
        return Globe;
      case 'Data Engineering':
        return Smartphone;
      default:
        return Globe;
    }
  };

  const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
    const [expanded, setExpanded] = useState(false);
    const maxLength = 120;
    const isLong = project.description.length > maxLength;
    const displayText = expanded || !isLong
      ? project.description
      : project.description.slice(0, maxLength) + '...';
    const IconComponent = getIconForCategory(project.category);

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
      >
        {/* Project Image/Placeholder */}
        <div className={`h-48 relative overflow-hidden ${!project.image.startsWith('/') ? project.image : 'bg-gradient-to-br from-blue-50 to-blue-100'} flex items-center justify-center`}>
          {project.image.startsWith('/') ? (
            <>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <IconComponent className="w-16 h-16 text-white/90" />
              </div>
            </>
          ) : (
            <IconComponent className="w-16 h-16 text-blue-600" />
          )}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
              {project.category}
            </span>
          </div>
          {/* Featured Badge for top 3 projects */}
          {index < 3 && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full text-sm font-medium flex items-center gap-1">
                <Star className="w-3 h-3" />
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">{project.title}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {displayText}
            {isLong && (
              <button
                className="ml-2 text-blue-600 underline font-medium focus:outline-none"
                onClick={() => setExpanded((prev) => !prev)}
              >
                {expanded ? 'Show less' : 'Read more'}
              </button>
            )}
          </p>

          {/* Technologies */}
          <div className="mb-4">
            {Object.entries(project.technologies).map(([category, techs]) => (
              <div key={category} className="mb-3">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {(techs as string[]).map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of my data analysis and machine learning projects that demonstrate my skills and passion for turning data into insights
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalInfo.projects.map((project, index) => (
            <div key={project.title}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to See More?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Explore my GitHub to see more projects and contributions to the data science community.
            </p>
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              Explore GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 