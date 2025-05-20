import React from 'react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product catalog, shopping cart, and payment processing',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Redux'],
    link: 'https://example-ecommerce.com',
    github: 'https://github.com/username/ecommerce-platform'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates using WebSockets',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    link: 'https://taskmanager.example.com',
    github: 'https://github.com/username/task-manager'
  },
  {
    title: 'AI Content Analyzer',
    description: 'Machine learning application that analyzes and categorizes text content',
    technologies: ['Python', 'Django', 'TensorFlow', 'React', 'Docker'],
    link: 'https://ai-analyzer.example.com',
    github: 'https://github.com/username/ai-content-analyzer'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="mb-16 scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-blue-500 pb-2 inline-block">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Live Demo
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;