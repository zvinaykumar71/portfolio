import React from 'react';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'GraphQL'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'Python', 'Django', 'REST APIs'] },
  { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis', 'MySQL'] },
  { category: 'DevOps & Cloud', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Serverless'] },
  { category: 'Tools', items: ['Git', 'Jest', 'Cypress', 'Webpack', 'Figma', 'Agile/Scrum'] },
];

const SkillCategory = ({ category, items }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, index) => (
          <span 
            key={index}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="mb-16 scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-blue-500 pb-2 inline-block">Skills & Technologies</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <SkillCategory key={index} category={skill.category} items={skill.items} />
        ))}
      </div>
    </section>
  );
};

export default Skills;